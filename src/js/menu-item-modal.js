import { BaseModal } from "./base-modal";
import { Header } from "./header";

export class MenuItemModal extends BaseModal {
  constructor({
    id,
    imageSrc,
    name,
    description,
    price,
    currency,
    sizes,
    additives,
  }) {
    super();
    this.id = id;
    this.imageSrc = imageSrc;
    this.title = name;
    this.description = description;
    this.price = price;
    this.currency = currency;
    this.sizes = sizes;
    this.additives = additives;
    this.header = new Header();
  }

  renderModal() {
    const content = this.createModalTemplate();
    super.renderModal(content);
    this.bindEvents();
    super.openModal();
  }

  createModalTemplate() {
    let template = "";

    template += `<div class="modal__image-wrapper">`;
    template += `<img src="./src/images/menu/coffee/coffee-1.png" alt="Irish coffee" class="modal__image"/>`;
    template += `</div>`;

    template += `<div class="modal__content">`;
    template += `<div class="modal__text">`;
    template += `<h3 class="modal__title">${this.title}</h3>`;
    template += `<p class="modal__description">${this.description}</p>`;
    template += `</div>`;

    template += `<div class="modal__sizes">`;

    template += `<span class="modal__sizes-label">Size</span>`;
    template += `<div class="modal__sizes-tabs tabs">`;

    this.sizes.forEach((sizeData, i) => {
      template += `<div class="${
        i === 0 ? "tab tab_active" : "tab"
      }" data-addprice="${sizeData["add-price"]}">`;
      template += `<span class="tab__icon">`;
      template += `<span class="icon">${sizeData.label}</span>`;
      template += `</span>`;
      template += `<span class="tab__text">${sizeData.size}</span>`;
      template += `</div>`;
    });

    template += `</div>`;

    template += `</div>`;

    template += `<div class="modal__additivies">`;

    template += `<span class="modal__additivies-label">Additives</span>`;

    template += `<div class="modal__additivies-tabs tabs">`;

    this.additives.forEach((additiveData, i) => {
      template += `<div class="${
        i === 0 ? "tab tab_active" : "tab"
      }" data-addprice="${additiveData["add-price"]}">`;
      template += `<span class="tab__icon">`;
      template += `<span class="icon">${i + 1}</span>`;
      template += `</span>`;
      template += `<span class="tab__text">${additiveData.name}</span>`;
      template += `</div>`;
    });

    template += `</div>`;

    template += `</div>`;

    template += `<div class="modal__total">`;
    template += `<span class="modal__total-label">Total:</span>`;
    template += `<h3 class="modal__total-price">$7.00</h3>`;
    template += `</div>`;

    template += `<div class="modal__alert">`;
    template += `<object type="image/svg+xml" data="./src/images/icons/modal-icon-alert.svg" width="16" height="16"> </object>`;
    template += `<span class="modal__alert-text">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</span>`;

    template += `</div>`;

    template += `<button class="modal__close-btn">Close</button>`;
    template += `</div>`;

    return template;
  }

  bindEvents() {
    this.overlay.addEventListener("click", this.closeModal);
  }

  get closeBtn() {
    return document.querySelector(".modal__close-btn");
  }

  closeModal = (e) => {
    if (
      e.target.classList.contains("overlay") ||
      e.target.classList.contains("modal__close-btn")
    ) {
      this.overlay.remove();
      document.body.classList.toggle("body_unscrollable");
      this.header.setStickyPosition();
    }
  };
}

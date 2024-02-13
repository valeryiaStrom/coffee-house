export class MenuItemModal {
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
    this.id = id;
    this.imageSrc = imageSrc;
    this.title = name;
    this.description = description;
    this.price = price;
    this.currency = currency;
    this.sizes = sizes;
    this.additives = additives;
  }

  renderModal() {
    const template = this.createModalTemplate();
    this.createOverlay();
    this.createModalElement();
    this.bindEvents();
    this.openModal();
  }

  createOverlay() {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.append(overlay);
  }

  createModalElement() {}

  createModalTemplate() {
    let template = "";

  //   template += `<div class="modal__image-wrapper">`;
  //   template +=  `<img src="./src/images/menu/coffee/coffee-1.png" alt="Irish coffee" class="modal__image"/>`;
  //   template += `</div>`;

  //   template += `<div class="modal__content">`
  //   template +=  `<div class="modal__text">`;
  //   template += `<h3 class="modal__title">Irish coffee</h3>`;
  //       <p class="modal__description">
  //         Fragrant black coffee with Jameson Irish whiskey and whipped milk
  //       </p>
  //     </div>
  //     <div class="modal__sizes">
  //     <span class="modal__sizes-label">Size</span>
  //     <div class="modal__sizes-tabs tabs">
  //       <div class="tab tab_active" data-id="coffee">
  //         <span class="tab__icon">
  //           <span class="icon">S</span>
  //         </span>
  //         <span class="tab__text">200 ml</span>
  //       </div>
  //       <div class="tab" data-id="tea">
  //         <span class="tab__icon">
  //           <span class="icon">M</span>
  //         </span>
  //         <span class="tab__text">300 ml</span>
  //       </div>
  //       <div class="tab" data-id="dessert">
  //         <span class="tab__icon">
  //           <span class="icon">L</span>
  //         </span>
  //         <span class="tab__text">400 ml</span>
  //       </div>
  //     </div>
  //   </div>

  //   <div class="modal__additivies">
  //     <span class="modal__additivies-label">Additives</span>
  //     <div class="modal__additivies-tabs tabs">
  //       <div class="tab tab_active" data-id="coffee">
  //         <span class="tab__icon">
  //           <span class="icon">1</span>
  //         </span>
  //         <span class="tab__text">Sugar</span>
  //       </div>
  //       <div class="tab" data-id="tea">
  //         <span class="tab__icon">
  //           <span class="icon">2</span>
  //         </span>
  //         <span class="tab__text">Sinnamon</span>
  //       </div>
  //       <div class="tab" data-id="dessert">
  //         <span class="tab__icon">
  //           <span class="icon">3</span>
  //         </span>
  //         <span class="tab__text">Syrop</span>
  //       </div>
  //     </div>
  //   </div>

  //   <div class="modal__total">
  //     <span class="modal__total-label">Total:</span>
  //     <h3 class="modal__total-price">$7.00</h3>
  //   </div>

  //   <div class="modal__alert">
  //     <object type="image/svg+xml" data="./src/images/icons/modal-icon-alert.svg" width="16" height="16"> </object>
  //     <span class="modal__alert-text"
  //       >The cost is not final. Download our mobile app to see the final
  //       price and place your order. Earn loyalty points and enjoy your
  //       favorite coffee with up to 20% discount.</span
  //     >
  //   </div>

  //   <button class="modal__close-btn">Close</button>
  // </div>`;
  }

  bindEvents() {
    this.overlay.addEventListener("click", this.closeModal);
  }

  get overlay() {
    return document.querySelector(".overlay");
  }

  get closeBtn() {
    return document.querySelector(".modal__close-btn");
  }

  openModal() {
    document.body.append(this.overlay);
  }

  closeModal = (e) => {
    if (
      e.target.classList.contains("overlay") ||
      e.target.classList.contains("modal__close-btn")
    ) {
      this.overlay.remove();
    }
  };
}

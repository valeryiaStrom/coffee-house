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
    this.createOverlay();
    this.createModalElement();
    this.bindEvents();
  }

  createOverlay() {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.append(overlay);
  }

  createModalElement() {}

  createModalTemplate() {}

  bindEvents() {
    this.overlay.addEventListener("click", this.closeModal);
  }

  get overlay() {
    return document.querySelector(".overlay");
  }

  closeModal = (e) => {
    if (e.target.classList.contains("overlay") ||e.target.classList.contains("modal__close-btn")) {
      this.overlay.remove();
    }
  }
}

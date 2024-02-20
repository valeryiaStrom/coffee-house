export class BaseModal {
  constructor() {
    this.overlay = null;
    this.modal = null;
  }

  renderModal(content) {
    this.createOverlay();
    this.createModal(content);
    this.attachModalToOverlay();
  }

  createOverlay() {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    this.overlay = overlay;
  }

  createModal(content) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = content;
    this.modal = modal;
  }

  attachModalToOverlay() {
    this.overlay.append(this.modal);
  }

  openModal() {
    document.body.append(this.overlay);
    document.body.classList.toggle("body_unscrollable");
    this.header.setStickyPosition();
  }
}

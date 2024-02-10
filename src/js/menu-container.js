export class MenuContainer {
  constructor() {
  }

  get self() {
    return document.querySelector(".menu__items");
  }

  clear() {
    this.self.innerHTML = '';
  }

  renderMenuItems(menuItems) {
    this.self.append(...menuItems);
  }
}

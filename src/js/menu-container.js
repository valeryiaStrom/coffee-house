export class MenuContainer {
  constructor() {}

  get self() {
    return document.querySelector(".menu__items");
  }

  clear() {
    this.self.innerHTML = "";
  }

  renderMenuItems(menuItems, count = 8) {
    let itemsToRender;
    if (menuItems.length > count) {
      itemsToRender = menuItems.slice(0, count);
    } else {
      itemsToRender = menuItems;
    }
    this.self.append(...itemsToRender);
  }
}

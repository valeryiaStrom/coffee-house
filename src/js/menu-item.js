export class MenuItem {
  constructor({ id, imageSrc, name, description, price, currency }) {
    this.id = id;
    this.imageSrc = imageSrc;
    this.title = name;
    this.description = description;
    this.price = price;
    this.currency = currency;
  }

  createMenuItemElement() {
    const element = document.createElement("article");
    element.className = "menu__item menu-item";
    element.setAttribute("data-id", this.id);

    const template = this.createMenuItemTemplate();
    element.innerHTML = template;
    return element;
  }

  createMenuItemTemplate() {
    let template = "";

    // menu item image
    template += `<div class="menu-item__image-wrapper">`;

    template += `<img class="menu-item__image" src="${this.imageSrc}" alt="${this.title}"/>`;

    template += `</div>`;

    // menu item content
    template += `<div class="menu-item__content">`;

    template += `<div class="menu-item__text">`;

    template += `<h3 class="menu-item__title">${this.title}</h3>`;
    template += `<p class="menu-item__description">${this.description}</p>`;

    template += `</div>`;

    template += `<h3 class="menu-item__price">${this.currency}${this.price}</h3>`;

    template += `</div>`;

    return template;
  }
}

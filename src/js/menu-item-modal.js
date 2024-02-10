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

  createModalTemolate() {
    
  }
}

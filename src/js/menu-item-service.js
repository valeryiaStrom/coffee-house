export class MenuItemService {
  constructor(data) {
    this.data = data;
  }

  filterDataByCategory(category) {
    return this.data.filter((product) => product.category === category);
  }

  prepareSizesData(sizes) {

  }
}

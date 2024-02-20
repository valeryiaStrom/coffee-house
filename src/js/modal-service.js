export class ModalService {
  constructor(data) {
    this.data = data;
  }

  getDataItemById(id) {
    return this.data.find((item) => item.id === id);
  }

  prepareSizeData(data) {
    const { sizes } = data;
    const entries = Object.entries(sizes);
    const preparedSizes = entries.map(([sizeLabel, sizeData]) => {
      const labelUpperCased = sizeLabel.toUpperCase();
      sizeData = {
        ...sizeData,
        label: labelUpperCased,
      };
      return sizeData;
    });
    return preparedSizes;
  }

  prepareProductData(data) {
    const {sizes, ...rest} = data;
    const preparedSizeData = this.prepareSizeData(data);
    const preparedProductData = {
      sizes: preparedSizeData,
      ...rest,
    };
    return preparedProductData;
  }
}

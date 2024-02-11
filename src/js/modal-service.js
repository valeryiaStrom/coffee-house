export class ModalService {
    constructor(data) {
      this.data = data;
    }
  
    getDataItemById(id) {
      return this.data.find((item) => item.id === id);
    }
  }
  
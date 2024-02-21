export class MenuContainer {
  constructor() {
    this.menuWrapper = document.querySelector(".menu__wrapper");
    this.loadMoreButton = document.querySelector(".menu__load-more-button");
  }

  get self() {
    return document.querySelector(".menu__items");
  }

  clear() {
    this.self.innerHTML = "";
  }

  renderMenuItems(menuItems) {
    this.menuItems = menuItems;
    this.self.append(...menuItems);
  }

  hideMenuItemsForSmallDeviceWidth() {
    this.menuItems.forEach((menuItem, i) => {
      if (i > 3) {
        menuItem.classList.add('menu-item_hidden');
      }
    });
  }

  showHiddenMenuItems() {
    this.menuItems.forEach((menuItem) => {
      if (menuItem.classList.contains('menu-item_hidden')) {
        menuItem.classList.remove('menu-item_hidden');
      }
    });
  }

  showLoadMoreButton() {
    this.loadMoreButton.classList.remove('menu__load-more-button_hidden');
    this.bindEventsToLoadMoreButton();
  }

  hideLoadMoreButton() {
    this.loadMoreButton.classList.add('menu__load-more-button_hidden');
  }

  bindEventsToLoadMoreButton() {
    this.loadMoreButton.addEventListener('click', this.handleLoadMoreButtonClick);
  }

  handleLoadMoreButtonClick = (e) => {
    if (e.target.closest('.load-more-button')) {
      // show hidden menu items
      this.showHiddenMenuItems();
      this.hideLoadMoreButton();
    }
  };
}

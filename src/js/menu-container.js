import { products } from "../data/products";
import { MenuTabs } from "./menu-tabs";
import { MenuItemService } from "./menu-item-service";
import { MenuItem } from "./menu-item";
import { getClientWidth } from "./utils/utils";
import { TABLET_SMALL_WIDTH, MAX_PRODUCTS_COUNT_TABLET } from "./constants";
import { ModalService } from "./modal-service";
import { MenuItemModal } from "./menu-item-modal";

export class MenuContainer {
  constructor() {
    this.tabs = new MenuTabs();
    this.menuWrapper = document.querySelector(".menu__wrapper");
    this.menuItemsContainer = document.querySelector(".menu__items");
    this.loadMoreButton = document.querySelector(".menu__load-more-button");
    this.menuItemService = new MenuItemService(products);
    this.modalService = new ModalService(products);
  }

  init() {
    // on load render menu items by default selected category
    this.renderMenuItemsByDefaultSelectedCategory();
    this.bindEvents();
  }

  renderMenuItemsByDefaultSelectedCategory() {
    const defaultSelectCategory = this.tabs.getSelectedTabCategory();

    // filter products data by category
    const productsData = this.menuItemService.filterDataByCategory(
      defaultSelectCategory
    );

    // prepare images
    const productsDataWithPrepartedImages = productsData.map((productData) => {
      
      const newSrc = productData.imageSrc;
    })

    // create menu items from filtered data
    const menuItems = productsData.map((productData) => {
      const menuItem = new MenuItem(productData);
      return menuItem.createMenuItemElement();
    });

    const clientWidth = getClientWidth();

    // render menu items
    this.renderMenuItems(menuItems);

    if (
      clientWidth <= TABLET_SMALL_WIDTH &&
      this.menuItems.length > MAX_PRODUCTS_COUNT_TABLET
    ) {
      // if device width is tablet or lower, hide all items after 4th
      this.hideMenuItemsForSmallDeviceWidth();
      this.showLoadMoreButton();
    }
  }

  bindEvents() {
    // handle window resize to re-render menu items
    window.addEventListener("resize", this.handleWindowResize);

    // handle menu tabs click
    this.tabs.tabsContainer.addEventListener("click", this.handleMenuTabClick);

    // handle menu item click
    this.menuItemsContainer.addEventListener("click", this.handleMenuItemClick);
  }

  handleWindowResize = () => {
    const clientWidth = getClientWidth();

    if (
      clientWidth <= TABLET_SMALL_WIDTH &&
      this.menuItems.length > MAX_PRODUCTS_COUNT_TABLET
    ) {
      // if device width is tablet or lower, hide all items after 4th
      this.hideMenuItemsForSmallDeviceWidth();
      this.showLoadMoreButton();
    } else {
      this.showHiddenMenuItems();
      this.hideLoadMoreButton();
    }
  };

  handleMenuTabClick = (e) => {
    if (e.target.closest(".tab")) {
      const clickedTab = e.target.closest(".tab");
      const clickedTabId = clickedTab.getAttribute("data-id");

      // unselect all tabs
      this.tabs.unselectAllTabs();

      // select clicked tab
      this.tabs.selectTab(clickedTab);

      // filter products data by category
      const productsData =
        this.menuItemService.filterDataByCategory(clickedTabId);

      // create menu items from filtered data
      const menuItems = productsData.map((productData) => {
        const menuItem = new MenuItem(productData);
        return menuItem.createMenuItemElement();
      });

      const clientWidth = getClientWidth();

      // clear displayed menu items
      this.clear();

      // render menu items
      this.renderMenuItems(menuItems);

      if (
        clientWidth <= TABLET_SMALL_WIDTH &&
        this.menuItems.length > MAX_PRODUCTS_COUNT_TABLET
      ) {
        // if device width is tablet or lower, hide all items after 4th
        this.hideMenuItemsForSmallDeviceWidth();
        this.showLoadMoreButton();
      } else {
        this.hideLoadMoreButton();
      }
    }
  };

  handleMenuItemClick = (e) => {
    if (e.target.closest(".menu__item")) {
      const clickedMenuItem = e.target.closest(".menu__item");
      const clickedMenuItemId = clickedMenuItem.getAttribute("data-id");

      // get modal data by id
      const data = this.modalService.getDataItemById(clickedMenuItemId);

      // prepare data for modal window
      const preparedProductData = this.modalService.prepareProductData(data);

      // render modal
      const modal = new MenuItemModal(preparedProductData);
      modal.renderModal();
    }
  };

  clear() {
    this.menuItemsContainer.innerHTML = "";
  }

  renderMenuItems(menuItems) {
    this.menuItems = menuItems;
    this.menuItemsContainer.append(...menuItems);
  }

  hideMenuItemsForSmallDeviceWidth() {
    this.menuItems.forEach((menuItem, i) => {
      if (i > 3) {
        menuItem.classList.add("menu-item_hidden");
      }
    });
  }

  showHiddenMenuItems() {
    this.menuItems.forEach((menuItem) => {
      if (menuItem.classList.contains("menu-item_hidden")) {
        menuItem.classList.remove("menu-item_hidden");
      }
    });
  }

  showLoadMoreButton() {
    this.loadMoreButton.classList.remove("menu__load-more-button_hidden");
    this.bindEventsToLoadMoreButton();
  }

  hideLoadMoreButton() {
    this.loadMoreButton.classList.add("menu__load-more-button_hidden");
  }

  bindEventsToLoadMoreButton() {
    this.loadMoreButton.addEventListener(
      "click",
      this.handleLoadMoreButtonClick
    );
  }

  handleLoadMoreButtonClick = (e) => {
    if (e.target.closest(".load-more-button")) {
      // show hidden menu items
      this.showHiddenMenuItems();
      this.hideLoadMoreButton();
    }
  };
}

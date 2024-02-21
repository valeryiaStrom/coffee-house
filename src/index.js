import { products } from "./data/products";
import { MenuTabs } from "./js/menu-tabs";
import { MenuItemService } from "./js/menu-item-service";
import { MenuContainer } from "./js/menu-container";
import { MenuItem } from "./js/menu-item";
import { MenuItemModal } from "./js/menu-item-modal";
import { ModalService } from "./js/modal-service";
import { Slider } from "./js/slider";
import { Header } from "./js/header";
import { getClientWidth } from "./js/utils/utils";
import { TABLET_SMALL_WIDTH, MAX_PRODUCTS_COUNT_TABLET } from "./js/constants";

const menuItemService = new MenuItemService(products);
const menuItemsContainer = new MenuContainer();
const tabs = new MenuTabs();
const modalService = new ModalService(products);
const slider = new Slider(true);
const header = new Header();

window.onload = function () {
  const isMenuPage = window.location.href.includes("menu");
  header.init();
  if (!isMenuPage) {
    console.log(`home page: ${window.location.href}`);
    slider.init();
  } else {
    console.log(`menu page: ${window.location.href}`);
    // render menu items by default selected category
    const defaultSelectCategory = tabs.getSelectedTabCategory();

    // filter products data by category
    const productsData = menuItemService.filterDataByCategory(
      defaultSelectCategory
    );

    // create menu items from filtered data
    const menuItems = productsData.map((productData) => {
      const menuItem = new MenuItem(productData);
      return menuItem.createMenuItemElement();
    });

    const clientWidth = getClientWidth();

    // render menu items
    menuItemsContainer.renderMenuItems(menuItems);

    if (
      clientWidth <= TABLET_SMALL_WIDTH &&
      menuItemsContainer.menuItems.length > MAX_PRODUCTS_COUNT_TABLET
    ) {
      // if device width is tablet or lower, hide all items after 4th
      menuItemsContainer.hideMenuItemsForSmallDeviceWidth();
      menuItemsContainer.showLoadMoreButton();
    }

    // handle window resize to re-render menu items
    window.addEventListener("resize", (e) => {
      const selctedTabId = tabs.getSelectedTabCategory();
      // filter products data by category
      const productsData = menuItemService.filterDataByCategory(selctedTabId);

      // create menu items from filtered data
      const menuItems = productsData.map((productData) => {
        const menuItem = new MenuItem(productData);
        return menuItem.createMenuItemElement();
      });

      const clientWidth = getClientWidth();

      if (
        clientWidth <= TABLET_SMALL_WIDTH &&
        menuItemsContainer.menuItems.length > MAX_PRODUCTS_COUNT_TABLET
      ) {
        // if device width is tablet or lower, hide all items after 4th
        menuItemsContainer.hideMenuItemsForSmallDeviceWidth();
        menuItemsContainer.showLoadMoreButton();
      } else {
        menuItemsContainer.showHiddenMenuItems();
        menuItemsContainer.hideLoadMoreButton();
      }
    });

    // handle menu tabs click
    tabs.tabsContainer.addEventListener("click", (e) => {
      if (e.target.closest(".tab")) {
        const clickedTab = e.target.closest(".tab");
        const clickedTabId = clickedTab.getAttribute("data-id");

        // unselect all tabs
        tabs.unselectAllTabs();

        // select clicked tab
        tabs.selectTab(clickedTab);

        // filter products data by category
        const productsData = menuItemService.filterDataByCategory(clickedTabId);

        // create menu items from filtered data
        const menuItems = productsData.map((productData) => {
          const menuItem = new MenuItem(productData);
          return menuItem.createMenuItemElement();
        });

        const clientWidth = getClientWidth();

        // clear displayed menu items
        menuItemsContainer.clear();

        // render menu items
        menuItemsContainer.renderMenuItems(menuItems);

        if (
          clientWidth <= TABLET_SMALL_WIDTH &&
          menuItemsContainer.menuItems.length > MAX_PRODUCTS_COUNT_TABLET
        ) {
          // if device width is tablet or lower, hide all items after 4th
          menuItemsContainer.hideMenuItemsForSmallDeviceWidth();
          menuItemsContainer.showLoadMoreButton();
        } else {
          menuItemsContainer.hideLoadMoreButton();
        }
      }
    });

    // handle menu item click
    menuItemsContainer.self.addEventListener("click", (e) => {
      if (e.target.closest(".menu__item")) {
        const clickedMenuItem = e.target.closest(".menu__item");
        const clickedMenuItemId = clickedMenuItem.getAttribute("data-id");

        // get modal data by id
        const data = modalService.getDataItemById(clickedMenuItemId);

        // prepare data for modal window
        const preparedProductData = modalService.prepareProductData(data);

        // render modal
        const modal = new MenuItemModal(preparedProductData);
        modal.renderModal();
      }
    });
  }
};

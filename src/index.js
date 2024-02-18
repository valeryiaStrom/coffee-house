import { products } from "./data/products";
import { MenuTabs } from "./js/menu-tabs";
import { MenuItemService } from "./js/menu-item-service";
import { MenuContainer } from "./js/menu-container";
import { MenuItem } from "./js/menu-item";
import { MenuItemModal } from "./js/menu-item-modal";
import { ModalService } from "./js/modal-service";
import { Slider } from "./js/slider";
import { Header } from "./js/header";

const menuItemService = new MenuItemService(products);
const menuItemsContainer = new MenuContainer();
const tabs = new MenuTabs();
const modalService = new ModalService(products);
const slider = new Slider(false);
const header = new Header();

window.onload = function () {
  console.log("Hello");
  const isMenuPage = window.location.href.includes("menu");
  header.init();
  if (!isMenuPage) {
    console.log("home page: " + window.location.href);
    slider.init();
  } else {
    console.log("menu page");
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

    // render menu items
    menuItemsContainer.renderMenuItems(menuItems);

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

        // clear displayed menu items
        menuItemsContainer.clear();

        // render menu items
        menuItemsContainer.renderMenuItems(menuItems);
      }
    });

    // handle menu item click
    menuItemsContainer.self.addEventListener("click", (e) => {
      if (e.target.closest(".menu__item")) {
        console.log("menu item was clicked");
        const clickedMenuItem = e.target.closest(".menu__item");
        const clickedMenuItemId = clickedMenuItem.getAttribute("data-id");
        console.log(clickedMenuItemId);

        // get modal data by id
        const data = modalService.getDataItemById(clickedMenuItemId);

        // render modal
        const modal = new MenuItemModal(data);
        modal.renderModal();
      }
    });
  }
};

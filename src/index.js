import { products } from "./data/products";
import { MenuTabs } from "./js/menu-tabs";
import { MenuItemService } from "./js/menu-item-service";
import { MenuContainer } from "./js/menu-container";
import { MenuItem } from "./js/menu-item";

const menuItemService = new MenuItemService(products);
const menuItemsContainer = new MenuContainer();
const tabs = new MenuTabs();

window.onload = function () {
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
};

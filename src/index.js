import { products } from "./data/products";
import { Tabs } from "./js/tabs";
import { MenuContainer } from "./js/menu-container";
import { MenuItem } from "./js/menu-item";

const menuItemsContainer = new MenuContainer();
const tabs = new Tabs();

window.onload = function () {
  // render menu items by default selected category
  const defaultSelectCategory = tabs.getSelectedTabCategory();

  // filter products data by category
  const productsData = products.filter(
    (productData) => productData.category === defaultSelectCategory
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
      const productsData = products.filter(
        (productData) => productData.category === clickedTabId
      );

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

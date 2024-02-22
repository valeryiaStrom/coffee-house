import { MenuContainer } from "./js/menu-container";
import { Slider } from "./js/slider";
import { Header } from "./js/header";

const menuItemsContainer = new MenuContainer();
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

    menuItemsContainer.init();
  }
};

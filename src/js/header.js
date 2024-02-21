import { MobileNavigation } from "./mobile-navigation";
import { getClientWidth } from "./utils/utils";
import { TABLET_SMALL_WIDTH } from "./constants";
const mobileNavigation = new MobileNavigation();

export class Header {
  constructor() {
    this.self = document.querySelector(".header");
    this.burgerMenuButton = document.querySelector(".header__burger-menu-btn");
  }

  init() {
    this.attachEvents();
  }

  attachEvents() {
    this.burgerMenuButton.addEventListener(
      "click",
      this.handleBurgerMenuButtonClick
    );
    window.addEventListener("resize", this.handleMobileMenuOnWindowResize);
  }

  handleBurgerMenuButtonClick = (e) => {
    if (e.target.closest(".header__burger-menu-btn")) {
      const btn = e.target.closest(".header__burger-menu-btn");
      if (btn.classList.contains("burger-menu-btn_expanded")) {
        this.closeMobileMenu();
      } else {
        this.openMobileMenu();
      }
    }
  };

  openMobileMenu() {
    this.animateBurgerMenuButtonAsOpened();
    const offsetTop = this.getHeaderHeight();
    mobileNavigation.render(offsetTop - 1);
  }

  animateBurgerMenuButtonAsOpened() {
    this.burgerMenuButton.classList.add("burger-menu-btn_expanded");
  }

  closeMobileMenu() {
    this.animateBurgerMenuButtonAsClosed();
    mobileNavigation.close();
  }

  animateBurgerMenuButtonAsClosed() {
    this.burgerMenuButton.classList.remove("burger-menu-btn_expanded");
  }

  getHeaderHeight() {
    return this.self.offsetHeight;
  }

  setStickyPosition() {
    this.self.classList.toggle("header_sticky");
  }

  handleMobileMenuOnWindowResize = (e) => {
    const clientWidth = getClientWidth();
    if (clientWidth > TABLET_SMALL_WIDTH && mobileNavigation.isExpanded()) {
      this.animateBurgerMenuButtonAsClosed();
      mobileNavigation.close();
    }
  };
}

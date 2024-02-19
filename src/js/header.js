import { MobileNavigation } from "./mobile-navigation";
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
    this.self.classList.toggle('header_sticky');
  }
}

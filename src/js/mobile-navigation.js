import { goToUrl } from "./utils/utils";

export class MobileNavigation {
  constructor() {
    this.self = document.querySelector(".mobile-navigation");
    this.burgerMenuButton = document.querySelector(".header__burger-menu-btn");
    this.documentBody = document.querySelector("body");
    this.links = document.querySelectorAll(".mobile-navigation__link");
  }

  render(offsetTop) {
    this.self.classList.remove("mobile-navigation_hidden");
    this.self.style.top = `${offsetTop}px`;
    this.bindEvents();
    this.documentBody.classList.add("body_unscrollable");
  }

  close() {
    this.self.classList.add("mobile-navigation_hidden");
    this.documentBody.classList.remove("body_unscrollable");
  }

  bindEvents() {
    this.self.addEventListener("click", this.handleNavigationLinksClick);
  }

  handleNavigationLinksClick = (e) => {
    // if menu link was clicked
    if (e.target.closest(".mobile-navigation__menu-link")) {
      const menuLink = e.target.closest(".mobile-navigation__menu-link");
      e.preventDefault();

      // if menu link is not active
      if (!menuLink.classList.contains("mobile-navigation__item_active")) {
        const menuLinkUrl = menuLink.href;
        this.close();
        this.animateBurgerMenuButtonAsClosed();
        goToUrl(menuLinkUrl);
      }
    } else {
      // if any other link was clicked
      if (e.target.classList.contains("mobile-navigation__link")) {
        const clickedLinkUrl = e.target.href;
        e.preventDefault();
        this.close();
        this.animateBurgerMenuButtonAsClosed();
        goToUrl(clickedLinkUrl);
      }
    }
  };

  animateBurgerMenuButtonAsClosed() {
    this.burgerMenuButton.classList.remove("burger-menu-btn_expanded");
  }
}

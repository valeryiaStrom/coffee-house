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
    if (e.target.closest(".mobile-navigation__item")) {
      console.log("link was cliked");
      const clickedLink = e.target.closest(".mobile-navigation__item");
      e.preventDefault();
      this.close();
      this.animateBurgerMenuButtonAsClosed();
    }
  };

  animateBurgerMenuButtonAsClosed() {
    this.burgerMenuButton.classList.remove("burger-menu-btn_expanded");
  }
}

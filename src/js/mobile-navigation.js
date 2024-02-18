export class MobileNavigation {
  constructor() {
    this.self = document.querySelector(".mobile-navigation");
    this.burgerMenuButton = document.querySelector(".header__burger-menu-btn");
    this.documentBody = document.querySelector("body");
  }

  render(offsetTop) {
    this.self.classList.remove("mobile-navigation_hidden");
    this.self.style.top = `${offsetTop}px`;
    this.documentBody.classList.add('body_unscrollable');
  }

  close() {
    this.self.classList.add("mobile-navigation_hidden");
    this.documentBody.classList.remove('body_unscrollable');
  }
}

export class Header {
  constructor() {
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
      this.openMobileMenu();
    }
  };

  openMobileMenu() {
    console.log("opening mobile menu");
  }
}

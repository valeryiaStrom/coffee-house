import { BaseTabs } from "./base-tabs";

export class AdditivesTabs extends BaseTabs {
  constructor() {
    super();
    this.tabsContainer = document.querySelector(".modal__additivies-tabs");
    this.tabs = this.tabsContainer.querySelectorAll(".tab");
  }

//   init() {
//     this.bindEvents();
//   }

//   bindEvents() {
//     this.tabsContainer.addEventListener("click", this.handleTabClick);
//   }

//   handleTabClick = (e) => {
//     if (e.target.closest(".tab")) {
//       const clickedTab = e.target.closest(".tab");
//       if (clickedTab.classList.contains("tab_active")) {
//         super.unselectTab(clickedTab);
//       } else {
//         super.selectTab(clickedTab);
//       }
//     }
//   };
}

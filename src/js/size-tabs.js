import { BaseTabs } from "./base-tabs";

export class SizeTabs extends BaseTabs {
  constructor() {
    super();
    this.tabsContainer = document.querySelector(".modal__sizes-tabs");
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
//       if (!clickedTab.classList.contains("tab_active")) {
//         super.unselectAllTabs();
//         super.selectTab(clickedTab);
//         // recalculate price
//       }
//     }
//   };
}

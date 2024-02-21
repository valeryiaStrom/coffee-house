import { BaseTabs } from "./base-tabs";

export class SizeTabs extends BaseTabs {
  constructor() {
    super();
    this.tabsContainer = document.querySelector(".modal__sizes-tabs");
    this.tabs = this.tabsContainer.querySelectorAll(".tab");
    this.selectedTab = this.tabsContainer.querySelector(".tab_active");
  }
}

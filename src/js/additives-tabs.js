import { BaseTabs } from "./base-tabs";

export class AdditivesTabs extends BaseTabs {
  constructor() {
    super();
    this.tabsContainer = document.querySelector(".modal__additivies-tabs");
    this.tabs = this.tabsContainer.querySelectorAll(".tab");
  }
}

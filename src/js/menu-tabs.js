import { BaseTabs } from "./base-tabs";

export class MenuTabs extends BaseTabs {
  constructor() {
    super();
    this.tabsContainer = document.querySelector(".menu__tabs");
  }

  getSelectedTabCategory() {
    return super.getSelectedTabDataAttribute('data-id');
  }
}

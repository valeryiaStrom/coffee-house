export class MenuTabs {
  constructor() {}

  get tabsContainer() {
    return document.querySelector(".menu__tabs");
  }

  get tabs() {
    return document.querySelectorAll(".tab");
  }

  unselectAllTabs() {
    this.tabs.forEach((tab) => {
      if (tab.classList.contains("tab_active")) {
        tab.classList.remove("tab_active");
      }
    });
  }

  selectTab(tab) {
    if (!tab.classList.contains("tab_active")) {
      tab.classList.add("tab_active");
    }
  }

  getSelectedTabCategory() {
    const tabs = Array.from(this.tabs);
    const tab = tabs.find((tab) => tab.classList.contains("tab_active"));
    const dataId = tab.getAttribute("data-id") || "";
    return dataId;
  }
}

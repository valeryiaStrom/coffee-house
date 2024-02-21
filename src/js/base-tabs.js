export class BaseTabs {
  constructor() {
    this.tabs = document.querySelectorAll(".tab");
    this.selectedTab = document.querySelector(".tab_active");
  }

  unselectAllTabs() {
    this.tabs.forEach((tab) => {
      if (tab.classList.contains("tab_active")) {
        tab.classList.remove("tab_active");
      }
    });
    this.selectedTab = null;
  }

  selectTab(tab) {
    if (!tab.classList.contains("tab_active")) {
      tab.classList.add("tab_active");
      this.selectedTab = tab;
    }
  }

  unselectTab(tab) {
    if (tab.classList.contains("tab_active")) {
      tab.classList.remove("tab_active");
      this.selectedTab = null;
    }
  }

  getSelectedTabDataAttribute(dataAttribute) {
    let dataAttributeValue = "";
    if (this.selectedTab) {
      dataAttributeValue = this.selectedTab.getAttribute(dataAttribute);
    } else {
      const tabs = Array.from(this.tabs);
      const selectedTab = tabs.find((tab) => {
        tab.classList.contains("tab_active");
      });

      dataAttributeValue = selectedTab.getAttribute(dataAttribute);
    }

    return dataAttributeValue;
  }
}

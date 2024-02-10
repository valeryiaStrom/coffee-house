export class Tabs {
  constructor() {}

  get tabsContainer() {
    return document.querySelector(".menu__tabs");
  }

  get tabs() {
    return document.querySelectorAll(".tab");
  }

  //   addClickEventListener() {
  //     this.tabsContainer.addEventListener("click", (e) => {
  //       if (e.target.classList.contains("tab")) {
  //         const clickedTab = e.target;
  //         // unselect all tabs
  //         this.unselectAllTabs();
  //         // select clicked tab
  //         this.selectTab(clickedTab);
  //       }
  //     });
  //   }

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

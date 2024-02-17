export class Slider {
  constructor() {
    this.arrowLeft = document.querySelector(".slider__arrow_left");
    this.arrowRight = document.querySelector(".slider__arrow_right");
    this.carousel = document.querySelector(".slider__slides");
    this.slides = document.querySelectorAll(".slide");
    this.controlsContainer = document.querySelector(".controls");
    this.controls = document.querySelectorAll(".control");
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.arrowLeft.addEventListener("click", this.handleLeftArrowBtnClick);
    this.arrowRight.addEventListener("click", this.handleRightArrowBtnClick);
  }

  handleLeftArrowBtnClick = (e) => {
    if (e.target.closest(".slider__arrow_left")) {
      const activeControlIndex = this.getActiveControlIndex();
      const { prev, next } = this.getNextActiveControlIndex(
        activeControlIndex,
        "ltr"
      );
      this.unselectAllControls();
      this.unselectAllSlides();
      this.selectControl(next);
      this.selectSlide(next);
    }
  };

  handleRightArrowBtnClick = (e) => {
    if (e.target.closest(".slider__arrow_right")) {
      const activeControlIndex = this.getActiveControlIndex();
      const { prev, next } = this.getNextActiveControlIndex(
        activeControlIndex,
        "rtl"
      );
      this.unselectAllControls();
      this.unselectAllSlides();
      this.selectControl(next);
      this.selectSlide(next);
    }
  };

  getActiveControlIndex() {
    const controls = Array.from(this.controls);
    return controls.findIndex((control) =>
      control.classList.contains("control_active")
    );
  }

  unselectAllControls() {
    this.controls.forEach((control) => {
      if (control.classList.contains("control_active")) {
        control.classList.remove("control_active");
      }
    });
  }

  unselectAllSlides() {
    this.slides.forEach((slide) => {
      if (slide.classList.contains("slide_active")) {
        slide.classList.remove("slide_active");
      }
    });
  }

  getNextActiveControlIndex(currentActiveControlIndex, direction) {
    let prevControlIndex;
    let nextControlIndex;
    if (direction === "ltr") {
      if (currentActiveControlIndex === 0) {
        prevControlIndex = currentActiveControlIndex;
        nextControlIndex = this.controls.length - 1;
      } else {
        prevControlIndex = currentActiveControlIndex;
        nextControlIndex = --currentActiveControlIndex;
      }
    } else {
      if (currentActiveControlIndex < this.controls.length - 1) {
        prevControlIndex = currentActiveControlIndex;
        nextControlIndex = ++currentActiveControlIndex;
      } else {
        prevControlIndex = currentActiveControlIndex;
        nextControlIndex = 0;
      }
    }

    return {
      prev: prevControlIndex,
      next: nextControlIndex,
    };
  }

  selectControl(index) {
    this.controls[index].classList.add("control_active");
  }

  selectSlide(nextIndex) {
    const percents = nextIndex * 100;
    this.slides[nextIndex].classList.add("slide_active");
    this.slides.forEach((slide) => {
      slide.style.transform = `translateX(-${percents}%)`;
    });
  }
}

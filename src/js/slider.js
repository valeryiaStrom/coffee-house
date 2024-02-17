export class Slider {
  constructor(autoplay = true) {
    this.autoplay = autoplay;
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
    if (this.autoplay) {
      this.controlsContainer.addEventListener(
        "animationiteration",
        this.handleConrolsAnimationInteractionEnd
      );
    }
    this.arrowLeft.addEventListener("click", this.handleLeftArrowBtnClick);
    this.arrowRight.addEventListener("click", this.handleRightArrowBtnClick);
  }

  handleLeftArrowBtnClick = (e) => {
    if (e.target.closest(".slider__arrow_left")) {
      const activeControlIndex = this.getActiveControlIndex();
      const next = this.getNextActiveControlIndex(activeControlIndex, "ltr");
      this.unselectAllControls();
      this.unselectAllSlides();
      this.selectControl(next);
      this.selectSlide(next);
    }
  };

  handleRightArrowBtnClick = (e) => {
    if (e.target.closest(".slider__arrow_right")) {
      const activeControlIndex = this.getActiveControlIndex();
      const next = this.getNextActiveControlIndex(activeControlIndex, "rtl");
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
    let nextActiveControlIndex;
    if (direction === "ltr") {
      if (currentActiveControlIndex === 0) {
        nextActiveControlIndex = this.controls.length - 1;
      } else {
        nextActiveControlIndex = --currentActiveControlIndex;
      }
    } else {
      if (currentActiveControlIndex < this.controls.length - 1) {
        nextActiveControlIndex = ++currentActiveControlIndex;
      } else {
        nextActiveControlIndex = 0;
      }
    }

    return nextActiveControlIndex;
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

  handleConrolsAnimationInteractionEnd = (e) => {
    if (e.target.closest(".control_active")) {
      // switch slides to the right
      const activeControlIndex = this.getActiveControlIndex();
      const next = this.getNextActiveControlIndex(activeControlIndex, "rtl");
      this.unselectAllControls();
      this.unselectAllSlides();
      this.selectControl(next);
      this.selectSlide(next);
    }
  };
}

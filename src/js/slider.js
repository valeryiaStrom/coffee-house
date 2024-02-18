export class Slider {
  constructor(autoplay = true) {
    this.autoplay = autoplay;
    this.touch = {
      startX: null,
      startY: null,
    };
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
    this.carousel.addEventListener("touchstart", this.handleTouchStart);
    this.carousel.addEventListener("touchmove", this.handleTouchMove);
    this.carousel.addEventListener("touchend", this.handleTouchEnd);
  }

  handleLeftArrowBtnClick = (e) => {
    if (e.target.closest(".slider__arrow_left")) {
      const activeControlIndex = this.getActiveControlIndex();
      const next = this.getNextActiveControlIndex(activeControlIndex, "ltr");
      this.updateSlides(next);
    }
  };

  handleRightArrowBtnClick = (e) => {
    if (e.target.closest(".slider__arrow_right")) {
      const activeControlIndex = this.getActiveControlIndex();
      const next = this.getNextActiveControlIndex(activeControlIndex, "rtl");
      this.updateSlides(next);
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
      this.updateSlides(next);
    }
  };

  handleTouchStart = (e) => {
    // where fingers touched the screen for the first time;
    const firstTouch = e.touches[0];
    this.touch.startX = firstTouch.clientX;
    this.touch.startY = firstTouch.clientY;
  };

  handleTouchMove = (e) => {
    e.preventDefault();
    // if coords didn't change, then swipe didn't happen
    if (this.touch.startX === null || this.touch.startY === null) {
      return;
    }

    const moveX = e.touches[0].clientX;
    const moveY = e.touches[0].clientY;

    // find the difference
    const xDiff = moveX - this.touch.startX;
    const yDiff = moveY - this.touch.startY;

    // check what changed more: x coords or y coords
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      // swipe right or left
      if (xDiff > 0) {
        // swipe right
        const activeControlIndex = this.getActiveControlIndex();
        const next = this.getNextActiveControlIndex(activeControlIndex, "ltr");
        this.updateSlides(next);
      } else {
        // swipe left
        const activeControlIndex = this.getActiveControlIndex();
        const next = this.getNextActiveControlIndex(activeControlIndex, "rtl");
        this.updateSlides(next);
      }
    }
  };

  handleTouchEnd = (e) => {
    this.clearTouches();
  };

  clearTouches() {
    this.touch.startX = null;
    this.touch.startY = null;
  }

  updateSlides(nextIndex) {
    this.unselectAllControls();
    this.unselectAllSlides();
    this.selectControl(nextIndex);
    this.selectSlide(nextIndex);
  }
}

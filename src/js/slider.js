export class Slider {
  constructor() {
    this.arrowLeft = document.querySelector(".slider__arrow_left");
    this.arrowRight = document.querySelector(".slider__arrow_right");
    this.carousel = document.querySelector(".slider__slides");
    this.slides = document.querySelectorAll(".slide");
    this.controlsContainer = document.querySelector(".controls");
    this.controls = document.querySelectorAll(".control");
  }

  left = (e) => {
    if (e.target.closest(".slider__arrow_left")) {
      const activeSlideIndex = this.getActiveSlideIndex();
      this.unmarkAllSlides();
      this.moveSlidesRight(activeSlideIndex);
    }
  };

  right = (e) => {
    if (e.target.closest(".slider__arrow_right")) {
      let activeSlideIndex = this.getActiveSlideIndex();
      this.unmarkAllSlides();
      this.moveSlidesLeft(activeSlideIndex);
    }
  };

  bindEvents() {
    this.arrowLeft.addEventListener("click", this.left);
    this.arrowRight.addEventListener("click", this.right);
  }

  getActiveSlideIndex() {
    const slides = Array.from(this.slides);
    return slides.findIndex((slide) =>
      slide.classList.contains("slide_active")
    );
  }

  unmarkAllSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => {
      if (slide.classList.contains("slide_active")) {
        slide.classList.remove("slide_active");
      }
    });
  }

  moveSlidesLeft(activeSlideIndex) {
    // if current active slide is less than the total number of slides
    // previousSlidIndex = activeSlideIndex;
    // activeSlideIndex = activeSlideIndex++

    // else
    // mark [0] slide as active
    // previousSlidIndex = activeSlideIndex;
    // activeSlideIndex = 0;
    if (activeSlideIndex < this.slides.length - 1) {
      const prevSlideIndex = activeSlideIndex;
      activeSlideIndex = ++activeSlideIndex;
      let percents = activeSlideIndex === 0 ? 100 : activeSlideIndex * 100;
      this.slides[activeSlideIndex].classList.add("slide_active");

      this.slides[prevSlideIndex].style.transform = `translateX(-${percents}%)`;
      this.slides[
        activeSlideIndex
      ].style.transform = `translateX(-${percents}%)`;
    } else {
      activeSlideIndex = 0;
      let percents = activeSlideIndex;
      this.slides[activeSlideIndex].classList.add("slide_active");

      this.slides.forEach((slide) => {
        slide.style.transform = `translateX(${percents}%)`;
      });
    }
  }

  moveSlidesRight(activeSlideIndex) {
    // if current active slide === 0
    // previousSlidIndex = activeSlideIndex;
    // activeSlideIndex = slides.length - 1

    // else
    // previousSlidIndex = activeSlideIndex;
    // activeSlideIndex = activeSlideIndex--;

    if (activeSlideIndex === 0) {
      activeSlideIndex = this.slides.length - 1;
      let percents = activeSlideIndex * 100;
      this.slides[activeSlideIndex].classList.add("slide_active");
      this.slides.forEach((slide) => {
        slide.style.transform = `translateX(-${percents}%`;
      });
    } else {
      const prevSlideIndex = activeSlideIndex;
      activeSlideIndex = --activeSlideIndex;
      let percents = activeSlideIndex * 100;
      this.slides[activeSlideIndex].classList.add("slide_active");
      this.slides[prevSlideIndex].style.transform = `translateX(-${percents}%)`;
      this.slides[
        activeSlideIndex
      ].style.transform = `translateX(-${percents}%)`;
    }
  }

  init() {
    this.bindEvents();
  }
}

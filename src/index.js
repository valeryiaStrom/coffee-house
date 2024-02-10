const sliderArrowLeft = document.querySelector(".slider__arrow_left");
const sliderArrowRight = document.querySelector(".slider__arrow_right");
const slidesWrapper = document.querySelector(".slider__slides");
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll(".slide");
const SLIDE_ACTIVE_CN = "slide_active";

window.onload = function () {
  console.log("Hello!");

  // addSliderHandler();
};

// const addSliderHandler = () => {
//   sliderArrowRight.addEventListener("click", (e) => {
//     console.log(e);
//     console.log("right arrow was clicked");
//     slides.forEach((slide) => {
//       if (slide.classList.contains(SLIDE_ACTIVE)) {
//         slide.classList.remove(SLIDE_ACTIVE);
//         // slide.style.transform = "translateX(-100%)";
//         slidesContainer.style.transform = "translateX(-100%)";

//       }
//     });
//   });
// };

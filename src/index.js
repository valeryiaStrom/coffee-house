window.onload = function () {
  console.log("Hello!");

  const sliderArrowRight = document.querySelector(".slider__arrow");
  const slides = document.querySelector(".slider__slides");

  sliderArrowRight.addEventListener("click", (e) => {
    console.log(e);
    slides.style.transform = "translateX(-0%)";
    e.target.classList.add("active");
  });
};

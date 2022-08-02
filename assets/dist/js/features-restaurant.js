const swiper2 = new Swiper(".swiper-features", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  width: 214,
  height: 475,
  direction: "horizontal",
  slideToClickedSlide: true,
  virtualTranslate: true,
});

function featuresClick() {
  const swiperSlide = document.querySelectorAll(
    ".swiper-features .swiper-slide"
  );

  swiperSlide.forEach((slide) => {
    slide.addEventListener("click", () => {
        console.log(slide)
      if (slide.classList.contains("swiper-slide-active")) {
        event.target.classList.add("active");
        console.log(event.target);
      } 

      event.target.classList.toggle("active")
    });
  });
}
featuresClick();

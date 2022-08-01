const swiper = new Swiper(".swiper", {
  // Optional parameters
  spaceBetween: 40,
  width: 1128,
  direction: "horizontal",
  loop: true,
  loopedSlides: 5,
});

const swiper2 = new Swiper(".swiper-features", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  width: 214,
  height: 475,
  direction: "horizontal",
  loop: true,
  loopAdditionalSlides: 0,
  slideToClickedSlide: true,
  centeredSlides: true,
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  spaceBetween: 40,
  width: 1128,
  direction: "horizontal",
  loop: true,
  loopedSlides: 3,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

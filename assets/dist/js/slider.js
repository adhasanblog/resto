const swiper = new Swiper(".swiper", {
  // Optional parameters
  spaceBetween: 40,
  width: 1128,
  direction: "horizontal",
  loop: true,
  loopedSlides: 3,
});

function swiperPopup (){
  const swiperWrapper = document.querySelector(".swiper-wrapper")
  swiperWrapper.addEventListener("click", event => {
    console.log(event.target)
  })
  // swiperWrapper
}
swiperPopup ()

var mySwiper = new Swiper('.slider__container', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  loopAdditionalSlides: 4,
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev',
  },
  breakpoints: {
    1: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1230: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
})
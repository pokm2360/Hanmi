
new Swiper('.main2 .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000
  },
  slidesPerView: 1,

  pagination: {
    el: '.main2 .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.main2 .swiper-button-next',
    prevEl: '.main2 .swiper-button-prev',
  },

});
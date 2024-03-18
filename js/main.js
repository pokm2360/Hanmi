
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

const toTopEl = document.querySelector('#to-Top');
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.6, {
    scrollTo: 0 
  })
});
// window.addEventListener('scroll', function () {
//   if (window.scrollY) {
//     gsap.to(toTopEl, 0.6, {
//       opacity: 0,
//       display: 'none'
//     });
//   } else { 
//     gsap.to(toTopEl, 0.6, {
//       opacity: 1,
//       display: 'block'
//     });
//   }});
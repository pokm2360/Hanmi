// swiper 1
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


// to-Top scroll
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


// 마우스 커서 효과는 구글링해서 아무거나
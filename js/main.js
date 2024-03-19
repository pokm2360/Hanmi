// swiper 1
const slideEl = new Swiper('.main2 .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000 ,
    disableOnInteraction: false
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
const swiperEl = document.querySelector('.btn_pause');
swiperEl.addEventListener('click', function () {
  slideEl.autoplay.stop();
})
const swiperclEl = document.querySelector('.btn_play');
swiperclEl.addEventListener('click', function () {
  slideEl.autoplay.start();
});

// CDMO SWIPER
const cdmoEl = new Swiper('.cdmo .swiper', {
  direction: 'horizontal',
    disableOnInteraction: false,
  spaceBetween: 30,
});

// WHAT WE MAKES
const makesEl = new Swiper('.medicine .swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  breakpoints: {
    1024: {
    spaceBetween: 16
  }
}
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

// 중앙배치 - 테크놀로지
// 슬라이드 제작 cdmo, what we makes
// technology 탭 제작
// 헤더 전환버튼 제작
// recruite 트랜지션
// latest뉴스 정렬
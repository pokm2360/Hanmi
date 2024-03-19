// swiper 1
new Swiper('.main2 .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2000 ,
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

var sw = 0;
$('.btn_pause').click(function(){
    if(sw==0){
        $('.btn_pause').addClass('on');
        mySwiper.autoplay.stop();
        sw = 1;
    }else{
        $('.btn_pause').removeClass('on');
        mySwiper.autoplay.start();
        sw = 0;
    }
});

// CDMO SWIPER
new Swiper('.cdmo .swiper' , {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination-progressbar-fill',
    clickable: true
  },
  navigation: {
    nextEl: '.main2 .swiper-button-next',
    prevEl: '.main2 .swiper-button-prev',
  },
});


// new Swiper('.medicine', {
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 'auto',
//   spaceBetween: 30,
//   breakpoints: {
//     1024: {
//     spaceBetween: 16
//   }
// }
// })

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

// 중앙배치
// 슬라이드 제작
// 헤더 전환버튼 제작

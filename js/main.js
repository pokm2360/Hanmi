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
// play, pause 버튼
// 토글 버튼을 클릭했을 때 아이콘 플레이로 변경, 슬라이드 멈춤 
// 다시 클릭하면 아이콘 pause로 변경, 슬라이드 재생
const swiperEl = document.querySelector('.main2 .material-icons');
let isPaused = false;
swiperEl.addEventListener('click', function () {
  if (isPaused) {
    slideEl.autoplay.start();
    swiperEl.textContent = 'pause';
    isPaused = false;
  } else {
    slideEl.autoplay.stop();
    swiperEl.textContent = 'play_arrow';
    isPaused = true;
  }
});
// swiperEl.addEventListener('click', function () {
//   if (isPaused) {
//     slideEl.autoplay.stop();
//     swiperEl.textContent = 'play_arrow';
//   } else {
//     slideEl.autoplay.start();
//     swiperEl.textContent = 'pause';
//   }

// })

// const swiperEl = document.querySelector('.btn_play');
// swiperEl.addEventListener('click', function () {
//   slideEl.autoplay.start();
// });

// play, pause 버튼 status
// swiperEl.addEventListener('click', function () {
//   swiperEl.classList.add('status');
// })
// swiperclEl.addEventListener('click', function () {
//   swiperclEl.classList.add('status');
// })

// if (swiperclEl.classList.contains('status')) {
//   swiperEl.classList.remove('status');
// }


// CDMO SWIPER
const cdmoEl = new Swiper('.cdmo .swiper', {
  direction: 'horizontal',
  disableOnInteraction: false,
  spaceBetween: 30,
  slidesPerView: 1.3,
  freeMode: true,
});

// CDMO SLIDE POINTER
const cursor = document.querySelector('.cdmo .slidePointer'); 

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

const swiperWrapper = document.querySelector('.cdmo .swiper-wrapper');

swiperWrapper.addEventListener('mousemove', moveCursor);

const setOpacity = (opacityValue) => {
  cursor.style.opacity = opacityValue;
}

swiperWrapper.addEventListener('mousemove', () => {
  moveCursor(event);
  setOpacity(1);
});

swiperWrapper.addEventListener('mouseleave', () => {
  setOpacity(0);
});

// WHAT WE MAKES
const makesEl = new Swiper('.medicine .swiper', {
  freeMode: true,
  loop: true,
  slidesPerView: '3',
  spaceBetween: 20,
  pagination: {
    el: '.medicine .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.medicine .swiper-button-next',
    prevEl: '.medicine .swiper-button-prev',
  },
});

// to-Top scroll
const toTopEl = document.querySelector('#to-Top');
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.6, {
    scrollTo: 0 
  })
});




// 중앙배치 - 테크놀로지
// technology 탭 제작
// 헤더 전환버튼 제작
// recruite 트랜지션
// 들여쓰기 확인

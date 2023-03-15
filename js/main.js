
//lodash.js or cdn
//gsap cdn
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// 윈도우는 우리가 보고 있는 화면 자체
// 300은 0.3초, 0.3초 단위로 부하를 줘서 함수가 우르르 스이는 것을 방지
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    // 배지 숨기기
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기!
    gsap.to(toTopEl, .2 , {
      x: 0
    });
  } else {
    // 500 이하인 경우 배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기!
    gsap.to(toTopEl, .2 , {
      x: 100
    });
  }
}, 300));

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

// gsap은 애니메이션 라이브러리
// 이미지가 순차적으로 나타나게 하는 코드
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션)
  // 애니메이션을 1초동안 실행시키는데 몇도 뒤에 실행시키는지
  // index는 zero_based numbering
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7 , 1.4 , 2.1 , 2.7
    opacity: 1
  });
});

// new는 js의 생성자, js의 클래스
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  // 4번째 슬라이드 다음으로 다시 첫번째 슬라이드로 반복 재생여부
  loop: true
});
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' 기본값으로 들어가 있다.
  slidesPerView: 3,// 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  //autoplay: {
  //  delay: 500
  //},
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', // 이전슬라이드 버튼
    nextEl: '.promotion .swiper-next' // 다음슬라이드 버튼
  }
});
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
})


// toggle 버튼 
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion){
    // 숨김 처리!
    promotionEl.classList.add('hide');
  }else{
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  //gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한 반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0,delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})
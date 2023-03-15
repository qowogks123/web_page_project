// documnet는 html이라고 보면 됩니다
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function (){
  // search클래스를 가지고 있는 div요소에 focus 함수 실행
  searchInputEl.focus();
});

// input 요소에 focus 되었을 때
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색')
});

// input 요소에 focus가 해제되었을 때
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '')
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2023
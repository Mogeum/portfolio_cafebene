const btn = document.querySelector(".mobile-btn");

btn.addEventListener('click', (e) => {
  e.preventDefault();
  e.target.classList.toggle('xi-close');
  // document.getElementsByClassName("mobile-wrap")[0].style.display = 'block';
  document.querySelector(".mobile-wrap").classList.toggle('on');
});

// 모바일 메뉴에서는 같은 클래스명을 사용하는 요소가 다수.
// querySelectorAll('클래스명')으로 잡고, 배열에 패턴화를 할것이므로 for...of를 쓴다.
const depth1s = document.querySelectorAll(".mobile-depth1");
//수정코드 ul이 열림
for (const depth1 of depth1s) {
  depth1.addEventListener('click', function () {
    let mobileMore = this.querySelector('button');
    let open = mobileMore.classList == 'xi-angle-down-min';
    if (open) {
      mobileMore.classList = '';
      mobileMore.classList.add('xi-angle-up-min');
      this.querySelector('ul').classList.add('on');
    } else {
      mobileMore.classList = '';
      mobileMore.classList.add('xi-angle-down-min');
      this.querySelector('ul').classList.remove('on');
    }
  });
}
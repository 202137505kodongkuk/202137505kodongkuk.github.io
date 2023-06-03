let mainText1 = document.getElementById("main-text1"); // h1 요소 중 id가 main-text1인 요소를 선택하여 mainText1 변수에 할당

let initialScroll1 = true; // 초기 스크롤 상태를 나타내는 변수로, 초기값은 true

window.addEventListener("scroll", function() { // 윈도우 객체에 스크롤 이벤트 리스너를 추가하고, 이벤트가 발생할 때마다 콜백 함수 실행
  let value = window.scrollY; // 현재 스크롤 위치를 value 변수에 할당
  console.log("scrollY", value); // 현재 스크롤 위치를 콘솔에 출력

  // 만약 현재 스크롤 위치가 3900보다 크거나 2600보다 작고, initialScroll1이 false일 경우
  if ((value > 3900 || value < 2600) && !initialScroll1) {
    mainText1.style.animation = "back 2s ease-out forwards"; // mainText1 요소에 애니메이션 속성을 설정하여 뒤로 이동하는 애니메이션을 적용
  } else {
    mainText1.style.animation = "slide 2s ease-out"; // mainText1 요소에 애니메이션 속성을 설정하여 슬라이드하는 애니메이션을 적용
  }

  if (initialScroll1) { // initialScroll1이 true일 경우
    initialScroll1 = false; // initialScroll1 값을 false로 변경
  }
});

let mainText2 = document.getElementById("main-text2");
let initialScroll2 = true;

window.addEventListener("scroll", function() {
  let value = window.scrollY;
  console.log("scrollY", value);

  if ((value > 4700 || value < 3400) && !initialScroll2) {
    mainText2.style.animation = "back 2s ease-out forwards";
  } else {
    mainText2.style.animation = "slide 2s ease-out";
  }

  if (initialScroll2) {
    initialScroll2 = false;
  }
});

let mainText3 = document.getElementById("main-text3");
let initialScroll3 = true;

window.addEventListener("scroll", function() {
  let value = window.scrollY;
  console.log("scrollY", value);

  if ((value > 5500 || value < 4200) && !initialScroll3) {
    mainText3.style.animation = "back 2s ease-out forwards";
  } else {
    mainText3.style.animation = "slide 2s ease-out";
  }

  if (initialScroll3) {
    initialScroll3 = false;
  }
});

let mainText4 = document.getElementById("main-text4");
let initialScroll4 = true;

window.addEventListener("scroll", function() {
  let value = window.scrollY;
  console.log("scrollY", value);

  if ((value > 6300 || value < 5000) && !initialScroll4) {
    mainText4.style.animation = "back 2s ease-out forwards";
  } else {
    mainText4.style.animation = "slide 2s ease-out";
  }

  if (initialScroll4) {
    initialScroll4 = false;
  }
});


function goToRandomAnchor() {
    var anchors = document.querySelectorAll("h1 > a");
    var randomIndex = Math.floor(Math.random() * anchors.length);
    var randomAnchor = anchors[randomIndex];
    randomAnchor.click();
  }
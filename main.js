let mainText1 = document.getElementById("main-text1"); // h1 요소 중 id가 main-text1인 요소를 선택하여 mainText1 변수에 할당

let initialScroll1 = true; // 초기 스크롤 상태를 나타내는 변수로, 초기값은 true

window.addEventListener("scroll", function() { // 윈도우 객체에 스크롤 이벤트 리스너를 추가하고, 이벤트가 발생할 때마다 콜백 함수 실행
  let value = window.scrollY; // 현재 스크롤 위치를 value 변수에 할당
  console.log("scrollY", value); // 현재 스크롤 위치를 콘솔에 출력

  // 만약 현재 스크롤 위치가 5040보다 크거나 3340보다 작고, initialScroll1이 false일 경우
  if ((value > 5040 || value < 3340) && !initialScroll1) {
    mainText1.style.animation = "back 2s ease-out forwards"; // mainText1 요소에 애니메이션 속성을 설정하여 뒤로 이동하는 애니메이션을 적용
  } else {
    mainText1.style.animation = "slide 2s ease-out"; // mainText1 요소에 애니메이션 속성을 설정하여 슬라이드하는 애니메이션을 적용
  }

  if (initialScroll1) { // initialScroll1이 true일 경우
    initialScroll1 = false; // initialScroll1 값을 false로 변경
  }
});
mainText1.style.color="red"; // 임시로 하나만 변경하였습니다.  

let mainText2 = document.getElementById("main-text2");
let initialScroll2 = true;

window.addEventListener("scroll", function() {
  let value = window.scrollY;
  console.log("scrollY", value);

  if ((value > 5840 || value < 4140) && !initialScroll2) {
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

  if ((value > 6400 || value < 5040) && !initialScroll3) {
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

  if ((value > 7500 || value < 5868) && !initialScroll4) {
    mainText4.style.animation = "back 2s ease-out forwards";
  } else {
    mainText4.style.animation = "slide 2s ease-out";
  }

  if (initialScroll4) {
    initialScroll4 = false;
  }
});


function gotoRandomAnchor() { 
    var anchors = document.querySelectorAll("h1 > a"); // h1 태그 하위에 있는 모든 a 태그를 선택하여 anchors 변수에 할당
    var randomIndex = Math.floor(Math.random() * anchors.length); // anchors 배열의 길이를 기준으로 랜덤한 값을 생성하여 randomIndex 변수에 할당
    var randomAnchor = anchors[randomIndex]; // randomIndex를 사용하여 랜덤한 값에 해당하는 앵커 요소를 randomAnchor 변수에 할당
    randomAnchor.click(); // randomAnchor 요소를 클릭하는 동작을 수행
  }



function goToRandomLinkH(){
    let links = [
      "https://www.burgerking.co.kr/?NaPm=ct%3Dlh1kkzxi%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3D%7Chk%3D59cd79f43aaca02303e6d91e9527955130beac6d#/home",
"https://www.mcdonalds.co.kr/kor/promotion/list.do",
"https://www.lotteeatz.com/eatzMain"]
   

    let randomIndex = Math.floor(Math.random() * links.length);
    window.open(links[randomIndex], "_blank");
  }

  function goToRandomLinkP(){
    let links = [
      "http://xn--2e0b622b4gcxwb8x8a.kr/?n_media=27758&n_query=%EC%98%A4%EA%B5%AC%ED%94%BC%EC%9E%90&n_rank=1&n_ad_group=grp-a001-04-000000026089223&n_ad=nad-a001-04-000000245309836&n_keyword_id=nkw-a001-04-000004383926743&n_keyword=%EC%98%A4%EA%B5%AC%ED%94%BC%EC%9E%90&n_campaign_type=4&n_contract=tct-a001-04-000000000710037&n_ad_group_type=5&NaPm=ct%3Dlifakij4%7Cci%3D0yS0002wylDyL6pNbeW%2D%7Ctr%3Dbrnd%7Chk%3D2f48bae769e4d3b181ee43942b095acef7d84a29",
      "https://www.mrpizza.co.kr/?NaPm=ct%3Dlifabfp2%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3Dnull%7Chk%3D6826af64e5619da9fd85fb1f65a1de9b9626ad1d",
      "https://www.pizzaalvolo.co.kr/?NaPm=ct%3Dlifacoh3%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3Dnull%7Chk%3Dc756d40ef2ba43751317f5148507eddd891f3ff2"
    ]
   

    let randomIndex = Math.floor(Math.random() * links.length);
    window.open(links[randomIndex], "_blank");
}


  function goToRandomLinkC(){
    let links = ["https://www.bhc.co.kr/","https://www.kfckorea.com/","https://m.bbq.co.kr/main.asp"]
   

    let randomIndex = Math.floor(Math.random() * links.length);
    window.open(links[randomIndex], "_blank");
  }

  function goToRandomLinkCo(){
    let links = ["https://www.starbucks.co.kr/index.do","https://www.hollys.co.kr/","https://www.mega-mgccoffee.com/bbs/?bbs_category=3"
      
      ]
   

    let randomIndex = Math.floor(Math.random() * links.length);
    window.open(links[randomIndex], "_blank");
  }


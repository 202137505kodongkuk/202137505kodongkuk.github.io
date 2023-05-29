let mainText1 = document.querySelector("h1#main-text1");
let initialScroll1 = true;

window.addEventListener("scroll", function() {
  let value = window.scrollY;
  console.log("scrollY", value);

  if ((value > 3900 || value < 2600) && !initialScroll1) {
    mainText1.style.animation = "back 2s ease-out forwards";
  } else {
    mainText1.style.animation = "slide 2s ease-out";
  }

  if (initialScroll1) {
    initialScroll1 = false;
  }
});

let mainText2 = document.querySelector("h1#main-text2");
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

let mainText3 = document.querySelector("h1#main-text3");
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

let mainText4 = document.querySelector("h1#main-text4");
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

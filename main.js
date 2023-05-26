let mainText = document.querySelector("h1");

window.addEventListener("scroll", function() {
  let value = window.scrollY;
  console.log("scrollY", value);
 

  if (value > 3450) {
    mainText.style.animation = "back 2s ease-out forwards";
  } else {
    mainText.style.animation = "slide 2s ease-out";
  }
});

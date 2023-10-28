const slides = document.querySelectorAll(".slide");
const btnsliderleft = document.querySelector(".slider__btn--left");
const btnsliderright = document.querySelector(".slider__btn--right");
let currentslide = 0;
const maxlength = slides.length;
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const gotobutton = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
const nextfuction = function () {
  if (currentslide === maxlength - 1) {
    currentslide = 0;
  } else {
    currentslide++;
  }
  gotobutton(currentslide);
};

const previus = function () {
  if (currentslide === 0) {
    currentslide = maxlength - 1;
  } else {
    currentslide--;
  }
  gotobutton(currentslide);
};

btnsliderright.addEventListener("click", nextfuction);

btnsliderleft.addEventListener("click", previus);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nextfuction();
  } else if (e.key == "ArrowLeft") {
    previus();
  }
});

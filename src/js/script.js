//Menu
const iconMenu = document.querySelector(".icon__menu");
if (iconMenu) {
  const header = document.querySelector(".header");
  iconMenu.addEventListener("click", () => {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("active");
    header.classList.toggle("menu-active");
  });
}
//Menu

//real-estate img slider
const realEstateImg = document.querySelectorAll(".images-slider__item");

realEstateImg.forEach((item) => {
  let mouseInside;
  item.onmouseover = function () {
    mouseInside = true;
    setTimeout(() => {
      if (mouseInside) {
        // То что нужно сделать по событию
        if (!this.classList.contains("active")) {
          this.parentElement
            .querySelectorAll(".images-slider__item")
            .forEach((item) => {
              item.classList.remove("active");
            });
          this.classList.add("active");
        }
      }
    }, 200);
  };
  item.onmouseleave = function () {
    mouseInside = false;
  };
});
//real-estate img slider

//slider
const prev = document.querySelector(".btn-arrow-prev"),
  next = document.querySelector(".btn-arrow-next"),
  slides = document.querySelectorAll(".overview__items");

let index = 0;

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    activeSlide(index);
  } else {
    index++;
    activeSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
};

prev.addEventListener("click", nextSlide);
next.addEventListener("click", prevSlide);
//slider

//panorama switcher
const switcher = document.querySelector(".panorama-slider__switcher"),
  switcherItem = document.querySelectorAll(".panorama-slider__switcher > span"),
  panoramaSliderItem = document.querySelectorAll(".panorama-slider__item");

switcher.onclick = () => {
  switcherItem.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  });
  panoramaSliderItem.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  });
};
//panorama switcher

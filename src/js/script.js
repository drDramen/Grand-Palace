const lngToggle = document.querySelectorAll(".header__lng-toggle > a"),
  header = document.querySelector(".header"),
  headerHeight = header.getBoundingClientRect().height;

let language = localStorage.getItem("lang")
  ? localStorage.getItem("lang")
  : window.navigator
  ? window.navigator.language ||
    window.navigator.systemLanguage ||
    window.navigator.userLanguage
  : "uk";

language = language.substring(0, 2);

function changeLocation(lang) {
  if (lang === "ru" && !/^\/ru/.test(location.pathname)) {
    location.pathname = "/ru" + location.pathname;
  } else if (lang !== "ru" && /^\/ru/.test(location.pathname)) {
    location.pathname = location.pathname.replace("/ru", "");
  }
  toggleLanguage(document.querySelector(`[data-lang="${lang}"]`));
}

if (lngToggle) {
  lngToggle.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.setItem("lang", this.dataset.lang);
      changeLocation(this.dataset.lang);
    });
  });
}

function toggleLanguage(item) {
  if (!item.classList.contains("active")) {
    lngToggle.forEach((item) => {
      item.classList.toggle("active");
    });
  }
}

changeLocation(language);

//Menu
const iconMenu = document.querySelector(".icon__menu"),
  menuAncorLink = document.querySelectorAll('.menu__link[href^="#"]');
if (iconMenu) {
  iconMenu.addEventListener("click", () => {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("active");
    header.classList.toggle("menu-active");
  });
}

if (menuAncorLink) {
  menuAncorLink.forEach((item) => {
    item.addEventListener("click", function (e) {
      document.body.classList.remove("lock");
      iconMenu.classList.remove("active");
      header.classList.remove("menu-active");
    });
  });
}

//Menu

//real-estate img slider
const realEstateImg = document.querySelectorAll(".images-slider__item");

if (realEstateImg.length) {
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
}

//real-estate img slider

//slider
const prev = document.querySelector(".overview-btn__container .btn-arrow-prev"),
  next = document.querySelector(".overview-btn__container .btn-arrow-next"),
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
if (prev) prev.addEventListener("click", prevSlide);
if (next) next.addEventListener("click", nextSlide);
//slider

//panorama switcher
const switcher = document.querySelector(".panorama-slider__switcher"),
  switcherItem = document.querySelectorAll(".panorama-slider__switcher > span"),
  panoramaSliderItem = document.querySelectorAll(".panorama-slider__item");

if (switcher) {
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
}
//panorama switcher

const floorList = document.querySelectorAll(".list-item");

if (floorList) {
  floorList.forEach((i) => {
    i.addEventListener("click", function () {
      document.querySelector(".custom-select").open = false;
    });
  });
}

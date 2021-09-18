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
const sliderRealEstateImg = document.querySelectorAll(".images-slider__items");

if (sliderRealEstateImg.length) {
  sliderRealEstateImg.forEach(function(item){
    const realEstateImg = item.querySelectorAll(".images-slider__item");
    let currentSlider = item.querySelector(".images-slider__item.active");

    if (realEstateImg.length) {
      realEstateImg.forEach((item) => {
        let mouseInside;
        item.onmouseover = function () {
          mouseInside = true;
          setTimeout(() => {
            // То что нужно сделать по событию
            if (mouseInside && !this.classList.contains("active")) {
              currentSlider.classList.remove("active");
              currentSlider = this;
              currentSlider.classList.add("active");
            }
          }, 200);
        };
        item.onmouseleave = function () {
          mouseInside = false;
        };
      });
    }

    function nextSlideRealEstate() {
      if (currentSlider.nextElementSibling !== null) {
        currentSlider.classList.remove("active");
        currentSlider = currentSlider.nextElementSibling;
        currentSlider.classList.add("active");
      }
    }

    function prevSlideRealEstate() {
      if (currentSlider.previousElementSibling !== null) {
        currentSlider.classList.remove("active");
        currentSlider = currentSlider.previousElementSibling;
        currentSlider.classList.add("active");
      }
    }

    function touchEvent() {
      const sensitivity = 40;
      let touchStart = null; //Точка начала касания
      let touchPosition = null; //Текущая позиция

      const touchStartSlider = function (e) {
        touchStart = {
          x: e.changedTouches[0].clientX
        };
        touchPosition = {
          x: touchStart.x
        };
      };

      const touchMoveSlider = function (e) {
        touchPosition = {
          x: e.changedTouches[0].clientX
        };
      };

      const touchEndSlider = function (e) {
        //Получаем растояния от начальной до конечной точки по оси Х
        let d = {
          x: touchStart.x - touchPosition.x
        };

        if (Math.abs(d.x) > sensitivity) {
          //Проверяем, было ли движение достаточно длинным
          if (d.x > 0) {
            //Если значение больше нуля, значит пользователь двигал пальцем справа налево

            nextSlideRealEstate();
          } //Иначе он двигал им слева направо
          else {
            prevSlideRealEstate();
          }
        }
      };

      item.addEventListener("touchstart", touchStartSlider);
      item.addEventListener("touchmove", touchMoveSlider);
      item.addEventListener("touchend", touchEndSlider);
    }

    touchEvent();
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

//Menu
const iconMenu = document.querySelector(".icon__menu");
if (iconMenu) {
  const header = document.querySelector(".header");
  iconMenu.addEventListener("click", () => {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("active");
    header.classList.toggle("menu-ctive");
  });
}
//Menu

//slider
const prev = document.querySelector('.btn-arrow-prev'),
      next = document.querySelector('.btn-arrow-next'),
      slides = document.querySelectorAll('.overview__items');

let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        activeSlide(index)
    } else {
        index++;
        activeSlide(index)
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        activeSlide(index)
    } else {
        index--;
        activeSlide(index)
    }
}

prev.addEventListener('click', nextSlide)
next.addEventListener('click', prevSlide)
//slider

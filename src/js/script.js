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

// language
// const iconLng = document.querySelectorAll(".header__lng-toggle a");

// if (iconLng) {
//   iconLng.forEach((element, ind, array) => {
//     element.addEventListener("click", (e) => {
//       array.forEach((elem) => {
//         elem.classList.toggle("--active");
//       });
//     });
//   });
// }

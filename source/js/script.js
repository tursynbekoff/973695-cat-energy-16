var burgerMenuOpen = document.querySelector(".page-header__menu-toggle");
var mainNav = document.querySelector(".main-nav");

mainNav.classList.remove("main-nav--no-js");
burgerMenuOpen.classList.remove("page-header__menu-toggle--no-js");

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

burgerMenuOpen.addEventListener("click", function(evt) {

  evt.preventDefault();
  console.log("Please do");
  if (burgerMenuOpen.classList.contains("page-header__menu-toggle--close")) {
    burgerMenuOpen.classList.remove("page-header__menu-toggle--close");
    mainNav.classList.add("main-nav--disabled");
  } else {
    burgerMenuOpen.classList.add("page-header__menu-toggle--close");
    mainNav.classList.remove("main-nav--disabled");
  }
});

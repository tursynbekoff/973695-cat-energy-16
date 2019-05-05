var burgerMenuOpen = document.querySelector(".page-header__menu-toggle");
var burgerMenuClose = document.querySelector(".page-header__menu-toggle-close");
var mainNav = document.querySelector(".main-nav");


try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

burgerMenuOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("Please do");
  burgerMenuOpen.classList.add("page-header__menu-toggle--disabled");
  burgerMenuClose.classList.remove("page-header__menu-toggle-close--disabled");

  mainNav.classList.remove("main-nav--disabled");
});

burgerMenuClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  burgerMenuClose.classList.add("page-header__menu-toggle-close--disabled");
  burgerMenuOpen.classList.remove("page-header__menu-toggle--disabled");

  mainNav.classList.add("main-nav--disabled");
});

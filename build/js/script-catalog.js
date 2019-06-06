var orderButton = document.querySelectorAll(".item-cell__button");
var orderWindow = document.querySelector(".order-window");
var closeOrderWindow = document.querySelector(".order-window__close");
var showMoreButton = document.querySelector(".item-cell__button--show-more");
var orderAdditionalButton = document.querySelectorAll(".additional-products__button");

for(var i = 0; i < orderButton.length; i++) {
  orderButton[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    orderWindow.classList.remove("visually-hidden");
    orderWindow.classList.add("order-window__show-window");
    console.log("window is opened")
  });
}

for(var i = 0; i < orderAdditionalButton.length; i++) {
  orderAdditionalButton[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    orderWindow.classList.remove("visually-hidden");
    orderWindow.classList.add("order-window__show-window");
    console.log("window is opened")
  });
}

closeOrderWindow.addEventListener("click", function(evt) {
  evt.preventDefault();
  orderWindow.classList.remove("order-window__show-window");
  orderWindow.classList.add("visually-hidden");
});

showMoreButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  //script or function that opens ajax window
  console.log("axaj window is opened")
});

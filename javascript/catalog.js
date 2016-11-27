// popup-order
var order_link = document.querySelector(".user-panel-cart-full");
var order_popup = document.querySelector(".modal-content-order");
var order_overlay = document.querySelector(".modal-overlay-transparent");


order_link.addEventListener("click", function(event) {
  event.preventDefault();
  order_popup.classList.add("modal-content-show");
  order_overlay.classList.add("modal-overlay-show");
});

order_overlay.addEventListener("click", function(event) {
  order_popup.classList.remove("modal-content-show");
  order_overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    order_popup.classList.remove("modal-content-show");
    order_overlay.classList.remove("modal-overlay-show");
  }
});

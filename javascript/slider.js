// slider
// var slide1 = document.querySelector(".btn-1");
// var slide2 = document.querySelector(".btn-2");
// var slide3 = document.querySelector(".btn-3");

// elem.hasAttribute(name) – проверяет наличие атрибута
// elem.getAttribute(name) – получает значение атрибута
// elem.setAttribute(name, value) – устанавливает атрибут
// elem.removeAttribute(name) – удаляет атрибут

// if (slide1.hasAttribute("checked")) {
//
// }

// var slide_checked = document.querySelectorAll(".slide-checked");

// var slide_checked = setInterval(function(event) {
//   slide_checked.getAttribute("checked");
// }, 3000);

// if (!slide_checked.hasAttribute("checked")) {
//     slide_checked.setAttribute("checked");
// }

// var slide_to_check = document.querySelectorAll("slide-checked");
// var slide_checked = slide_to_check.setAttribute("checked");

var elem = document.querySelector(".slide-checked");

if (!elem.hasAttribute("checked")) {
  // setInterval(function(event) {
    elem.setAttribute("checked");
  // }, 3000);
} {
  elem.removeAttribute("checked");
}

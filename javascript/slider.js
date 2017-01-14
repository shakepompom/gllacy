function switchSlide() {
  var checkboxes = document.querySelectorAll(".slide-checked");
  var slideLength = checkboxes.length;
  var currentSlide = +document.querySelector(".slide-checked:checked").getAttribute("data-id");
  var nextSlide;

  if (currentSlide === slideLength) {
    nextSlide = 1;
  } else {
    nextSlide = currentSlide + 1;
  }
  var nextElement = document.querySelector('.slide-checked[data-id="' + nextSlide + '"]');
  checkboxes.forEach(function(elem, id) {
    elem.checked = false;
  });
  nextElement.checked = true;

}

setInterval(switchSlide, 5000);

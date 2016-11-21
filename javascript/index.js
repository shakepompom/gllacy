// popup-search
var search_link = document.querySelector(".user-panel-search");
var search_popup = document.querySelector(".modal-content-search");
var search_form = search_popup.querySelector("form");
var search_search = search_popup.querySelector("[name=what-to-find]");
var search_overlay = document.querySelector(".modal-overlay-transparent");


search_link.addEventListener("click", function(event) {
  event.preventDefault();
  search_popup.classList.add("modal-content-show");
  search_overlay.classList.add("modal-overlay-show");
  search_search.focus();
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (search_popup.classList.contains("modal-content-show")) {
      search_popup.classList.remove("modal-content-show");
      search_overlay.classList.remove("modal-overlay-show");
    }
  }
});

search_overlay.addEventListener("click", function(event) {
  search_popup.classList.remove("modal-content-show");
  search_overlay.classList.remove("modal-overlay-show");
});

search_form.addEventListener("submit", function(event) {
  if (!search_search.value) {
    event.preventDefault();
    alert("Введите текст для поиска");
  }
});



// popup-login
var login_link = document.querySelector(".user-panel-login");
var login_popup = document.querySelector(".modal-content-login");
var login_overlay = document.querySelector(".modal-overlay-transparent");
var login_form = login_popup.querySelector("form");
var login_login = login_popup.querySelector("[name=email-login]");
var login_password = login_popup.querySelector("[name=password]");
var login_storage = localStorage.getItem("login");


login_link.addEventListener("click", function(event) {
  event.preventDefault();
  login_popup.classList.add("modal-content-show");
  login_overlay.classList.add("modal-overlay-show");

  if (login_storage) {
    login_login.value = login_storage;
    login_password.focus();
  } else {
    login_login.focus();
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (login_popup.classList.contains("modal-content-show")
    || login_overlay.classList.contains("modal-overlay-show")) {
      login_popup.classList.remove("modal-content-show");
      login_overlay.classList.remove("modal-overlay-show");
    }
  }
});

login_overlay.addEventListener("click", function(event) {
  login_popup.classList.remove("modal-content-show");
  login_overlay.classList.remove("modal-overlay-show");
});

login_form.addEventListener("submit", function(event) {
  if (!login_login.value || !login_password.value) {
    event.preventDefault();
    alert("Введите логин и пароль");
  } else {
    localStorage.setItem("login", login.value);
  }
});



// popup-feedback
var feedback_link = document.querySelector(".feedback");
var feedback_popup = document.querySelector(".modal-content-feedback");
var feedback_overlay = document.querySelector(".modal-overlay");
var feedback_close = feedback_popup.querySelector(".modal-content-close");
var feedback_form = feedback_popup.querySelector("form");
var feedback_name = feedback_popup.querySelector("[name=your-name]");
var feedback_email = feedback_popup.querySelector("[name=email-for-answer]");
var feedback_feedback = feedback_popup.querySelector("[name=write-something]");


feedback_link.addEventListener("click", function(event) {
  event.preventDefault();
  feedback_popup.classList.add("modal-content-show");
  feedback_overlay.classList.add("modal-overlay-show");
  feedback_name.focus();
});

feedback_close.addEventListener("click", function(event) {
  event.preventDefault();
  feedback_popup.classList.remove("modal-content-show");
  feedback_overlay.classList.remove("modal-overlay-show");
});

feedback_overlay.addEventListener("click", function(event) {
  event.preventDefault();
  feedback_popup.classList.remove("modal-content-show");
  feedback_overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedback_popup.classList.contains("modal-content-show")
    || feedback_overlay.classList.contains("modal-overlay-show")) {
      feedback_popup.classList.remove("modal-content-show");
      feedback_overlay.classList.remove("modal-overlay-show");
    }
  }
});

feedback_form.addEventListener("submit", function(event) {
  if (!feedback_name.value || !feedback_email.value || !feedback_feedback.value) {
    alert("Заполните форму");
  }
});

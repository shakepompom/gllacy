// var input = document.querySelectorAll("fieldset > input");
// var label = document.querySelectorAll("fieldset > label");
//
//
// for(var i=0; i < input.length; i++) {
//   input[i].addEventListener("focus", function(event) {
//     for(var j=i; j < label.length; j++) {
//       if (label[j].classList.contains("label-blur")) {
//         label[j].classList.remove("label-blur");
//         label[j].classList.add("label-focus");
//       } else {
//         label[j].classList.add("label-focus");
//       }
//     };
//   });
//
//   input[i].addEventListener("blur", function(event) {
//     for(var j=i; j < label.length; j++) {
//       if (!input.value) {
//         label[j].classList.remove("label-focus");
//       } else {
//         label[j].classList.add("label-blur");
//       }
//     };
//   });
// };



// popup-search
var search_link = document.querySelector(".user-panel-search");
var search_popup = document.querySelector(".modal-content-search");
var search_form = search_popup.querySelector("form");
var search_search = search_popup.querySelector("[name=what-to-find]");
var search_search_label = search_popup.querySelector("[name=what-to-find] + label");
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

search_search.addEventListener("focus", function(event) {
  if (search_search_label.classList.contains("label-blur")) {
    search_search_label.classList.remove("label-blur");
    search_search_label.classList.add("label-focus");
  } else {
    search_search_label.classList.add("label-focus");
  }
});

search_search.addEventListener("blur", function(event) {
  if (!search_search.value) {
    search_search_label.classList.remove("label-focus");
  } else {
    search_search_label.classList.add("label-blur");
  }
});

// popup-login
var login_link = document.querySelector(".user-panel-login");
var login_popup = document.querySelector(".modal-content-login");
var login_overlay = document.querySelector(".modal-overlay-transparent");
var login_form = login_popup.querySelector("form");
var login_login = login_popup.querySelector("[name=email-login]");
var login_login_label = login_popup.querySelector("[name=email-login] + label");
var login_password = login_popup.querySelector("[name=password]");
var login_password_label = login_popup.querySelector("[name=password] + label");
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

login_login.addEventListener("focus", function(event) {
  if (login_login_label.classList.contains("label-blur")) {
    login_login_label.classList.remove("label-blur");
    login_login_label.classList.add("label-focus");
  } else {
    login_login_label.classList.add("label-focus");
  }
});

login_login.addEventListener("blur", function(event) {
  if (!login_login.value) {
    login_login_label.classList.remove("label-focus");
  } else {
    login_login_label.classList.add("label-blur");
  }
});

login_password.addEventListener("focus", function(event) {
  if (login_password_label.classList.contains("label-blur")) {
    login_password_label.classList.remove("label-blur");
    login_password_label.classList.add("label-focus");
  } else {
    login_password_label.classList.add("label-focus");
  }
});

login_password.addEventListener("blur", function(event) {
  if (!login_password.value) {
    login_password_label.classList.remove("label-focus");
  } else {
    login_password_label.classList.add("label-blur");
  }
});

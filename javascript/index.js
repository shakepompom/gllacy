// popup-feedback
var feedback_link = document.querySelector(".feedback");
var feedback_popup = document.querySelector(".modal-content-feedback");
var feedback_overlay = document.querySelector(".modal-overlay");
var feedback_close = feedback_popup.querySelector(".modal-content-close");
var feedback_form = feedback_popup.querySelector("form");
var feedback_name = feedback_popup.querySelector("[name=your-name]");
var feedback_name_label = feedback_popup.querySelector("[name=your-name] + label");
var feedback_email = feedback_popup.querySelector("[name=email-for-answer]");
var feedback_email_label = feedback_popup.querySelector("[name=email-for-answer] + label");
var feedback_feedback = feedback_popup.querySelector("[name=write-something]");
var feedback_feedback_label = feedback_popup.querySelector("[name=write-something] + label");



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

feedback_name.addEventListener("focus", function(event) {
  if (feedback_name_label.classList.contains("label-blur")) {
    feedback_name_label.classList.remove("label-blur");
    feedback_name_label.classList.add("label-focus");
  } else {
    feedback_name_label.classList.add("label-focus");
  }
});

feedback_name.addEventListener("blur", function(event) {
  if (!feedback_name.value) {
    feedback_name_label.classList.remove("label-focus");
  } else {
    feedback_name_label.classList.add("label-blur");
  }
});

feedback_email.addEventListener("focus", function(event) {
  if (feedback_email_label.classList.contains("label-blur")) {
    feedback_email_label.classList.remove("label-blur");
    feedback_email_label.classList.add("label-focus");
  } else {
    feedback_email_label.classList.add("label-focus");
  }
});

feedback_email.addEventListener("blur", function(event) {
  if (!feedback_email.value) {
    feedback_email_label.classList.remove("label-focus");
  } else {
    feedback_email_label.classList.add("label-blur");
  }
});

feedback_feedback.addEventListener("focus", function(event) {
  if (feedback_feedback_label.classList.contains("label-blur")) {
    feedback_feedback_label.classList.remove("label-blur");
    feedback_feedback_label.classList.add("label-focus");
  } else {
    feedback_feedback_label.classList.add("label-focus");
  }
});

feedback_feedback.addEventListener("blur", function(event) {
  if (!feedback_feedback.value) {
    feedback_feedback_label.classList.remove("label-focus");
  } else {
    feedback_feedback_label.classList.add("label-blur");
  }
});



// email-subscribe
var email_subscribe_input = document.querySelector("[name=email-subscribe]");
var email_subscribe_label = document.querySelector("[name=email-subscribe] + label");



email_subscribe_input.addEventListener("focus", function(event) {
  if (email_subscribe_label.classList.contains("label-blur")) {
    email_subscribe_label.classList.remove("label-blur");
    email_subscribe_label.classList.add("label-focus");
  } else {
    email_subscribe_label.classList.add("label-focus");
  }
});

email_subscribe_input.addEventListener("blur", function(event) {
  if (!email_subscribe_input.value) {
    email_subscribe_label.classList.remove("label-focus");
  } else {
    email_subscribe_label.classList.add("label-blur");
  }
});

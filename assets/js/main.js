const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav__link");
const navMenu = document.getElementById("nav-menu");

/*===== MENU SHOW =====*/
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

/*===== ACTIVE AND REMOVE MENU =====*/
function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// Define reusable reveal settings
const revealSettings = {
  interval: 200,
};

/*SCROLL HOME*/
sr.reveal(".home__title");
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", revealSettings);

/*SCROLL ABOUT*/
sr.reveal(".about__img");
sr.reveal(".about__subtitle", { delay: 400 });
sr.reveal(".about__text", { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle");
sr.reveal(".skills__text");
sr.reveal(".skills__data", revealSettings);
sr.reveal(".skills__img", { delay: 600 });

/*SCROLL PROJECTS*/
sr.reveal(".project__title", revealSettings);
sr.reveal(".project__subtitle", revealSettings);
sr.reveal(".project__text", revealSettings);
sr.reveal(".project__img", revealSettings);

/*SCROLL CONTACT*/
sr.reveal(".contact__input", { delay: 200 });

/* SEND VIA CONTACT FORM */
document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById("sendBtn");
  const nameInput = document.querySelector(".contact__input[type='text']");
  const emailInput = document.querySelector(".contact__input[type='mail']");
  const messageInput = document.getElementById("text-input");
  const contactForm = document.querySelector(".contact__form");
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message-container");

  sendButton.addEventListener("click", function (event) {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (nameValue === "" || emailValue === "" || messageValue === "") {
      showMessage("❌ Please enter all required information!", "red");
    } else if (!validateEmail(emailValue)) {
      showMessage("❌ Please enter a valid email address!", "red");
    } else {
      showMessage("✔️ Message sent successfully!", "green");
    }
  });

  function showMessage(message, color) {
    messageContainer.textContent = message;
    messageContainer.style.color = color; // Set text color
    contactForm.insertBefore(messageContainer, sendButton);
    setTimeout(() => {
      messageContainer.remove();
    }, 2500);
  }

  //Valid input email
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[a-zA-Z0-9.-]+$/;
    return emailRegex.test(email);
  }
});

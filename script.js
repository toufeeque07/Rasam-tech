'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});

// Close mobile nav when a link is clicked (and restore scroll)
const navLinks = document.querySelectorAll(".navbar-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggleBtn.classList.remove("active");
    navbar.classList.remove("active");
    document.body.classList.remove("active");
  });
});



/**
 * Service toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const ServiceBox = document.querySelector("[data-Service-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(ServiceBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}


// contact us

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const spinner = document.getElementById('spinner');
    const submitButton = document.getElementById('submit');
    
    // Change button text to Sending...
    submitButton.disabled = true;
    submitButton.innerText = "Sending...";

    // Show spinner
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    }).then(response => {
        // Hide spinner
        spinner.style.display = 'none';

        // Reset button text
        submitButton.disabled = false;
        submitButton.innerText = "Send";

        // Friendly success message
        alert("🎉 Thank you! Your message has been sent successfully. We will get back to you shortly.");

        // Reset form fields
        form.reset();
    }).catch(error => {
        // Hide spinner
        spinner.style.display = 'none';

        // Reset button text
        submitButton.disabled = false;
        submitButton.innerText = "Send";

        // Friendly error message
        alert("❌ Oops! Something went wrong. Please try again.");
        console.error('Error!', error.message);
    });
});

// 1. Mobile hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", function () {
  mainNav.classList.toggle("nav-open");
});

// 2. Smooth scroll when clicking nav links, and auto-close menu on mobile after click
const navLinks = document.querySelectorAll("#main-nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({ behavior: "smooth" });

    // Close the mobile menu after clicking a link
    mainNav.classList.remove("nav-open");
  });
});

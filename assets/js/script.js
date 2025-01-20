const openMenuBtn = document.querySelector("#menu-open-button");
const closeMenuBtn = document.querySelector("#menu-close-button");
const menuClick = document.querySelector(".nav-menu .nav-link");

openMenuBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

closeMenuBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

const swiper = new Swiper(".slider-wrapper", {
  // Optional
  slidesPerView: "auto",
  centeredSlides: true,

  spaceBetween: 25,
  grabCursor: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 300,
  reset: true,
});
sr.reveal(".hero-details, .section-title", { origin: "top", delay: 100 });
sr.reveal(".hero-image-wrapper, .slider-wrapper", {
  origin: "bottom",
  delay: 100,
});
sr.reveal(".about-image-wrapper, .menu-left , .contact-form", {
  origin: "left",
});
sr.reveal(".about-details, .menu-right, .contact-info-list", {
  origin: "right",
});
sr.reveal(".about-details, .menu-top", { origin: "top" });
sr.reveal(
  ".about-details, .menu-bottom, .copyright-text, .social-link-list, .policy-text",
  { origin: "bottom" }
);

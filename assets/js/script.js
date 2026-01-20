// const btn = document.getElementById("mobile-menu-btn");
// const menu = document.getElementById("mobile-menu");

// btn.addEventListener("click", () => {
//   menu.classList.toggle("hidden");
// });

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  // Toggle Icon
  const icon = menuBtn.querySelector('i');
  if (mobileMenu.classList.contains('open')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});

// Scroll Effect
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('shadow-md');
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.classList.remove('shadow-md');
    header.style.backgroundColor = "rgba(255, 255, 255, 1)";
    header.style.backdropFilter = "none";
  }
});
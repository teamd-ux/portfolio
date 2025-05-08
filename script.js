// Placeholder for future interactive features
console.log('Navbar loaded');

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobileNav");
    const menuBackdrop = document.getElementById("menuBackdrop");
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      mobileNav.classList.toggle("show");
      menuBackdrop.classList.toggle("show");
    });
  
    menuBackdrop.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileNav.classList.remove("show");
      menuBackdrop.classList.remove("show");
    });
  });
  

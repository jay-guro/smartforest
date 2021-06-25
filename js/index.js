'use strict';
// Burger
const tabs = document.querySelectorAll(".tabs li");
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

// ParticlesJS
window.onload = function () {
  particlesJS.load("tsparticles-js", "js/particles.json", function () {
  });
};

// Loader
$(document).ready(function () {
    setTimeout(function () {
      $('body').addClass('loaded');
    }, 1500);
});

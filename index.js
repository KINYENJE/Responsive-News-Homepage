// JavaScript
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.links');

hamburger.addEventListener('click', function() {
  navMenu.classList.toggle('show');
});
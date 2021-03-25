// for navigation
const navBtn = document.querySelector('.nav-btn');
const navLinks = document.querySelector('.nav-links');

// for date target is date span!
const date = (document.getElementById(
  'date'
).innerHTML = new Date().getFullYear());

navBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav');
});

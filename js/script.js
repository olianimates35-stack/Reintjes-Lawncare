document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const header = document.getElementById('header');
navToggle.addEventListener('click', () => {
  header.classList.toggle('nav-open');
});

document.querySelectorAll('.main-nav a, .footer-nav a').forEach((link) => {
  link.addEventListener('click', () => header.classList.remove('nav-open'));
});

const form = document.getElementById('quote-form');
const formNote = document.getElementById('form-note');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = 'Thanks! This is a demo site, so no request was actually sent. This is where your quote confirmation would appear.';
  form.reset();
});

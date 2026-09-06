const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const header = document.getElementById('header');
if (navToggle && header) {
  navToggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });
  document.querySelectorAll('.main-nav a, .footer-col a').forEach((link) => {
    link.addEventListener('click', () => header.classList.remove('nav-open'));
  });
}

const form = document.getElementById('quote-form');
if (form) {
  const formNote = document.getElementById('form-note');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = 'Thanks! This is a demo site, so no request was actually sent. This is where your quote confirmation would appear.';
    form.reset();
  });
}

document.querySelectorAll('.faq-item').forEach((item) => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isOpen = item.getAttribute('data-open') === 'true';
    item.closest('.faq-list').querySelectorAll('.faq-item').forEach((other) => {
      other.setAttribute('data-open', 'false');
    });
    item.setAttribute('data-open', isOpen ? 'false' : 'true');
  });
});

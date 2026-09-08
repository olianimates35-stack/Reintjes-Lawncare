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
  const submitBtn = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    formNote.className = 'form-note';
    formNote.textContent = 'Sending...';
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        formNote.className = 'form-note form-note-success';
        formNote.textContent = "Thanks! Your request is in. We'll get back to you shortly.";
        form.reset();
      } else {
        formNote.className = 'form-note form-note-error';
        formNote.textContent = 'Something went wrong sending that. Please call or text (970) 390-5906 instead.';
      }
    } catch (err) {
      formNote.className = 'form-note form-note-error';
      formNote.textContent = 'Something went wrong sending that. Please call or text (970) 390-5906 instead.';
    } finally {
      submitBtn.disabled = false;
    }
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

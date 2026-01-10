const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav on link tap (mobile)
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Theme switching
const rootEl = document.documentElement;
function setTheme(theme) {
  rootEl.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) {
    // Show target theme label on the button
    const target = theme === 'light' ? 'Dark' : 'Light';
    btn.textContent = target;
    btn.setAttribute('aria-label', `Switch to ${target} theme`);
  }
}

// Initialize theme from storage (default dark)
setTheme(localStorage.getItem('theme') || 'dark');

document.getElementById('themeToggle')?.addEventListener('click', () => {
  const current = rootEl.getAttribute('data-theme') || 'dark';
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// Basic scroll animation (fade-up)
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('reveal');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .card, .person, .testimonial, .job').forEach(el => {
  el.classList.add('pre-reveal');
  observer.observe(el);
});

// ==============================
//  VAISHNAVI R — PORTFOLIO JS
// ==============================

// ---- NAVBAR SCROLL ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ---- HAMBURGER MENU ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const bars = hamburger.querySelectorAll('span');
  bars[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translate(5px, 5px)' : '';
  bars[1].style.opacity = navLinks.classList.contains('open') ? '0' : '1';
  bars[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

// Close nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ---- ACTIVE NAV LINK on scroll ----
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const observerOptions = { rootMargin: '-40% 0px -55% 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, observerOptions);
sections.forEach(s => observer.observe(s));

// ---- SCROLL REVEAL ANIMATION ----
const revealElements = document.querySelectorAll(
  '.project-card, .skill-category, .cert-card, .achievement-card, .timeline-item, .detail-card, .contact-item'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

// ---- CONTACT FORM ----
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    btn.style.background = 'linear-gradient(135deg, #34D399, #059669)';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = original;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}

// ---- TYPING EFFECT for hero title ----
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  const titles = [
    'Full Stack Developer & Data Enthusiast',
    'Python & Django Developer',
    'Problem Solver & Builder',
    'BCA Graduate · CGPA 8.84'
  ];
  let currentTitle = 0;
  let currentChar = 0;
  let isDeleting = false;

  function typeEffect() {
    const text = titles[currentTitle];
    if (!isDeleting) {
      heroTitle.textContent = text.slice(0, ++currentChar);
      if (currentChar === text.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
      }
    } else {
      heroTitle.textContent = text.slice(0, --currentChar);
      if (currentChar === 0) {
        isDeleting = false;
        currentTitle = (currentTitle + 1) % titles.length;
      }
    }
    setTimeout(typeEffect, isDeleting ? 40 : 70);
  }
  setTimeout(typeEffect, 1500);
}

// ---- SMOOTH NAV ACTIVE STYLE ----
const style = document.createElement('style');
style.textContent = `.nav-links a.active { color: #fff; } .nav-links a.active::after { width: 100%; }`;
document.head.appendChild(style);

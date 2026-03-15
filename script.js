// ===== CONSTANTS =====
const TYPING_SPEED = 120;
const DELETE_SPEED = 60;
const PAUSE_AFTER_WORD = 2000;
const PAUSE_BETWEEN_WORDS = 500;

const TILT_TRANSLATE_X = 6;
const TILT_PERSPECTIVE = 600;
const TILT_MAX_DEG = 4;

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a[data-section]');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  updateActiveNav();

  // Scroll to top button
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

// ===== ACTIVE NAV LINK =====
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);

    if (link) {
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
}

// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

function setHamburgerState(isOpen) {
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
  spans[1].style.opacity = isOpen ? '0' : '1';
  spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
  hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

hamburger.addEventListener('click', () => {
  const isOpen = navLinksContainer.classList.toggle('open');
  setHamburgerState(isOpen);
});

// Close menu when a link is clicked
navLinksContainer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove('open');
    setHamburgerState(false);
  });
});

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.querySelector('.scroll-top');
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

fadeElements.forEach(el => observer.observe(el));

// ===== TYPING EFFECT FOR HERO =====
const typingText = document.getElementById('typing-text');
const roles = [
  'Backend Engineer',
  'Public Administration Systems',
  'Historical Digitalization',
  'Full-Stack Developer'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = TYPING_SPEED;

function type() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = DELETE_SPEED;
  } else {
    typingText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = TYPING_SPEED;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    typingDelay = PAUSE_AFTER_WORD;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingDelay = PAUSE_BETWEEN_WORDS;
  }

  setTimeout(type, typingDelay);
}

setTimeout(type, 1000);

// ===== SMOOTH HOVER TILT FOR CARDS =====
document.querySelectorAll('.timeline-card, .skill-category').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateX(${TILT_TRANSLATE_X}px) perspective(${TILT_PERSPECTIVE}px) rotateY(${x * TILT_MAX_DEG}deg) rotateX(${-y * TILT_MAX_DEG}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ===== PROFILE PHOTO FALLBACK =====
const heroPhoto = document.querySelector('.hero-photo');
if (heroPhoto) {
  heroPhoto.addEventListener('error', () => {
    const avatar = heroPhoto.closest('.hero-avatar');
    heroPhoto.remove();
    if (avatar) {
      avatar.classList.remove('photo');
      avatar.textContent = '👨‍💻';
    }
  });
}

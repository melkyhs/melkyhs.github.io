// ===== CONSTANTS =====
const TYPING_SPEED = 110;
const DELETE_SPEED = 55;
const PAUSE_AFTER_WORD = 2200;
const PAUSE_BETWEEN_WORDS = 400;

const TILT_PERSPECTIVE = 800;
const TILT_MAX_DEG = 3;
const TILT_LIFT_PX = -2;

// ===== SCROLL PROGRESS BAR =====
const scrollProgress = document.getElementById('scrollProgress');

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = progress + '%';
}

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a[data-section]');

window.addEventListener('scroll', () => {
  updateScrollProgress();

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
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px'
});

fadeElements.forEach(el => observer.observe(el));

// ===== TYPING EFFECT FOR HERO =====
const typingText = document.getElementById('typing-text');
const roles = [
  'Backend Engineer',
  'Heritage Digitizer',
  'Card Game Collector',
  'Public Systems Builder',
  'Anime Fan'
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

setTimeout(type, 800);

// ===== SMOOTH HOVER TILT FOR CARDS =====
document.querySelectorAll('.timeline-card, .skill-category').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(${TILT_PERSPECTIVE}px) rotateY(${x * TILT_MAX_DEG}deg) rotateX(${-y * TILT_MAX_DEG}deg) translateY(${TILT_LIFT_PX}px)`;
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

// ===== INTEREST CARD ACCENT COLORS =====
document.querySelectorAll('.interest-card[data-accent]').forEach(card => {
  const color = card.dataset.accent;
  card.style.setProperty('--card-color', color);
  const icon = card.querySelector('.interest-icon');
  if (icon) icon.style.color = color;
});

// ===== HERO MOUSE PARALLAX =====
const heroSection = document.querySelector('.hero');
const parallaxEls = heroSection
  ? heroSection.querySelectorAll('[data-parallax]')
  : [];

if (heroSection && parallaxEls.length > 0) {
  let rafId = null;
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    targetX = (e.clientX - rect.left) / rect.width - 0.5;
    targetY = (e.clientY - rect.top) / rect.height - 0.5;
    if (!rafId) rafId = requestAnimationFrame(animateParallax);
  });

  heroSection.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
    if (!rafId) rafId = requestAnimationFrame(animateParallax);
  });

  function animateParallax() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    parallaxEls.forEach(el => {
      const depth = parseFloat(el.dataset.parallax) || 0.02;
      el.style.transform = `translate(${currentX * depth * 120}px, ${currentY * depth * 120}px)`;
    });
    if (Math.abs(targetX - currentX) > 0.0005 || Math.abs(targetY - currentY) > 0.0005) {
      rafId = requestAnimationFrame(animateParallax);
    } else {
      rafId = null;
    }
  }
}

// ===== STAT COUNTER ANIMATION =====
function animateCounter(el, target, suffix, duration) {
  const startTime = performance.now();
  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(tick);
}

window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('.hero-stat-card').forEach(card => {
      const numEl = card.querySelector('.stat-number');
      if (!numEl) return;
      const raw = numEl.textContent.trim();
      const suffix = raw.replace(/[0-9]/g, '');
      const target = parseInt(raw, 10);
      if (!isNaN(target)) animateCounter(numEl, target, suffix, 1400);
    });
  }, 700);
});

// ===== ABOUT TERMINAL LINE REVEAL =====
const aboutTerminal = document.querySelector('.about-terminal');
if (aboutTerminal) {
  const termLines = aboutTerminal.querySelectorAll(
    '.terminal-line, .terminal-output, .terminal-output-plain, .terminal-cursor-line'
  );
  termLines.forEach(line => { line.style.opacity = '0'; });

  const termObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.revealed) {
        entry.target.dataset.revealed = '1';
        termLines.forEach((line, i) => {
          setTimeout(() => {
            line.style.transition = 'opacity 0.3s ease';
            line.style.opacity = '1';
          }, i * 220 + 150);
        });
      }
    });
  }, { threshold: 0.35 });

  termObserver.observe(aboutTerminal);
}

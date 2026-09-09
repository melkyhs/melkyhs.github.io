// ===== CONSTANTS =====
const TYPING_SPEED = 110;
const DELETE_SPEED = 55;
const PAUSE_AFTER_WORD = 2200;
const PAUSE_BETWEEN_WORDS = 400;

const TILT_PERSPECTIVE = 800;
const TILT_MAX_DEG = 3;
const TILT_LIFT_PX = -2;
const LANG_STORAGE_KEY = 'preferredLanguage';

const ROLE_SETS = {
  en: [
    'Data Analytics & ML Specialist',
    'Full Stack Software Engineer',
    'Software Testing & QA Specialist',
    'Big Data & Predictive Modeling',
    'Computer Science Graduate'
  ],
  id: [
    'Spesialis Data Analytics & ML',
    'Software Engineer Full Stack',
    'Spesialis Software Testing & QA',
    'Big Data & Pemodelan Prediktif',
    'Lulusan Ilmu Komputer'
  ]
};

const TRANSLATIONS = {
  en: {
    meta: {
      title: 'Melky Hermansyah - Data Analytics & Full Stack Portfolio',
      description: 'Computer Science Graduate specializing in Data Analytics, Machine Learning, and Full Stack Software Engineering based in Banjarmasin, Indonesia.',
      ogTitle: 'Melky Hermansyah - Data Analytics & Full Stack Portfolio',
      ogDescription: 'Portfolio of Melky Hermansyah - Data Analytics, Machine Learning, Software Engineering, and QA.'
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      interests: 'Interests',
      contact: 'Contact'
    },
    hero: {
      badge: '<span class="dot"></span>Data Analytics &middot; Machine Learning &middot; Full Stack',
      subtext: '<i class="fas fa-map-marker-alt"></i> S.Kom &middot; Universitas Lambung Mangkurat &middot; Banjarmasin, Kalimantan Selatan',
      ctaWork: 'View Profile Details <i class="fas fa-arrow-right"></i>',
      ctaContact: 'Contact Me <i class="fas fa-arrow-right"></i>',
      idRole: 'Data Analytics &middot; Full Stack Engineer',
      factExperience: 'Experience',
      factRole: 'Certification',
      factEducation: 'Education',
      factLocation: 'Location',
      factExperienceValue: '3 Work Experiences',
      factRoleValue: 'BNSP Certified',
      factEducationValue: 'S1 Ilmu Komputer',
      factLocationValue: 'Banjarmasin, Kalimantan Selatan',
      scroll: 'scroll'
    },
    about: {
      label: 'Summary',
      title: 'Professional <span class="gradient-text">Profile</span>',
      p1: 'I am <strong>Melky Hermansyah</strong>, a Computer Science Graduate from Universitas Lambung Mangkurat specializing in Data Analytics (Big Data), Machine Learning, and Full Stack Software Engineering.',
      p2: 'Experienced in building Point-of-Sale (POS) systems, Front-End QA Testing for medical devices, and public sector data administration.',
      p3: 'Certified by BNSP with a TOEFL score of <strong>527</strong>, with strong communication in Indonesian (native) and professional English.',
      eduTitle: 'Bachelor of Computer Science',
      eduOrg: 'Universitas Lambung Mangkurat (2019 - 2026)',
      workTitle: 'GPA',
      workOrg: '3.34 / 4.00',
      locationTitle: 'Banjarmasin, Kalimantan Selatan',
      locationCountry: 'Indonesia'
    },
    skills: {
      label: 'Skills',
      title: 'Core <span class="gradient-text">Competencies</span>',
      subtitle: 'Domains, technologies, and tools aligned with academic and professional work.',
      cat1: 'Core Domains',
      cat2: 'Technologies',
      cat3: 'Office Tools',
      cat4: 'Languages'
    },
    experience: {
      label: 'Experience',
      title: 'Work <span class="gradient-text">Experience</span>',
      subtitle: 'Professional roles in public administration, QA testing, and full stack development.',
      job1Title: 'Public & Administrative Support Specialist',
      job1Date: 'Banjarmasin',
      job1Desc: 'Managed structured internal administration and archiving of regional cultural and tourism data, guided visitors on local history and culture, and supported municipal project operations.',
      job1Tags: ['Public Administration', 'Data Archiving', 'Public Service', 'Government Operations'],
      job2Title: 'Software Testing & Front-End QA Specialist',
      job2Desc: 'Executed software testing, structured debugging, and front-end maintenance for medical device applications while producing detailed bug reports and UX evaluations.',
      job2Tags: ['Software Testing', 'Debugging', 'Front-End QA', 'UX Evaluation'],
      job3Title: 'Full Stack Developer (POS & Inventory System)',
      job3Desc: 'Built POS and inventory software using JavaScript and PHP, designed MySQL schemas for stock and sales tracking, and ensured transactional stability for daily operations.',
      job3Tags: ['Full Stack', 'JavaScript', 'PHP', 'MySQL', 'POS Systems']
    },
    projects: {
      label: 'Education',
      title: 'Academic <span class="gradient-text">Background</span>',
      subtitle: 'Formal education focus and key projects in data and software engineering.',
      projectLabel: 'Education',
      projectTitle: 'Universitas Lambung Mangkurat',
      projectDesc1: 'Bachelor of Computer Science (S1 Ilmu Komputer), 2019 - 2026, GPA <strong>3.34 / 4.00</strong>. Focus: Big Data Analytics, Machine Learning, Predictive Modeling, AI, and Data Visualization.',
      projectDesc2: 'Key projects include Real-Time Facial Expression Recognition using MobileNet and integrated POS &amp; data architecture for digital inventory efficiency.'
    },
    interests: {
      label: 'Credentials',
      title: 'Certifications &amp; <span class="gradient-text">Languages</span>',
      subtitle: 'Verified professional certifications and language proficiency.',
      card1Title: 'Junior Office Operator',
      card1Desc: 'BNSP (Badan Nasional Sertifikasi Profesi) &middot; Validity: Aug 2025 - Aug 2028.',
      card2Title: 'TOEFL Certification (Score: 527)',
      card2Desc: 'Issued by Universitas Lambung Mangkurat in 2024.',
      card3Title: 'Basic Digital Entrepreneurship',
      card3Desc: 'Digital Talent Scholarship (DTS), completed in 2023.',
      card4Title: 'Language Proficiency',
      card4Desc: 'Indonesian (Native) and English (Professional).'
    },
    contact: {
      label: 'Contact',
      title: 'Let\'s <span class="gradient-text">Connect</span>',
      subtitle: 'Reach me directly for opportunities in data analytics, machine learning, and software engineering.',
      pingFlag: '"available_for_collaboration"',
      pingResponse: '<span class="t-success">✓</span> Verified profile active. Open for collaboration and professional opportunities.',
      cta: 'Visit Portfolio <i class="fas fa-arrow-right"></i>'
    },
    footer: {
      line1: 'Designed &amp; Built by <span>Melky Hermansyah</span> &middot; S.Kom &middot; <a href="mailto:sayamelkyhermansyah@gmail.com">sayamelkyhermansyah@gmail.com</a>',
      rights: 'All rights reserved.'
    },
    labels: {
      mainNav: 'Main navigation',
      menuToggle: 'Toggle mobile menu',
      switchTo: 'Switch to Bahasa Indonesia'
    }
  },
  id: {
    meta: {
      title: 'Melky Hermansyah - Portofolio Data Analytics & Full Stack',
      description: 'Lulusan Ilmu Komputer yang berfokus pada Data Analytics, Machine Learning, dan Full Stack Software Engineering di Banjarmasin, Indonesia.',
      ogTitle: 'Melky Hermansyah - Portofolio Data Analytics & Full Stack',
      ogDescription: 'Portofolio Melky Hermansyah - Data Analytics, Machine Learning, Software Engineering, dan QA.'
    },
    nav: {
      about: 'Tentang',
      skills: 'Keahlian',
      experience: 'Pengalaman',
      projects: 'Proyek',
      interests: 'Minat',
      contact: 'Kontak'
    },
    hero: {
      badge: '<span class="dot"></span>Data Analytics &middot; Machine Learning &middot; Full Stack',
      subtext: '<i class="fas fa-map-marker-alt"></i> S.Kom &middot; Universitas Lambung Mangkurat &middot; Banjarmasin, Kalimantan Selatan',
      ctaWork: 'Lihat Detail Profil <i class="fas fa-arrow-right"></i>',
      ctaContact: 'Hubungi Saya <i class="fas fa-arrow-right"></i>',
      idRole: 'Data Analytics &middot; Full Stack Engineer',
      factExperience: 'Pengalaman',
      factRole: 'Sertifikasi',
      factEducation: 'Pendidikan',
      factLocation: 'Lokasi',
      factExperienceValue: '3 Pengalaman Kerja',
      factRoleValue: 'Tersertifikasi BNSP',
      factEducationValue: 'S.Kom - Ilmu Komputer',
      factLocationValue: 'Banjarmasin, Kalimantan Selatan',
      scroll: 'gulir'
    },
    about: {
      label: 'Ringkasan',
      title: 'Profil <span class="gradient-text">Profesional</span>',
      p1: 'Saya <strong>Melky Hermansyah</strong>, lulusan Ilmu Komputer dari Universitas Lambung Mangkurat dengan spesialisasi Data Analytics (Big Data), Machine Learning, dan Full Stack Software Engineering.',
      p2: 'Berpengalaman membangun sistem POS, melakukan Front-End QA Testing untuk aplikasi alat medis, dan mendukung administrasi data sektor publik.',
      p3: 'Saya tersertifikasi BNSP dan memiliki skor TOEFL <strong>527</strong>, dengan kemampuan komunikasi Bahasa Indonesia native dan Bahasa Inggris profesional.',
      eduTitle: 'Sarjana Ilmu Komputer',
      eduOrg: 'Universitas Lambung Mangkurat (2019 - 2026)',
      workTitle: 'IPK',
      workOrg: '3.34 / 4.00',
      locationTitle: 'Banjarmasin, Kalimantan Selatan',
      locationCountry: 'Indonesia'
    },
    skills: {
      label: 'Keahlian',
      title: 'Kompetensi <span class="gradient-text">Inti</span>',
      subtitle: 'Domain, teknologi, dan tools yang selaras dengan pengalaman akademik dan profesional.',
      cat1: 'Domain Utama',
      cat2: 'Teknologi',
      cat3: 'Tools Perkantoran',
      cat4: 'Bahasa'
    },
    experience: {
      label: 'Pengalaman',
      title: 'Pengalaman <span class="gradient-text">Kerja</span>',
      subtitle: 'Peran profesional pada administrasi publik, QA testing, dan pengembangan full stack.',
      job1Title: 'Public & Administrative Support Specialist',
      job1Date: 'Banjarmasin',
      job1Desc: 'Mengelola administrasi internal terstruktur serta pengarsipan data budaya dan pariwisata, menjadi pemandu resmi edukasi sejarah lokal, dan mendukung operasional proyek pemerintah kota.',
      job1Tags: ['Administrasi Publik', 'Pengarsipan Data', 'Layanan Publik', 'Operasional Pemerintahan'],
      job2Title: 'Software Testing & Front-End QA Specialist',
      job2Desc: 'Menjalankan software testing, debugging terstruktur, dan pemeliharaan front-end aplikasi alat medis sambil menyusun dokumentasi bug serta evaluasi UX secara presisi.',
      job2Tags: ['Software Testing', 'Debugging', 'Front-End QA', 'Evaluasi UX'],
      job3Title: 'Full Stack Developer (POS & Inventory System)',
      job3Desc: 'Membangun sistem POS dan inventaris dari nol menggunakan JavaScript dan PHP, mendesain skema MySQL untuk stok dan penjualan, serta menjaga akurasi transaksi operasional harian.',
      job3Tags: ['Full Stack', 'JavaScript', 'PHP', 'MySQL', 'Sistem POS']
    },
    projects: {
      label: 'Pendidikan',
      title: 'Latar Belakang <span class="gradient-text">Akademik</span>',
      subtitle: 'Fokus pendidikan formal dan proyek utama pada data dan rekayasa perangkat lunak.',
      projectLabel: 'Pendidikan',
      projectTitle: 'Universitas Lambung Mangkurat',
      projectDesc1: 'Sarjana Ilmu Komputer (S1 Ilmu Komputer), 2019 - 2026, IPK <strong>3.34 / 4.00</strong>. Fokus: Big Data Analytics, Machine Learning, Predictive Modeling, AI, dan Data Visualization.',
      projectDesc2: 'Proyek utama: Real-Time Facial Expression Recognition berbasis MobileNet dan desain arsitektur POS &amp; data untuk efisiensi inventaris digital.'
    },
    interests: {
      label: 'Kredensial',
      title: 'Sertifikasi &amp; <span class="gradient-text">Bahasa</span>',
      subtitle: 'Sertifikasi profesional terverifikasi dan kemampuan bahasa.',
      card1Title: 'Junior Office Operator',
      card1Desc: 'BNSP (Badan Nasional Sertifikasi Profesi) &middot; Berlaku: Agustus 2025 - Agustus 2028.',
      card2Title: 'Sertifikasi TOEFL (Skor: 527)',
      card2Desc: 'Diterbitkan oleh Universitas Lambung Mangkurat pada tahun 2024.',
      card3Title: 'Basic Digital Entrepreneurship',
      card3Desc: 'Digital Talent Scholarship (DTS), selesai pada tahun 2023.',
      card4Title: 'Kemampuan Bahasa',
      card4Desc: 'Bahasa Indonesia (Native) dan Bahasa Inggris (Profesional).'
    },
    contact: {
      label: 'Kontak',
      title: 'Mari <span class="gradient-text">Terhubung</span>',
      subtitle: 'Hubungi saya untuk peluang di data analytics, machine learning, dan software engineering.',
      pingFlag: '"siap_berkolaborasi"',
      pingResponse: '<span class="t-success">✓</span> Profil terverifikasi aktif. Terbuka untuk kolaborasi dan peluang profesional.',
      cta: 'Kunjungi Portofolio <i class="fas fa-arrow-right"></i>'
    },
    footer: {
      line1: 'Dirancang &amp; Dibangun oleh <span>Melky Hermansyah</span> &middot; S.Kom &middot; <a href="mailto:sayamelkyhermansyah@gmail.com">sayamelkyhermansyah@gmail.com</a>',
      rights: 'Hak cipta dilindungi.'
    },
    labels: {
      mainNav: 'Navigasi utama',
      menuToggle: 'Buka/tutup menu mobile',
      switchTo: 'Ganti ke English'
    }
  }
};

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

function setHtml(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = value;
}

function setAttr(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

function setTextList(selector, values) {
  document.querySelectorAll(selector).forEach((el, index) => {
    if (values[index]) el.textContent = values[index];
  });
}

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
const langToggle = document.getElementById('langToggle');

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
let currentRoles = ROLE_SETS.en;
let typingTimeoutId = null;

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = TYPING_SPEED;

function queueTyping(delay) {
  typingTimeoutId = window.setTimeout(type, delay);
}

function resetTypingEffect() {
  if (!typingText) return;

  if (typingTimeoutId) {
    clearTimeout(typingTimeoutId);
  }

  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typingDelay = TYPING_SPEED;
  typingText.textContent = '';
  queueTyping(250);
}

function type() {
  if (!typingText || currentRoles.length === 0) return;

  const currentRole = currentRoles[roleIndex % currentRoles.length];

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
    roleIndex = (roleIndex + 1) % currentRoles.length;
    typingDelay = PAUSE_BETWEEN_WORDS;
  }

  queueTyping(typingDelay);
}

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(LANG_STORAGE_KEY);
  if (savedLanguage === 'id' || savedLanguage === 'en') {
    return savedLanguage;
  }

  const browserLanguage = navigator.language.toLowerCase();
  return browserLanguage.startsWith('id') ? 'id' : 'en';
}

function applyLanguage(language, savePreference = true) {
  const lang = language === 'id' ? 'id' : 'en';
  const t = TRANSLATIONS[lang];

  document.documentElement.lang = lang;
  document.title = t.meta.title;
  setAttr('meta[name="description"]', 'content', t.meta.description);
  setAttr('meta[property="og:title"]', 'content', t.meta.ogTitle);
  setAttr('meta[property="og:description"]', 'content', t.meta.ogDescription);

  setText('.nav-links li:nth-child(1) a', t.nav.about);
  setText('.nav-links li:nth-child(2) a', t.nav.skills);
  setText('.nav-links li:nth-child(3) a', t.nav.experience);
  setText('.nav-links li:nth-child(4) a', t.nav.projects);
  setText('.nav-links li:nth-child(5) a', t.nav.interests);
  setText('.nav-links li:nth-child(6) a', t.nav.contact);

  setHtml('.hero-badge', t.hero.badge);
  setHtml('.hero-subtext', t.hero.subtext);
  setHtml('.hero-actions .btn.btn-primary', t.hero.ctaWork);
  setHtml('.hero-actions .btn.btn-outline', t.hero.ctaContact);
  setHtml('.hero-id-role', t.hero.idRole);
  setText('.hero-fact-card:nth-child(1) .fact-label', t.hero.factExperience);
  setText('.hero-fact-card:nth-child(2) .fact-label', t.hero.factRole);
  setText('.hero-fact-card:nth-child(3) .fact-label', t.hero.factEducation);
  setText('.hero-fact-card:nth-child(4) .fact-label', t.hero.factLocation);
  setText('.hero-fact-card:nth-child(1) .fact-value', t.hero.factExperienceValue);
  setText('.hero-fact-card:nth-child(2) .fact-value', t.hero.factRoleValue);
  setText('.hero-fact-card:nth-child(3) .fact-value', t.hero.factEducationValue);
  setText('.hero-fact-card:nth-child(4) .fact-value', t.hero.factLocationValue);
  setText('.hero-scroll-text', t.hero.scroll);

  setText('#about .section-label', t.about.label);
  setHtml('#about .section-title', t.about.title);
  setHtml('#about .about-text p:nth-of-type(1)', t.about.p1);
  setHtml('#about .about-text p:nth-of-type(2)', t.about.p2);
  setHtml('#about .about-text p:nth-of-type(3)', t.about.p3);
  setText('#about .highlight-item:nth-child(1) strong', t.about.eduTitle);
  setHtml('#about .highlight-item:nth-child(1) span', t.about.eduOrg);
  setText('#about .highlight-item:nth-child(2) strong', t.about.workTitle);
  setHtml('#about .highlight-item:nth-child(2) span', t.about.workOrg);
  setText('#about .highlight-item:nth-child(3) strong', t.about.locationTitle);
  setHtml('#about .highlight-item:nth-child(3) span', t.about.locationCountry);

  setText('#skills .section-label', t.skills.label);
  setHtml('#skills .section-title', t.skills.title);
  setText('#skills .section-subtitle', t.skills.subtitle);
  setHtml('#skills .skill-category:nth-child(1) h3', t.skills.cat1);
  setHtml('#skills .skill-category:nth-child(2) h3', t.skills.cat2);
  setHtml('#skills .skill-category:nth-child(3) h3', t.skills.cat3);
  setHtml('#skills .skill-category:nth-child(4) h3', t.skills.cat4);

  setText('#experience .section-label', t.experience.label);
  setHtml('#experience .section-title', t.experience.title);
  setText('#experience .section-subtitle', t.experience.subtitle);
  setText('#experience .timeline-item:nth-child(1) .timeline-title', t.experience.job1Title);
  setText('#experience .timeline-item:nth-child(1) .timeline-date', t.experience.job1Date);
  setText('#experience .timeline-item:nth-child(1) .timeline-desc', t.experience.job1Desc);
  setTextList('#experience .timeline-item:nth-child(1) .timeline-tags .tag', t.experience.job1Tags);
  setText('#experience .timeline-item:nth-child(2) .timeline-title', t.experience.job2Title);
  setText('#experience .timeline-item:nth-child(2) .timeline-desc', t.experience.job2Desc);
  setTextList('#experience .timeline-item:nth-child(2) .timeline-tags .tag', t.experience.job2Tags);
  setText('#experience .timeline-item:nth-child(3) .timeline-title', t.experience.job3Title);
  setText('#experience .timeline-item:nth-child(3) .timeline-desc', t.experience.job3Desc);
  setTextList('#experience .timeline-item:nth-child(3) .timeline-tags .tag', t.experience.job3Tags);

  setText('#projects .section-label', t.projects.label);
  setHtml('#projects .section-title', t.projects.title);
  setText('#projects .section-subtitle', t.projects.subtitle);
  setText('#projects .project-label', t.projects.projectLabel);
  setText('#projects .project-title', t.projects.projectTitle);
  setHtml('#projects .project-desc:nth-of-type(1)', t.projects.projectDesc1);
  setHtml('#projects .project-desc:nth-of-type(2)', t.projects.projectDesc2);

  setText('#interests .section-label', t.interests.label);
  setHtml('#interests .section-title', t.interests.title);
  setText('#interests .section-subtitle', t.interests.subtitle);
  setHtml('#interests .interest-card:nth-child(1) h3', t.interests.card1Title);
  setText('#interests .interest-card:nth-child(1) p', t.interests.card1Desc);
  setHtml('#interests .interest-card:nth-child(2) h3', t.interests.card2Title);
  setText('#interests .interest-card:nth-child(2) p', t.interests.card2Desc);
  setText('#interests .interest-card:nth-child(3) h3', t.interests.card3Title);
  setText('#interests .interest-card:nth-child(3) p', t.interests.card3Desc);
  setText('#interests .interest-card:nth-child(4) h3', t.interests.card4Title);
  setText('#interests .interest-card:nth-child(4) p', t.interests.card4Desc);

  setText('#contact .section-label', t.contact.label);
  setHtml('#contact .section-title', t.contact.title);
  setText('#contact .section-subtitle', t.contact.subtitle);
  setText('#contact .contact-ping-line .t-string', t.contact.pingFlag);
  setHtml('#contact .contact-ping-response', t.contact.pingResponse);
  setHtml('#contact .btn.btn-primary', t.contact.cta);

  setHtml('footer p:nth-of-type(1)', t.footer.line1);
  setHtml('footer p:nth-of-type(2)', '&copy; <span id="year"></span> ' + t.footer.rights);

  setAttr('.navbar', 'aria-label', t.labels.mainNav);
  setAttr('.hamburger', 'aria-label', t.labels.menuToggle);

  if (langToggle) {
    langToggle.textContent = lang.toUpperCase();
    langToggle.setAttribute('aria-label', t.labels.switchTo);
    langToggle.setAttribute('title', t.labels.switchTo);
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  currentRoles = ROLE_SETS[lang] || ROLE_SETS.en;
  resetTypingEffect();

  if (savePreference) {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  }
}

function initializeLanguageSwitcher() {
  const initialLanguage = getInitialLanguage();
  applyLanguage(initialLanguage, false);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const nextLanguage = document.documentElement.lang === 'id' ? 'en' : 'id';
      applyLanguage(nextLanguage);
    });
  }
}

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

initializeLanguageSwitcher();

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
    'Backend Engineer',
    'Heritage Digitizer',
    'Card Game Collector',
    'Public Systems Builder',
    'Anime Fan'
  ],
  id: [
    'Backend Engineer',
    'Spesialis Digitalisasi Arsip',
    'Kolektor Trading Card Game',
    'Pengembang Sistem Layanan Publik',
    'Penggemar Anime'
  ]
};

const TRANSLATIONS = {
  en: {
    meta: {
      title: 'Melky Hermansyah - Backend Engineer & Portfolio',
      description: 'Melky Hermansyah - Backend Engineer, Public Administration Systems Specialist, and Historical Digitalization enthusiast based in Banjarmasin, Indonesia.',
      ogTitle: 'Melky Hermansyah - Backend Engineer & Public Systems Specialist',
      ogDescription: 'Portfolio of Melky Hermansyah - Backend Engineering, Public Administration Systems, and Historical Digitalization.'
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
      badge: 'Backend - History - Banjarmasin',
      subtext: '<i class="fas fa-map-marker-alt"></i> S.Kom &middot; Universitas Lambung Mangkurat &middot; Banjarmasin, Indonesia',
      ctaWork: 'View My Work <i class="fas fa-arrow-right"></i>',
      ctaContact: 'Get In Touch <i class="fas fa-arrow-right"></i>',
      statYears: 'Years Experience',
      statSkills: 'Tech Skills',
      scroll: 'scroll'
    },
    about: {
      label: 'About Me',
      title: 'Building Systems That <span class="gradient-text">Matter</span>',
      p1: 'I\'m <strong>Melky Hermansyah</strong>, a Computer Science graduate (S.Kom) from Universitas Lambung Mangkurat, currently working as Staff at <strong>Disbudporapar Kota Banjarmasin</strong>, the city\'s department for culture, youth, sports, and tourism.',
      p2: 'Most of my work is backend engineering: building systems for government offices and helping digitize historical records that used to just sit in old file cabinets. It\'s the kind of work that directly affects how public services run, which I find more meaningful than most.',
      p3: 'I care a lot about clean, logical systems. If the data model doesn\'t make sense or the logic is convoluted, I\'ll fix it before moving on. Maintainable code saves everyone time later.',
      eduTitle: 'S.Kom - Computer Science',
      eduOrg: 'Universitas Lambung Mangkurat (ULM)',
      workTitle: 'Staff - Disbudporapar',
      workOrg: 'Kota Banjarmasin &middot; Current',
      locationTitle: 'Banjarmasin, South Kalimantan',
      locationCountry: 'Indonesia'
    },
    skills: {
      label: 'Tech Stack',
      title: 'Skills &amp; <span class="gradient-text">Technologies</span>',
      subtitle: 'Tools I actually use regularly. Not just things I\'ve touched once.',
      cat1: 'Programming Languages',
      cat2: 'Databases',
      cat3: 'Design &amp; UI/UX',
      cat4: 'Tools &amp; Platforms'
    },
    experience: {
      label: 'Career',
      title: 'Work <span class="gradient-text">Experience</span>',
      subtitle: 'From intern to government systems. Here\'s how it went.',
      job1Title: 'Professional Staff',
      job1Date: '2022 - Present',
      job1Desc: 'Managing administrative systems and digital information related to cultural heritage and history at Banjarmasin\'s Department of Culture, Youth, Sports, and Tourism. Responsible for digitizing historical records, coordinating departmental data workflows, and maintaining information systems used across the institution.',
      job1Tags: ['Administrative Systems', 'Historical Digitalization', 'Data Management', 'Public Administration'],
      job2Title: 'Programming Intern',
      job2Desc: 'Conducted debugging and quality assurance on medical device software systems. Performed structured analysis of test data and contributed to research on software modification for medical calibration equipment. Gained hands-on experience in safety-critical software environments.',
      job2Tags: ['Debugging', 'Software QA', 'Data Analysis', 'Medical Systems'],
      job3Title: 'Programming Intern',
      job3Desc: 'Developed a full-featured Point-of-Sale (POS) and sales management application using Java and PHP. Designed and managed relational databases to support inventory tracking, sales reporting, and customer management. Delivered a working system deployed in-house for day-to-day business operations.',
      job3Tags: ['Java', 'PHP', 'POS System', 'Database Design', 'MySQL']
    },
    projects: {
      label: 'Portfolio',
      title: 'Featured <span class="gradient-text">Project</span>',
      subtitle: 'A system I built from scratch that I\'m genuinely proud of.',
      projectLabel: 'Featured Project',
      projectTitle: 'Automated Accounting POS System',
      projectDesc1: 'An integrated Point-of-Sale engine that automatically journals every sales transaction into a full <strong>double-entry accounting system</strong> in real-time. The system eliminates manual bookkeeping by directly mapping each POS event (sales, returns, payments) into corresponding ledger entries, producing accurate and auditable financial records instantly.',
      projectDesc2: 'Built to serve small-to-medium businesses that need transparent, auditable financials without the overhead of dedicated accounting staff.'
    },
    interests: {
      label: 'Personal',
      title: 'Interests &amp; <span class="gradient-text">Hobbies</span>',
      subtitle: 'What I do when I\'m not staring at a terminal.',
      card1Title: 'Bitcoin &amp; Crypto',
      card1Desc: 'Following Bitcoin and crypto. Less about trading, more about understanding how the technology and the underlying financial systems actually work.',
      card2Title: 'Trading Card Games',
      card2Desc: 'Collecting and playing Pokemon TCG and One Piece TCG. The deck-building part is where most of the fun is. Figuring out the right strategy before a match.',
      card3Title: 'Anime',
      card3Desc: 'Not a hardcore viewer. I just appreciate good storytelling. One Piece and Jujutsu Kaisen are favorites because the writing actually holds up.',
      card4Title: 'Outdoor Activities',
      card4Desc: 'Getting outside when I can. Hiking, walking around, anything that gets me away from a screen for a bit.'
    },
    contact: {
      label: 'Contact',
      title: 'Let\'s <span class="gradient-text">Connect</span>',
      subtitle: 'Have a project, a question, or just want to talk shop? Feel free to reach out.',
      pingFlag: 'collaboration',
      pingResponse: '<span class="t-success">✓</span> Response time: fast. Ready to talk.',
      cta: 'Send Me a Message <i class="fas fa-arrow-right"></i>'
    },
    footer: {
      line1: 'Designed &amp; Built by <span>Melky Hermansyah</span> &middot; S.Kom &middot; <a href="mailto:melkyherman29@gmail.com">melkyherman29@gmail.com</a>',
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
      title: 'Melky Hermansyah - Backend Engineer & Portofolio',
      description: 'Melky Hermansyah - Backend Engineer yang berfokus pada sistem administrasi publik dan digitalisasi arsip sejarah di Banjarmasin, Indonesia.',
      ogTitle: 'Melky Hermansyah - Backend Engineer & Spesialis Sistem Publik',
      ogDescription: 'Portofolio Melky Hermansyah - Backend engineering, pengembangan sistem administrasi publik, dan digitalisasi arsip sejarah.'
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
      badge: 'Backend - Sejarah - Banjarmasin',
      subtext: '<i class="fas fa-map-marker-alt"></i> S.Kom &middot; Universitas Lambung Mangkurat &middot; Banjarmasin, Indonesia',
      ctaWork: 'Lihat Karya Saya <i class="fas fa-arrow-right"></i>',
      ctaContact: 'Hubungi Saya <i class="fas fa-arrow-right"></i>',
      statYears: 'Tahun Pengalaman',
      statSkills: 'Keahlian Teknologi',
      scroll: 'gulir'
    },
    about: {
      label: 'Tentang Saya',
      title: 'Membangun Sistem yang <span class="gradient-text">Bermakna</span>',
      p1: 'Saya <strong>Melky Hermansyah</strong>, lulusan Ilmu Komputer (S.Kom) dari Universitas Lambung Mangkurat. Saat ini saya bekerja sebagai staf di <strong>Disbudporapar Kota Banjarmasin</strong>, dinas yang menangani bidang budaya, kepemudaan, olahraga, dan pariwisata.',
      p2: 'Fokus utama saya adalah backend engineering: membangun sistem untuk kebutuhan instansi pemerintah sekaligus mendukung digitalisasi arsip sejarah yang sebelumnya tersimpan dalam berkas fisik. Bagi saya, pekerjaan ini penting karena berdampak langsung pada kualitas layanan publik.',
      p3: 'Saya terbiasa bekerja dengan pendekatan yang rapi dan terstruktur. Jika model data belum tepat atau alur logika masih rumit, saya akan menyederhanakannya terlebih dahulu agar sistem lebih stabil, mudah dipelihara, dan siap dikembangkan.',
      eduTitle: 'S.Kom - Ilmu Komputer',
      eduOrg: 'Universitas Lambung Mangkurat (ULM)',
      workTitle: 'Staf - Disbudporapar',
      workOrg: 'Kota Banjarmasin &middot; Sekarang',
      locationTitle: 'Banjarmasin, Kalimantan Selatan',
      locationCountry: 'Indonesia'
    },
    skills: {
      label: 'Tech Stack',
      title: 'Keahlian &amp; <span class="gradient-text">Teknologi</span>',
      subtitle: 'Perangkat dan teknologi yang saya gunakan secara konsisten dalam pekerjaan.',
      cat1: 'Bahasa Pemrograman',
      cat2: 'Basis Data',
      cat3: 'Desain &amp; UI/UX',
      cat4: 'Perangkat &amp; Platform'
    },
    experience: {
      label: 'Karier',
      title: 'Pengalaman <span class="gradient-text">Kerja</span>',
      subtitle: 'Perjalanan karier saya, dari masa magang hingga menangani sistem di sektor pemerintahan.',
      job1Title: 'Staf Profesional',
      job1Date: '2022 - Sekarang',
      job1Desc: 'Mengelola sistem administrasi serta informasi digital terkait warisan budaya dan sejarah di Disbudporapar Kota Banjarmasin. Tanggung jawab saya mencakup digitalisasi arsip sejarah, koordinasi alur data lintas bagian, dan pemeliharaan sistem informasi yang digunakan di lingkungan instansi.',
      job1Tags: ['Sistem Administrasi', 'Digitalisasi Sejarah', 'Manajemen Data', 'Administrasi Publik'],
      job2Title: 'Magang Programmer',
      job2Desc: 'Menangani debugging dan quality assurance pada perangkat lunak alat kesehatan. Saya juga melakukan analisis terstruktur terhadap data pengujian serta berkontribusi dalam riset modifikasi perangkat lunak untuk alat kalibrasi medis, sehingga terbiasa bekerja di lingkungan yang sensitif terhadap aspek keselamatan.',
      job2Tags: ['Debugging', 'QA Perangkat Lunak', 'Analisis Data', 'Sistem Medis'],
      job3Title: 'Magang Programmer',
      job3Desc: 'Mengembangkan aplikasi Point-of-Sale (POS) dan manajemen penjualan menggunakan Java dan PHP. Saya mendesain serta mengelola basis data relasional untuk kebutuhan stok, laporan penjualan, dan manajemen pelanggan. Sistem yang dibangun kemudian digunakan untuk operasional harian internal.',
      job3Tags: ['Java', 'PHP', 'Sistem POS', 'Desain Basis Data', 'MySQL']
    },
    projects: {
      label: 'Portofolio',
      title: 'Proyek <span class="gradient-text">Unggulan</span>',
      subtitle: 'Sistem yang saya bangun dari nol dan mewakili pendekatan kerja saya.',
      projectLabel: 'Proyek Unggulan',
      projectTitle: 'Sistem POS Akuntansi Otomatis',
      projectDesc1: 'Sistem Point-of-Sale terintegrasi yang secara otomatis menjurnal setiap transaksi penjualan ke dalam <strong>sistem akuntansi double-entry</strong> secara real-time. Setiap event POS (penjualan, retur, pembayaran) dipetakan langsung ke entri buku besar yang sesuai sehingga catatan keuangan menjadi lebih akurat dan mudah diaudit.',
      projectDesc2: 'Solusi ini dirancang untuk UMKM yang membutuhkan laporan keuangan transparan dan siap audit tanpa ketergantungan pada tim akuntansi khusus.'
    },
    interests: {
      label: 'Personal',
      title: 'Minat &amp; <span class="gradient-text">Hobi</span>',
      subtitle: 'Aktivitas yang saya nikmati di luar pekerjaan.',
      card1Title: 'Bitcoin &amp; Kripto',
      card1Desc: 'Saya mengikuti perkembangan Bitcoin dan kripto, bukan hanya dari sisi trading, tetapi juga dari aspek teknologi serta mekanisme finansial di baliknya.',
      card2Title: 'Trading Card Game',
      card2Desc: 'Saya mengoleksi dan bermain Pokemon TCG serta One Piece TCG. Bagian yang paling saya nikmati adalah menyusun deck dan merancang strategi sebelum bertanding.',
      card3Title: 'Anime',
      card3Desc: 'Saya menyukai anime dengan alur cerita yang kuat. One Piece dan Jujutsu Kaisen menjadi favorit karena kualitas penulisannya konsisten.',
      card4Title: 'Aktivitas Outdoor',
      card4Desc: 'Saat ada waktu luang, saya menikmati aktivitas luar ruangan seperti hiking dan jalan santai untuk menjaga keseimbangan dari rutinitas di depan layar.'
    },
    contact: {
      label: 'Kontak',
      title: 'Mari <span class="gradient-text">Terhubung</span>',
      subtitle: 'Jika Anda memiliki proyek, pertanyaan, atau ingin berdiskusi teknis, saya terbuka untuk terhubung.',
      pingFlag: 'kolaborasi',
      pingResponse: '<span class="t-success">✓</span> Respons cepat. Siap berdiskusi.',
      cta: 'Kirim Pesan <i class="fas fa-arrow-right"></i>'
    },
    footer: {
      line1: 'Dirancang &amp; Dibangun oleh <span>Melky Hermansyah</span> &middot; S.Kom &middot; <a href="mailto:melkyherman29@gmail.com">melkyherman29@gmail.com</a>',
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

  setText('.hero-badge', t.hero.badge);
  setHtml('.hero-subtext', t.hero.subtext);
  setHtml('.hero-actions .btn.btn-primary', t.hero.ctaWork);
  setHtml('.hero-actions .btn.btn-outline', t.hero.ctaContact);
  setText('.hero-stat-card.card-1 .stat-label', t.hero.statYears);
  setText('.hero-stat-card.card-2 .stat-label', t.hero.statSkills);
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

initializeLanguageSwitcher();

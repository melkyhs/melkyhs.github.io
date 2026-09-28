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
    'Operations & Data Specialist',
    'Inventory & Stock Tracking',
    'Field Data Verification',
    'Administrative Reporting',
    'Computer Science Graduate'
  ],
  id: [
    'Spesialis Operasional & Data',
    'Manajemen Inventaris & Stok',
    'Verifikasi Data Lapangan',
    'Pelaporan Administrasi',
    'Lulusan Ilmu Komputer'
  ]
};

const TRANSLATIONS = {
  en: {
    meta: {
      title: 'Melky Hermansyah - Operations & Data Specialist Portfolio',
      description: 'Operations & Data Specialist with expertise in operational data entry, inventory management, and field data verification based in Banjarmasin, Indonesia.',
      ogTitle: 'Melky Hermansyah - Operations & Data Specialist Portfolio',
      ogDescription: 'Portfolio of Melky Hermansyah - Operations & Data Specialist, Inventory Management, Field Data Verification, and Administrative Reporting.'
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Education',
      interests: 'Certifications',
      contact: 'Contact'
    },
    hero: {
      badge: '<span class="dot"></span>Operations &middot; Data Specialist &middot; Inventory Management',
      subtext: '<i class="fas fa-map-marker-alt"></i> S.Kom &middot; Universitas Lambung Mangkurat &middot; Banjarmasin, Kalimantan Selatan',
      ctaWork: 'View Profile Details <i class="fas fa-arrow-right"></i>',
      ctaContact: 'Contact Me <i class="fas fa-arrow-right"></i>',
      cvFile: 'assets/Melky_Hermansyah_CV.pdf',
      cvFilename: 'Melky_Hermansyah_CV.pdf',
      cvDownloadText: 'Download CV <i class="fas fa-download"></i>',
      idRole: 'Operations &middot; Data Specialist',
      factExperience: 'Experience',
      factRole: 'Certification',
      factEducation: 'Education',
      factLocation: 'Location',
      factExperienceValue: '4 Work Experiences',
      factRoleValue: 'MS Office Certified',
      factEducationValue: 'S1 Ilmu Komputer',
      factLocationValue: 'Banjarmasin, Indonesia',
      scroll: 'scroll'
    },
    about: {
      label: 'Summary',
      title: 'Professional <span class="gradient-text">Profile</span>',
      p1: 'I am <strong>Melky Hermansyah, S.Kom.</strong>, a detail-oriented Operations & Data Specialist with a Bachelor\'s degree in Computer Science from Universitas Lambung Mangkurat, combining technical IT understanding with structured operational execution.',
      p2: 'I bring a solid track record in operational inventory recording, high-accuracy field data verification with BPS (Central Bureau of Statistics), and public sector administrative management.',
      p3: 'Proficient in Microsoft Office, advanced spreadsheet reporting, and digital data entry under strict Standard Operating Procedures (SOP). An effective communicator and proactive coordinator, equipped to handle stock tracking, daily reconciliation reporting, and operational support across fast-paced, dynamic work environments.',
      eduTitle: 'Bachelor of Computer Science',
      eduOrg: 'Universitas Lambung Mangkurat \u2014 Graduation: Aug 2026',
      workTitle: 'Fluent English & Bahasa Indonesia',
      workOrg: 'Professional Communication Skills',
      locationTitle: 'Banjarmasin, Indonesia',
      locationCountry: 'Indonesia'
    },
    skills: {
      label: 'Skills',
      title: 'Core <span class="gradient-text">Competencies</span>',
      subtitle: 'Core competencies aligned with operations, data management, and administrative expertise.',
      cat1: 'Operations & Data',
      cat2: 'Tools & Software',
      cat3: 'Communication & Coordination'
    },
    experience: {
      label: 'WORK EXPERIENCE',
      title: 'Work <span class="gradient-text">Experience</span>',
      subtitle: 'Professional experience across public sector administration, field statistics, inventory management, and software QA.',
      job1Title: 'Operational & Administrative Staff / Museum Educator',
      job1Date: 'Jan 2024 \u2013 Present',
      job1Company: 'Department of Culture, Youth, Sports, and Tourism (Disbudporapar Kota Banjarmasin)',
      job1Points: [
        'Administered daily operational logs, official correspondence, and administrative documentation following local government SOPs.',
        'Managed spatial layout planning, logistics preparation, and technical administration for municipal cultural events and site exhibitions.',
        'Handled public inquiries, operational visitor guiding, and stakeholder feedback to support smooth daily site activities.',
        'Coordinated with external agencies and local community representatives to ensure seamless execution of official programs.'
      ],
      job2Title: 'Field Statistics Partner (PPL - 2026 Economic Census)',
      job2Date: 'May 2026 \u2013 Aug 2026',
      job2Company: 'Badan Pusat Statistik (BPS)',
      job2Points: [
        'Conducted field data collection and business mapping across designated operational zones under tight daily completion targets.',
        'Input, verified, and reconciled field statistics using CAPI (Computer-Assisted Personal Interviewing) mobile applications with zero-error standards.',
        'Performed direct interviews with business owners and site leaders to validate socio-economic data accuracy.',
        'Resolved data entry discrepancies on-site through systematic cross-checking and structured reporting.'
      ],
      job3Title: 'Point-of-Sale & Inventory Systems Administrator',
      job3Date: 'Jan 2020 \u2013 Dec 2020',
      job3Company: 'UD. Borneo Ban',
      job3Points: [
        'Recorded and monitored daily inventory movements, including incoming stock, outgoing spare parts, and stock availability logs.',
        'Executed monthly inventory data reconciliation to ensure zero discrepancy between physical stock and system records.',
        'Standardized basic transaction data entry procedures to support efficient supply chain tracking.'
      ],
      job4Title: 'Software Quality Assurance & Testing Intern',
      job4Date: 'Jan 2022 \u2013 Mar 2022',
      job4Company: 'LPFK (Loka Pengamanan Fasilitas Kesehatan)',
      job4Points: [
        'Executed systematic debugging and functional software testing for medical equipment calibration tracking systems.',
        'Documented testing steps, bug reports, and operational workflows to ensure software compliance with technical standards.'
      ]
    },
    projects: {
      label: 'Education',
      title: 'Academic <span class="gradient-text">Background</span>',
      subtitle: 'Formal education and relevant academic coursework.',
      projectLabel: 'Education',
      projectTitle: 'Universitas Lambung Mangkurat',
      projectDesc1: 'Bachelor of Computer Science (S1 Ilmu Komputer), South Kalimantan, Indonesia. Graduation: <strong>August 2026</strong>.',
      projectDesc2: 'Relevant Coursework: Database Systems, Information Systems, Software Engineering, Data Structures, and Applied Logic.'
    },
    interests: {
      label: 'Credentials',
      title: 'Certifications &amp; <span class="gradient-text">Achievements</span>',
      subtitle: 'Verified professional certifications and achievements.',
      card1Title: 'Certified Microsoft Junior Office Specialist',
      card1Desc: 'Professional certification in Microsoft Office applications (Word, Excel, PowerPoint).',
      card2Title: '2nd Place \u2014 National English Public Speaking',
      card2Desc: 'National Online English Public Speaking Competition by Briton English Education.',
      card3Title: 'Language Proficiency',
      card3Desc: 'Fluent English & Bahasa Indonesia \u2014 strong communication skills for multi-stakeholder coordination.'
    },
    contact: {
      label: 'Contact',
      title: 'Let\'s <span class="gradient-text">Connect</span>',
      subtitle: 'Reach me directly for professional opportunities in operations, data management, and administration.',
      pingFlag: '"available_for_collaboration"',
      pingResponse: '<span class="t-success">\u2713</span> Verified profile active. Open for collaboration and professional opportunities.',
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
      title: 'Melky Hermansyah - Portofolio Spesialis Operasional & Data',
      description: 'Spesialis Operasional & Data dengan keahlian dalam entri data operasional, manajemen inventaris, dan verifikasi data lapangan di Banjarmasin, Indonesia.',
      ogTitle: 'Melky Hermansyah - Portofolio Spesialis Operasional & Data',
      ogDescription: 'Portofolio Melky Hermansyah - Spesialis Operasional & Data, Manajemen Inventaris, Verifikasi Data Lapangan, dan Pelaporan Administrasi.'
    },
    nav: {
      about: 'Tentang',
      skills: 'Keahlian',
      experience: 'Pengalaman',
      projects: 'Pendidikan',
      interests: 'Sertifikasi',
      contact: 'Kontak'
    },
    hero: {
      badge: '<span class="dot"></span>Operasional &middot; Spesialis Data &middot; Manajemen Inventaris',
      subtext: '<i class="fas fa-map-marker-alt"></i> S.Kom &middot; Universitas Lambung Mangkurat &middot; Banjarmasin, Kalimantan Selatan',
      ctaWork: 'Lihat Detail Profil <i class="fas fa-arrow-right"></i>',
      ctaContact: 'Hubungi Saya <i class="fas fa-arrow-right"></i>',
      cvFile: 'assets/CV_Melky_Hermansyah_ID.pdf',
      cvFilename: 'CV_Melky_Hermansyah_ID.pdf',
      cvDownloadText: 'Unduh CV <i class="fas fa-download"></i>',
      idRole: 'Operasional &middot; Spesialis Data',
      factExperience: 'Pengalaman',
      factRole: 'Sertifikasi',
      factEducation: 'Pendidikan',
      factLocation: 'Lokasi',
      factExperienceValue: '4 Pengalaman Kerja',
      factRoleValue: 'Tersertifikasi MS Office',
      factEducationValue: 'S.Kom - Ilmu Komputer',
      factLocationValue: 'Banjarmasin, Indonesia',
      scroll: 'gulir'
    },
    about: {
      label: 'Ringkasan',
      title: 'Profil <span class="gradient-text">Profesional</span>',
      p1: 'Saya <strong>Melky Hermansyah, S.Kom.</strong>, lulusan S1 Ilmu Komputer Universitas Lambung Mangkurat dengan spesialisasi di bidang <em>operations</em> dan pengelolaan data. Saya terbiasa bekerja dengan ketelitian tinggi (<em>detail-oriented</em>), memadukan pemahaman IT dengan eksekusi operasional yang terstruktur.',
      p2: 'Memiliki pengalaman nyata dalam pencatatan inventaris, verifikasi data lapangan berakurasi tinggi bersama BPS (Badan Pusat Statistik), serta tata kelola administrasi di instansi publik.',
      p3: 'Mahir mengoperasikan Microsoft Office, pelaporan berbasis <em>spreadsheet</em> (Excel), dan sistem <em>data entry</em> yang patuh pada SOP ketat. Didukung kemampuan komunikasi yang baik dan koordinasi lintas tim, saya siap menangani pemantauan stok (<em>stock tracking</em>), rekonsiliasi data harian, serta mendukung alur operasional di lingkungan kerja yang dinamis.',
      eduTitle: 'Sarjana Ilmu Komputer',
      eduOrg: 'Universitas Lambung Mangkurat \u2014 Wisuda: Agustus 2026',
      workTitle: 'Fasih Bahasa Inggris & Indonesia',
      workOrg: 'Kemampuan Komunikasi Profesional',
      locationTitle: 'Banjarmasin, Indonesia',
      locationCountry: 'Indonesia'
    },
    skills: {
      label: 'Keahlian',
      title: 'Kompetensi <span class="gradient-text">Inti</span>',
      subtitle: 'Kompetensi inti yang selaras dengan operasional, manajemen data, dan keahlian administrasi.',
      cat1: 'Operasional & Data',
      cat2: 'Tools & Software',
      cat3: 'Komunikasi & Koordinasi'
    },
    experience: {
      label: 'PENGALAMAN KERJA',
      title: 'Pengalaman <span class="gradient-text">Kerja</span>',
      subtitle: 'Pengalaman profesional di administrasi sektor publik, statistik lapangan, manajemen inventaris, dan QA perangkat lunak.',
      job1Title: 'Staf Operasional & Administrasi / Edukator Museum',
      job1Date: 'Jan 2024 \u2013 Sekarang',
      job1Company: 'Dinas Kebudayaan, Kepemudaan, Olahraga, dan Pariwisata (Disbudporapar Kota Banjarmasin)',
      job1Points: [
        'Mengelola log operasional harian, surat-menyurat resmi, dan dokumentasi administrasi sesuai SOP pemerintah daerah.',
        'Mengelola perencanaan tata letak ruang, persiapan logistik, dan administrasi teknis untuk acara budaya dan pameran kota.',
        'Menangani pertanyaan publik, pemanduan pengunjung operasional, dan umpan balik stakeholder untuk mendukung kelancaran aktivitas harian.',
        'Berkoordinasi dengan instansi eksternal dan perwakilan masyarakat lokal untuk memastikan kelancaran pelaksanaan program resmi.'
      ],
      job2Title: 'Mitra Statistik Lapangan (PPL - Sensus Ekonomi 2026)',
      job2Date: 'Mei 2026 \u2013 Agu 2026',
      job2Company: 'Badan Pusat Statistik (BPS)',
      job2Points: [
        'Melakukan pengumpulan data lapangan dan pemetaan usaha di zona operasional yang ditentukan dengan target penyelesaian harian yang ketat.',
        'Menginput, memverifikasi, dan merekonsiliasi statistik lapangan menggunakan aplikasi CAPI (Computer-Assisted Personal Interviewing) dengan standar zero-error.',
        'Melakukan wawancara langsung dengan pemilik usaha dan pemimpin lapangan untuk memvalidasi akurasi data sosio-ekonomi.',
        'Menyelesaikan ketidaksesuaian entri data di lapangan melalui pengecekan silang sistematis dan pelaporan terstruktur.'
      ],
      job3Title: 'Administrator Sistem POS & Inventaris',
      job3Date: 'Jan 2020 \u2013 Des 2020',
      job3Company: 'UD. Borneo Ban',
      job3Points: [
        'Mencatat dan memantau pergerakan inventaris harian, termasuk stok masuk, suku cadang keluar, dan log ketersediaan stok.',
        'Melakukan rekonsiliasi data inventaris bulanan untuk memastikan ketidaksesuaian nol antara stok fisik dan catatan sistem.',
        'Menstandarisasi prosedur entri data transaksi dasar untuk mendukung pelacakan rantai pasok yang efisien.'
      ],
      job4Title: 'Magang Quality Assurance & Testing Perangkat Lunak',
      job4Date: 'Jan 2022 \u2013 Mar 2022',
      job4Company: 'LPFK (Loka Pengamanan Fasilitas Kesehatan)',
      job4Points: [
        'Melakukan debugging sistematis dan pengujian fungsional perangkat lunak untuk sistem pelacakan kalibrasi peralatan medis.',
        'Mendokumentasikan langkah pengujian, laporan bug, dan alur kerja operasional untuk memastikan kepatuhan perangkat lunak terhadap standar teknis.'
      ]
    },
    projects: {
      label: 'Pendidikan',
      title: 'Latar Belakang <span class="gradient-text">Akademik</span>',
      subtitle: 'Pendidikan formal dan mata kuliah akademik yang relevan.',
      projectLabel: 'Pendidikan',
      projectTitle: 'Universitas Lambung Mangkurat',
      projectDesc1: 'Sarjana Ilmu Komputer (S1 Ilmu Komputer), Kalimantan Selatan, Indonesia. Wisuda: <strong>Agustus 2026</strong>.',
      projectDesc2: 'Mata Kuliah Relevan: Sistem Basis Data, Sistem Informasi, Rekayasa Perangkat Lunak, Struktur Data, dan Logika Terapan.'
    },
    interests: {
      label: 'Kredensial',
      title: 'Sertifikasi &amp; <span class="gradient-text">Prestasi</span>',
      subtitle: 'Sertifikasi profesional dan prestasi terverifikasi.',
      card1Title: 'Certified Microsoft Junior Office Specialist',
      card1Desc: 'Sertifikasi profesional dalam aplikasi Microsoft Office (Word, Excel, PowerPoint).',
      card2Title: 'Juara 2 \u2014 Lomba Public Speaking Bahasa Inggris Nasional',
      card2Desc: 'Kompetisi Online Public Speaking Bahasa Inggris Nasional oleh Briton English Education.',
      card3Title: 'Kemampuan Bahasa',
      card3Desc: 'Fasih Bahasa Inggris & Bahasa Indonesia \u2014 kemampuan komunikasi yang kuat untuk koordinasi multi-stakeholder.'
    },
    contact: {
      label: 'Kontak',
      title: 'Mari <span class="gradient-text">Terhubung</span>',
      subtitle: 'Hubungi saya untuk peluang profesional di operasional, manajemen data, dan administrasi.',
      pingFlag: '"siap_berkolaborasi"',
      pingResponse: '<span class="t-success">\u2713</span> Profil terverifikasi aktif. Terbuka untuk kolaborasi dan peluang profesional.',
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
  const contactBtn = document.querySelector('.hero-actions a[href="#contact"]');
  if (contactBtn) contactBtn.innerHTML = t.hero.ctaContact;
  const cvBtn = document.getElementById('cvDownloadBtn') || document.querySelector('.hero-actions a[download]');
  if (cvBtn && t.hero.cvFile) {
    cvBtn.setAttribute('href', t.hero.cvFile);
    cvBtn.setAttribute('download', t.hero.cvFilename || 'CV_Melky_Hermansyah.pdf');
    cvBtn.innerHTML = t.hero.cvDownloadText;
  }
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

  setText('#experience .section-label', t.experience.label);
  setHtml('#experience .section-title', t.experience.title);
  setText('#experience .section-subtitle', t.experience.subtitle);
  setText('#experience .timeline-item:nth-child(1) .timeline-title', t.experience.job1Title);
  setText('#experience .timeline-item:nth-child(1) .timeline-date', t.experience.job1Date);
  setTextList('#experience .timeline-item:nth-child(1) .timeline-points li', t.experience.job1Points);
  if (t.experience.job1Company) setText('#experience .timeline-item:nth-child(1) .timeline-company', t.experience.job1Company);
  setText('#experience .timeline-item:nth-child(2) .timeline-title', t.experience.job2Title);
  setText('#experience .timeline-item:nth-child(2) .timeline-date', t.experience.job2Date);
  setTextList('#experience .timeline-item:nth-child(2) .timeline-points li', t.experience.job2Points);
  if (t.experience.job2Company) setText('#experience .timeline-item:nth-child(2) .timeline-company', t.experience.job2Company);
  setText('#experience .timeline-item:nth-child(3) .timeline-title', t.experience.job3Title);
  setText('#experience .timeline-item:nth-child(3) .timeline-date', t.experience.job3Date);
  setTextList('#experience .timeline-item:nth-child(3) .timeline-points li', t.experience.job3Points);
  if (t.experience.job3Company) setText('#experience .timeline-item:nth-child(3) .timeline-company', t.experience.job3Company);
  if (t.experience.job4Title) {
    setText('#experience .timeline-item:nth-child(4) .timeline-title', t.experience.job4Title);
    setText('#experience .timeline-item:nth-child(4) .timeline-date', t.experience.job4Date);
    setTextList('#experience .timeline-item:nth-child(4) .timeline-points li', t.experience.job4Points);
    if (t.experience.job4Company) setText('#experience .timeline-item:nth-child(4) .timeline-company', t.experience.job4Company);
  }

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

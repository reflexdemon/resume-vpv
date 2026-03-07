require('./styles.css');
const html2pdf = require('html2pdf.js');

function initNavigation() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  
  if (!toggle || !menu) return;
  
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggle.setAttribute('aria-expanded', menu.classList.contains('active'));
  });
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        menu.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
  
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  initAsideNavigation();
  initBackToTop();
}

function initAsideNavigation() {
  const asideNav = document.getElementById('aside-nav');
  if (!asideNav) return;
  
  function updateAsideNavVisibility() {
    if (window.innerWidth >= 1024) {
      asideNav.classList.add('visible');
    } else {
      asideNav.classList.remove('visible');
    }
  }
  
  updateAsideNavVisibility();
  window.addEventListener('resize', updateAsideNavVisibility);
}

function initScrollSpy() {
  const sections = document.querySelectorAll('.section');
  const asideLinks = document.querySelectorAll('.aside-nav-link');
  
  if (!sections.length || !asideLinks.length) return;
  if (!('IntersectionObserver' in window)) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        asideLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -60% 0px'
  });

  sections.forEach(section => {
    observer.observe(section);
  });
}

function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  const firstSection = document.querySelector('.section');
  
  if (!backToTopBtn || !firstSection) return;
  
  const firstSectionTop = firstSection.offsetTop;
  
  function updateBackToTopVisibility() {
    if (window.scrollY > firstSectionTop) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }
  
  window.addEventListener('scroll', updateBackToTopVisibility);
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function handleDeepLink() {
  const hash = window.location.hash.slice(1);
  if (!hash) return;
  
  const element = document.getElementById(hash);
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}

function setYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  
  const icon = toggle.querySelector('i');
  
  function updateIcon() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
  
  updateIcon();
  
  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon();
  });
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      updateIcon();
    }
  });
}

function initPdfDownload() {
  const pdfBtn = document.getElementById('pdf-download');
  if (!pdfBtn) return;
  
  pdfBtn.addEventListener('click', () => {
    document.body.classList.add('pdf-mode');
    
    const element = document.querySelector('main');
    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'resume-venkateswara-vp.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        logging: false
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait' 
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    html2pdf().set(opt).from(element).save().then(() => {
      document.body.classList.remove('pdf-mode');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollSpy();
  initTheme();
  initPdfDownload();
  handleDeepLink();
  setYear();
});

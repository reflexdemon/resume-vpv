const resumeData = require('./config/resume.json');
require('./styles.css');
require('./styles/cookie-consent.css');
require('./components/cookie-consent');
const html2pdf = require('html2pdf.js');

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderPersonalInfo() {
  const { personal } = resumeData;
  const container = document.getElementById('personal-info');
  const brand = document.getElementById('nav-brand');
  
  brand.textContent = personal.headerName;
  
  container.innerHTML = `
    <h1 class="name">${escapeHtml(personal.name)}</h1>
    <p class="title">${escapeHtml(personal.title)}</p>
    <p class="contact">
      <a href="tel:${escapeHtml(personal.phone)}" class="contact-link">
        <i class="fas fa-phone"></i> ${escapeHtml(personal.phone)}
      </a>
      <span class="separator">·</span>
      <a href="mailto:${escapeHtml(personal.email)}" class="contact-link">
        <i class="fas fa-envelope"></i> ${escapeHtml(personal.email)}
      </a>
    </p>
  `;
}

function renderSocialLinks() {
  const { personal } = resumeData;
  const container = document.getElementById('social-links');
  
  if (!personal.social) {
    container.innerHTML = '';
    return;
  }
  
  let linksHtml = '';
  
  if (personal.social.x) {
    linksHtml += `
      <a href="${escapeHtml(personal.social.x)}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Twitter">
        <i class="fab fa-twitter"></i>
      </a>
    `;
  }
  
  if (personal.social.linkedin) {
    linksHtml += `
      <a href="${escapeHtml(personal.social.linkedin)}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
    `;
  }
  
  if (personal.social.github) {
    linksHtml += `
      <a href="${escapeHtml(personal.social.github)}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
    `;
  }
  
  container.innerHTML = `<div class="social-links">${linksHtml}</div>`;
}

function renderAbout() {
  const { personal } = resumeData;
  const container = document.getElementById('about-content');
  
  container.innerHTML = `
    <p class="summary">${escapeHtml(personal.summary)}</p>
  `;
}

function renderExperience() {
  const { experience } = resumeData;
  const container = document.getElementById('experience-content');
  
  if (!experience || experience.length === 0) {
    container.innerHTML = '<p>No experience data available.</p>';
    return;
  }
  
  const experienceHtml = experience.map(exp => {
    let accomplishmentsHtml = '';
    if (exp.accomplishments && exp.accomplishments.length > 0) {
      accomplishmentsHtml = `
        <ul class="accomplishments">
          ${exp.accomplishments.map(acc => `<li>${escapeHtml(acc)}</li>`).join('')}
        </ul>
      `;
    }
    
    return `
      <article class="experience-item" id="${exp.id}">
        <h3 class="job-title">${escapeHtml(exp.title)}</h3>
        <p class="company">
          <strong>${escapeHtml(exp.company)}</strong>
          ${exp.location ? `<span class="location">${escapeHtml(exp.location)}</span>` : ''}
        </p>
        <p class="period"><i class="far fa-calendar"></i> ${escapeHtml(exp.period)}</p>
        ${exp.role ? `<p class="role">${escapeHtml(exp.role)}</p>` : ''}
        ${accomplishmentsHtml}
      </article>
    `;
  }).join('');
  
  container.innerHTML = `<div class="experience-list">${experienceHtml}</div>`;
}

function renderEducation() {
  const { education } = resumeData;
  const container = document.getElementById('education-content');
  
  if (!education || education.length === 0) {
    container.innerHTML = '<p>No education data available.</p>';
    return;
  }
  
  const educationHtml = education.map(edu => `
    <article class="education-item" id="${edu.id}">
      <h3 class="institution">${escapeHtml(edu.institution)}</h3>
      <p class="university">${escapeHtml(edu.university)}</p>
      <p class="degree">${escapeHtml(edu.degree)}</p>
      <p class="score">Score: ${escapeHtml(edu.score)}</p>
      <p class="period"><i class="far fa-calendar"></i> ${escapeHtml(edu.period)}</p>
    </article>
  `).join('');
  
  container.innerHTML = `<div class="education-list">${educationHtml}</div>`;
}

function renderSkills() {
  const { skills } = resumeData;
  const container = document.getElementById('skills-content');
  
  if (!skills || skills.length === 0) {
    container.innerHTML = '<p>No skills data available.</p>';
    return;
  }
  
  const skillIconMap = {
    'Frontend Tools & Frameworks': 'fa-laptop-code',
    'Backend Languages, Tools & Frameworks': 'fa-server',
    'Cloud': 'fa-cloud',
    'Databases': 'fa-database',
    'IDE & Editors': 'fa-code',
    'CI/CD & DevOps Tools': 'fa-cogs',
    'Workflow': 'fa-tasks',
    'AI': 'fa-laptop',
  };

  const aiToolIcons = {
    'opencode': '<svg class="skill-svg-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#6e40c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    'openspec': '<svg class="skill-svg-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>',
    'claud code': '<svg class="skill-svg-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
    'copilot': '<svg class="skill-svg-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>',
    'amazonq': '<svg class="skill-svg-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ff9900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M12 22v-9"/><path d="M2 7l10 5"/><path d="M22 7l-10 5"/></svg>',
  };
  
  const skillsHtml = skills.map(skillCategory => {
    const icon = skillIconMap[skillCategory.category] || 'fa-code';
    const itemsHtml = skillCategory.items.map(skill => {
      const skillLower = skill.toLowerCase();
      let iconClass = '';
      
      if (skillLower.includes('java')) iconClass = 'devicon-java-plain colored';
      else if (skillLower.includes('spring')) iconClass = 'devicon-spring-plain colored';
      else if (skillLower.includes('angular')) iconClass = 'devicon-angularjs-plain colored';
      else if (skillLower.includes('react')) iconClass = 'devicon-react-original colored';
      else if (skillLower.includes('vue')) iconClass = 'devicon-vuejs-plain colored';
      else if (skillLower.includes('node')) iconClass = 'devicon-nodejs-plain colored';
      else if (skillLower.includes('mongodb')) iconClass = 'devicon-mongodb-plain colored';
      else if (skillLower.includes('mysql')) iconClass = 'devicon-mysql-plain colored';
      else if (skillLower.includes('oracle')) iconClass = 'devicon-oracle-original colored';
      else if (skillLower.includes('aws')) iconClass = 'devicon-amazonwebservices-original colored';
      else if (skillLower.includes('git')) iconClass = 'devicon-git-plain colored';
      else if (skillLower.includes('jenkins')) iconClass = 'devicon-jenkins-plain colored';
      else if (skillLower.includes('docker')) iconClass = 'devicon-docker-plain colored';
      else if (skillLower.includes('html')) iconClass = 'devicon-html5-plain colored';
      else if (skillLower.includes('css')) iconClass = 'devicon-css3-plain colored';
      else if (skillLower.includes('javascript')) iconClass = 'devicon-javascript-plain colored';
      else if (skillLower.includes('android')) iconClass = 'devicon-android-plain colored';
      else if (skillLower.includes('eclipse')) iconClass = 'devicon-eclipse-plain colored';
      else if (skillLower.includes('intellij')) iconClass = 'devicon-intellij-plain colored';
      else if (skillLower.includes('vscode') || skillLower.includes('code')) iconClass = 'devicon-vscode-plain colored';
      else if (skillLower.includes('bootstrap')) iconClass = 'devicon-bootstrap-plain colored';
      else if (skillLower.includes('jquery')) iconClass = 'devicon-jquery-plain colored';
      else if (skillLower.includes('heroku')) iconClass = 'devicon-heroku-original colored';
      else if (skillLower.includes('bash')) iconClass = 'devicon-bash-plain colored';

      let svgIcon = '';
      if (aiToolIcons[skillLower]) {
        svgIcon = aiToolIcons[skillLower];
      }

      if (iconClass) {
        return `<span class="skill-item"><i class="${iconClass}"></i> ${escapeHtml(skill)}</span>`;
      }
      if (svgIcon) {
        return `<span class="skill-item">${svgIcon} ${escapeHtml(skill)}</span>`;
      }
      return `<span class="skill-item"><i class="fas fa-check"></i> ${escapeHtml(skill)}</span>`;
    }).join('');
    
    return `
      <div class="skill-category" id="${skillCategory.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}">
        <h3 class="category-title"><i class="fas ${icon}"></i> ${escapeHtml(skillCategory.category)}</h3>
        <div class="skill-items">${itemsHtml}</div>
      </div>
    `;
  }).join('');
  
  container.innerHTML = `<div class="skills-grid">${skillsHtml}</div>`;
}

function renderInterests() {
  const { interests } = resumeData;
  const container = document.getElementById('interests-content');
  
  container.innerHTML = `
    <p class="interests-text">${escapeHtml(interests)}</p>
  `;
}

function renderProjects() {
  const { projects } = resumeData;
  const container = document.getElementById('projects-content');
  
  if (!projects || projects.length === 0) {
    container.innerHTML = '<p>No projects available.</p>';
    return;
  }
  
  const projectsHtml = projects.map(project => `
    <article class="project-card" id="${project.id}">
      <h3 class="project-name">
        <a href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(project.name)}
          <i class="fas fa-external-link-alt"></i>
        </a>
      </h3>
      <p class="project-description">${escapeHtml(project.description)}</p>
      <div class="project-technologies">
        ${project.technologies.map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join('')}
      </div>
    </article>
  `).join('');
  
  container.innerHTML = `<div class="projects-grid">${projectsHtml}</div>`;
}

function renderContact() {
  const { personal } = resumeData;
  const container = document.getElementById('contact-content');
  
  container.innerHTML = `
    <p class="contact-info">
      <a href="tel:${escapeHtml(personal.phone)}" class="contact-link">
        <i class="fas fa-phone"></i> ${escapeHtml(personal.phone)}
      </a>
    </p>
    <p class="contact-info">
      <a href="mailto:${escapeHtml(personal.email)}" class="contact-link">
        <i class="fas fa-envelope"></i> ${escapeHtml(personal.email)}
      </a>
    </p>
  `;
}

function initNavigation() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  
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
  
  if (!('IntersectionObserver' in window)) {
    return;
  }
  
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
  
  if (!firstSection) {
    return;
  }
  
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
  if (hash) {
    const element = document.getElementById(hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
}

function setYear() {
  document.getElementById('year').textContent = new Date().getFullYear();
}

function initTheme() {
  const toggle = document.getElementById('theme-toggle');
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
  try {
    renderPersonalInfo();
    renderSocialLinks();
    renderAbout();
    renderExperience();
    renderEducation();
    renderSkills();
    renderInterests();
    renderProjects();
    renderContact();
    initNavigation();
    initScrollSpy();
    initTheme();
    initPdfDownload();
    handleDeepLink();
    setYear();
  } catch (error) {
    console.error('Error rendering resume:', error);
    document.getElementById('app').innerHTML = '<p class="error">Error loading resume data.</p>';
  }
});

const resumeData = require('./config/resume.json');
require('./styles.css');

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
    'Workflow': 'fa-tasks'
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
      
      if (iconClass) {
        return `<span class="skill-item"><i class="${iconClass}"></i> ${escapeHtml(skill)}</span>`;
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
    handleDeepLink();
    setYear();
  } catch (error) {
    console.error('Error rendering resume:', error);
    document.getElementById('app').innerHTML = '<p class="error">Error loading resume data.</p>';
  }
});

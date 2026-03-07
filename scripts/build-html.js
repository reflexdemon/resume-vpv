const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const RESUME_JSON_PATH = path.join(PROJECT_ROOT, 'src', 'config', 'resume.json');
const TEMPLATE_PATH = path.join(PROJECT_ROOT, 'src', 'index-template.html');
const OUTPUT_PATH = path.join(PROJECT_ROOT, 'dist', 'index.html');

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function loadResumeData() {
  if (!fs.existsSync(RESUME_JSON_PATH)) {
    throw new Error(`Resume JSON not found at ${RESUME_JSON_PATH}`);
  }
  
  const rawData = fs.readFileSync(RESUME_JSON_PATH, 'utf8');
  
  try {
    return JSON.parse(rawData);
  } catch (error) {
    throw new Error(`Invalid JSON in resume.json: ${error.message}`);
  }
}

function validateResumeData(data) {
  const errors = [];
  
  if (!data.personal) {
    errors.push('Missing required field: personal');
  } else {
    if (!data.personal.name) errors.push('Missing required field: personal.name');
    if (!data.personal.title) errors.push('Missing required field: personal.title');
    if (!data.personal.email) errors.push('Missing required field: personal.email');
  }
  
  if (!data.experience || !Array.isArray(data.experience)) {
    errors.push('Missing or invalid field: experience (expected array)');
  }
  
  if (!data.education || !Array.isArray(data.education)) {
    errors.push('Missing or invalid field: education (expected array)');
  }
  
  if (!data.skills || !Array.isArray(data.skills)) {
    errors.push('Missing or invalid field: skills (expected array)');
  }
  
  if (errors.length > 0) {
    throw new Error(`Resume validation failed:\n${errors.join('\n')}`);
  }
  
  return true;
}

function loadTemplate() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    throw new Error(`Template not found at ${TEMPLATE_PATH}`);
  }
  return fs.readFileSync(TEMPLATE_PATH, 'utf8');
}

function renderPersonalInfo(data) {
  const { personal } = data;
  return `
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

function renderSocialLinks(data) {
  const { personal } = data;
  
  if (!personal.social) {
    return '';
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
  
  return `<div class="social-links">${linksHtml}</div>`;
}

function renderAbout(data) {
  const { personal } = data;
  return `<p class="summary">${escapeHtml(personal.summary)}</p>`;
}

function renderExperience(data) {
  const { experience } = data;
  
  if (!experience || experience.length === 0) {
    return '<p>No experience data available.</p>';
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
  
  return `<div class="experience-list">${experienceHtml}</div>`;
}

function renderEducation(data) {
  const { education } = data;
  
  if (!education || education.length === 0) {
    return '<p>No education data available.</p>';
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
  
  return `<div class="education-list">${educationHtml}</div>`;
}

function renderSkills(data) {
  const { skills } = data;
  
  if (!skills || skills.length === 0) {
    return '<p>No skills data available.</p>';
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
  
  return `<div class="skills-grid">${skillsHtml}</div>`;
}

function renderInterests(data) {
  const { interests } = data;
  return `<p class="interests-text">${escapeHtml(interests)}</p>`;
}

function renderProjects(data) {
  const { projects } = data;
  
  if (!projects || projects.length === 0) {
    return '<p>No projects available.</p>';
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
  
  return `<div class="projects-grid">${projectsHtml}</div>`;
}

function renderContact(data) {
  const { personal } = data;
  return `
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

function generateHtml(data, template) {
  const sections = {
    '{{PERSONAL_INFO}}': renderPersonalInfo(data),
    '{{SOCIAL_LINKS}}': renderSocialLinks(data),
    '{{ABOUT_CONTENT}}': renderAbout(data),
    '{{EXPERIENCE_CONTENT}}': renderExperience(data),
    '{{EDUCATION_CONTENT}}': renderEducation(data),
    '{{SKILLS_CONTENT}}': renderSkills(data),
    '{{INTERESTS_CONTENT}}': renderInterests(data),
    '{{PROJECTS_CONTENT}}': renderProjects(data),
    '{{CONTACT_CONTENT}}': renderContact(data),
    '{{HEADER_NAME}}': escapeHtml(data.personal.headerName || data.personal.name),
  };
  
  let html = template;
  
  for (const [placeholder, content] of Object.entries(sections)) {
    html = html.replace(new RegExp(placeholder, 'g'), content);
  }
  
  return html;
}

function buildHtml() {
  console.log('Starting HTML build...');
  
  const data = loadResumeData();
  console.log('Loaded resume data');
  
  validateResumeData(data);
  console.log('Validated resume data');
  
  const template = loadTemplate();
  console.log('Loaded template');
  
  const html = generateHtml(data, template);
  console.log('Generated HTML');
  
  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  fs.writeFileSync(OUTPUT_PATH, html);
  console.log(`Output written to ${OUTPUT_PATH}`);
  
  return OUTPUT_PATH;
}

if (require.main === module) {
  try {
    buildHtml();
  } catch (error) {
    console.error('Build failed:', error.message);
    process.exit(1);
  }
}

module.exports = { buildHtml, loadResumeData, validateResumeData, generateHtml };

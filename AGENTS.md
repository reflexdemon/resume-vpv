# AGENTS.md - Agent Coding Guidelines for resume-vpv

## Project Overview

- **Project name**: resume-vpv
- **Type**: Node.js/CommonJS project
- **Description**: Online resume of Venkateswara VP - a seasoned technology leader with 18+ years of experience
- **Author**: reflexdemon
- **Tech Stack**: Webpack, JavaScript, HTML, CSS, JSON-driven content

---

## Build, Lint, and Test Commands

### Available Commands

```bash
# Install dependencies
npm install

# Start development server (hot reload)
npm run dev

# Build for production
npm run build

# Test (placeholder - no actual tests configured)
npm test
```

### Running a Single Test

```bash
# Run a single test file
npx jest path/to/test.test.js

# Run a specific test
npx jest path/to/test.test.js -t "test name"

# Run tests in watch mode
npx jest --watch
```

### Linting

```bash
# Run ESLint
npx eslint .

# Fix auto-fixable issues
npx eslint . --fix
```

---

## Code Style Guidelines

### General Principles

- Write clean, readable, and maintainable code
- Keep functions small and focused (single responsibility)
- Use meaningful variable and function names
- Avoid magic numbers - use constants

### Accessibility (WCAG 2.1)

- Ensure proper semantic HTML (header, main, footer, nav, article, section)
- Add ARIA labels for interactive elements
- Maintain color contrast ratio of 4.5:1 for normal text
- Ensure keyboard navigation works for all interactive elements
- Add alt text for images
- Focus indicators must be visible

### Formatting

- Use 2 spaces for indentation
- Use single quotes for strings in JavaScript
- Always use semicolons
- Maximum line length: 100 characters
- Add trailing commas where appropriate

### Imports

```javascript
// Use CommonJS require for this project (commonjs type in package.json)
const fs = require('fs');
const path = require('path');

// Group imports: built-in modules first, then external, then local
const fs = require('fs');
const express = require('express');
const myModule = require('./myModule');
```

### Naming Conventions

- **Variables/functions**: camelCase (`getUserData`, `isActive`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RETRIES`, `API_URL`)
- **Classes**: PascalCase (`ResumeBuilder`, `PDFGenerator`)
- **Files**: kebab-case or camel-case (`resume-parser.js`, `resumeParser.js`)

### Types

- Use JSDoc comments for function parameters and return types
- Prefer `const` over `let`, avoid `var`
- Use strict equality (`===` and `!==`) instead of loose equality

### Error Handling

```javascript
// Always use try-catch for async operations
async function loadResume() {
  try {
    const data = await fs.promises.readFile('resume.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Failed to load resume:', error.message);
    throw new Error('Resume could not be loaded');
  }
}

// Handle errors at the call site
try {
  const resume = await loadResume();
} catch (error) {
  // Handle appropriately
}
```

### File Organization

```
src/
  index.js          # Entry point
  index.html        # HTML template
  styles.css        # Styles
  config/           # Configuration files (resume.json)
assets/             # Static assets (images, fonts)
```

### Git Conventions

- Use meaningful commit messages
- Commit related changes together
- Do not commit: node_modules/, *.log, .env files

### When Adding Dependencies

1. Use stable, well-maintained packages
2. Check for security vulnerabilities (`npm audit`)
3. Add proper peer dependencies if needed
4. Document new commands in this file

---

## Project Status

This project is a webpack-based resume website with JSON-driven content.
The resume data is stored in `src/config/resume.json`.

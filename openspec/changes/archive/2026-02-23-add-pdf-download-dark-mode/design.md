## Context

The resume website at `src/index.html` currently displays resume data from `src/config/resume.json`. It needs enhancements:
1. Hero section with background image at page top
2. PDF download button to export resume without the image
3. Dark/light mode toggle with preference persistence
4. WCAG 2.1 accessibility compliance

## Goals / Non-Goals

**Goals:**
- Add hero section with `assets/1500x500.jpg` as background
- Implement PDF download using browser print or html2pdf.js library
- Add theme toggle with localStorage persistence
- Ensure WCAG 2.1 AA compliance (color contrast 4.5:1, keyboard navigation, ARIA labels)

**Non-Goals:**
- Server-side PDF generation
- Multiple themes beyond light/dark
- Backend changes

## Decisions

### Hero Background Image
- **Decision**: Use CSS background-image on hero section
- **Rationale**: Simpler than img element, allows easy hiding for PDF

### PDF Download
- **Decision**: Use html2pdf.js library for client-side PDF generation
- **Rationale**: No server required, can exclude hero image easily
- **Alternative**: Browser print dialog - rejected, less control over output

### Theme Toggle
- **Decision**: CSS custom properties + localStorage for persistence
- **Rationale**: Native browser support, no additional dependencies
- **Default**: System preference via `prefers-color-scheme` media query

### WCAG Compliance
- **Decision**: Manual implementation of accessibility requirements
- **Rationale**: No complex a11y library needed for static content
- **Scope**: Color contrast, focus indicators, semantic HTML, ARIA labels

## Risks / Trade-offs

- [Risk] PDF generation may differ across browsers → Mitigation: Test in Chrome, Firefox, Safari
- [Risk] Dark mode colors may not have sufficient contrast → Mitigation: Use WCAG-compliant color palette
- [Risk] Theme flash on page load → Mitigation: Inline script in head to set theme before body renders

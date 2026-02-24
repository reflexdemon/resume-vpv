## Why

The resume website needs enhancements to improve user experience and accessibility. Adding a hero background image creates visual appeal, a PDF download option provides offline access, dark/light mode improves user preference handling, and WCAG 2.1 compliance ensures accessibility for all users.

## What Changes

- Add hero section with background image (assets/1500x500.jpg)
- Implement PDF download functionality (resume without image)
- Add dark mode/light mode toggle
- Ensure WCAG 2.1 accessibility compliance throughout

## Capabilities

### New Capabilities
- `hero-background`: Add visual hero section with background image
- `pdf-download`: Enable resume download as PDF without the hero image
- `theme-toggle`: Dark/light mode switching with user preference persistence
- `accessibility-wcag21`: WCAG 2.1 compliance for all interactive elements

### Modified Capabilities
- None - this is a net-new feature set

## Impact

- `src/index.html`: Add hero section, PDF download button, theme toggle
- `src/styles.css`: Add dark/light theme CSS variables and WCAG-compliant styles
- `src/index.js`: Add theme toggle logic and PDF generation
- `package.json`: May need PDF generation library (e.g., html2pdf.js)

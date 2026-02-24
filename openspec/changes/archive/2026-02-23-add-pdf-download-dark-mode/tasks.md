## 1. Setup

- [x] 1.1 Install html2pdf.js dependency
- [x] 1.2 Create theme initialization inline script for head

## 2. Hero Section

- [x] 2.1 Add hero section to index.html with assets/1500x500.jpg background
- [x] 2.2 Add CSS styles for hero section with proper height and positioning

## 3. PDF Download

- [x] 3.1 Add "Download PDF" button to header with aria-label
- [x] 3.2 Implement PDF generation function using html2pdf.js
- [x] 3.3 Configure PDF to exclude hero background image
- [x] 3.4 Add PDF download click handler in index.js

## 4. Theme Toggle

- [x] 4.1 Add theme toggle button to header with aria-label
- [x] 4.2 Define CSS custom properties for light and dark themes
- [x] 4.3 Implement theme toggle function in index.js
- [x] 4.4 Add localStorage persistence for theme preference
- [x] 4.5 Add system preference detection (prefers-color-scheme)

## 5. Accessibility (WCAG 2.1)

- [x] 5.1 Update color palette to meet 4.5:1 contrast ratio
- [x] 5.2 Add visible focus indicators for all interactive elements
- [x] 5.3 Ensure semantic HTML structure (header, main, footer)
- [x] 5.4 Add ARIA labels to all buttons without visible text
- [x] 5.5 Test keyboard navigation through all interactive elements

## 6. Build and Test

- [x] 6.1 Run npm run build to verify production build works
- [ ] 6.2 Verify PDF download functionality
- [ ] 6.3 Verify theme toggle works and persists
- [ ] 6.4 Verify accessibility with keyboard navigation

## 1. PDF Light Mode

- [x] 1.1 Update PDF generation to force light mode class before rendering
- [x] 1.2 Add print-specific CSS for light mode in PDF
- [x] 1.3 Ensure PDF text has 4.5:1 contrast ratio

## 2. PDF A4 Formatting

- [x] 2.1 Configure html2pdf.js for A4 page size with 10mm margins
- [x] 2.2 Add CSS page-break properties to prevent section splitting
- [x] 2.3 Add CSS orphans/widows properties to prevent line cutting
- [ ] 2.4 Test PDF output in browser

## 3. Dark Mode Accessibility

- [x] 3.1 Update dark mode text color to #e6edf3 (high contrast)
- [x] 3.2 Update dark mode background to #0d1117 (darker for contrast)
- [x] 3.3 Update dark mode secondary color to #58a6ff (higher contrast)
- [x] 3.4 Update dark mode heading colors for 4.5:1 ratio
- [x] 3.5 Verify dark mode colors pass WCAG contrast checker

## 4. Build and Test

- [x] 4.1 Run npm run build
- [ ] 4.2 Verify PDF download generates properly
- [ ] 4.3 Verify dark mode readability

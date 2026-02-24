## Context

The resume website has issues with PDF generation and dark mode accessibility:
1. PDF doesn't force light mode - uses current theme colors
2. PDF content doesn't fit A4 properly - text gets cut at page boundaries
3. Dark mode colors don't meet WCAG 2.1 AA contrast ratio (4.5:1)

## Goals / Non-Goals

**Goals:**
- PDF always generates in light mode regardless of user's theme setting
- PDF content fits A4 with proper margins and page breaks between sections
- Dark mode text has minimum 4.5:1 contrast ratio

**Non-Goals:**
- Server-side PDF generation
- Multiple PDF themes
- Print preview functionality

## Decisions

### PDF Light Mode
- **Decision**: Apply `.pdf-mode` class to body before generation and use print-specific CSS
- **Rationale**: html2pdf.js respects CSS classes, allows selective styling
- **Alternative**: Force light mode inline styles - rejected, too messy

### PDF A4 Formatting
- **Decision**: Use CSS `page-break-inside: avoid` on sections and set A4 margins in html2pdf options
- **Rationale**: Native CSS property works well with html2pdf.js
- **Alternative**: Calculate page breaks in JS - rejected, too complex

### Dark Mode Contrast
- **Decision**: Update CSS custom properties for dark theme to use WCAG-compliant colors
- **Rationale**: Direct CSS change is simplest, maintains theming architecture
- **Alternative**: Use CSS filter/invert - rejected, affects images too

## Risks / Trade-offs

- [Risk] PDF page breaks may not work in all browsers → Mitigation: Test in Chrome, Firefox, Safari
- [Risk] Dark mode colors may look different from original design → Mitigation: Choose colors close to design but accessible

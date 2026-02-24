## Why

The PDF download and dark mode have bugs that need fixing. The PDF always generates in light mode but doesn't maintain proper A4 formatting with page breaks. Dark mode has readability issues that don't meet WCAG 2.1 accessibility standards.

## What Changes

- Fix PDF generation to always use light mode styling
- Configure PDF to fit content properly to A4 size sheet
- Add page breaks between sections to prevent content from being cut
- Fix dark mode colors to meet WCAG 2.1 AA contrast ratio (4.5:1)

## Capabilities

### New Capabilities
- `pdf-light-mode`: Ensure PDF always renders in light mode regardless of current theme
- `pdf-a4-formatting`: Configure PDF output to A4 size with proper margins and page breaks
- `dark-mode-accessibility`: Fix dark mode colors to meet WCAG 2.1 AA accessibility standards

### Modified Capabilities
- None - these are bug fixes

## Impact

- `src/index.js`: Update PDF generation to force light mode and add page break handling
- `src/styles.css`: Add print-specific styles and fix dark mode contrast ratios

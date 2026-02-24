## ADDED Requirements

### Requirement: Dark mode text meets WCAG 2.1 AA contrast
All text in dark mode SHALL have a contrast ratio of at least 4.5:1 against the background.

#### Scenario: Dark mode contrast ratio
- **WHEN** dark theme is active
- **AND** normal text is displayed
- **THEN** text has minimum 4.5:1 contrast ratio

### Requirement: Dark mode heading contrast
Headings in dark mode SHALL have sufficient contrast.

#### Scenario: Heading visibility
- **WHEN** dark theme is active
- **AND** headings are displayed
- **THEN** headings have minimum 4.5:1 contrast ratio

### Requirement: Dark mode link contrast
Links in dark mode SHALL be distinguishable from surrounding text.

#### Scenario: Link visibility
- **WHEN** dark theme is active
- **AND** links are displayed
- **AND** link is not in visited state
- **THEN** link has minimum 3:1 contrast ratio against surrounding text

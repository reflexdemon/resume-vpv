## ADDED Requirements

### Requirement: Color contrast meets WCAG 2.1 AA standard
All text content SHALL have a contrast ratio of at least 4.5:1 against the background.

#### Scenario: Text contrast verification
- **WHEN** light theme is active
- **THEN** normal text has 4.5:1 contrast ratio minimum
- **AND** dark theme is active
- **THEN** normal text has 4.5:1 contrast ratio minimum

### Requirement: All interactive elements are keyboard accessible
All buttons and links SHALL be focusable and operable using only the keyboard.

#### Scenario: Keyboard navigation
- **WHEN** user tabs through the page
- **THEN** all buttons and links receive visible focus indicator
- **AND** Enter/Space activates focused element

### Requirement: Focus indicators are visible
Each interactive element SHALL have a clearly visible focus indicator.

#### Scenario: Focus visibility
- **WHEN** element receives focus
- **THEN** a visible outline or indicator appears
- **AND** indicator meets 3:1 contrast against adjacent colors

### Requirement: Semantic HTML is used
The page SHALL use proper semantic HTML elements (header, main, footer, nav, article, section).

#### Scenario: Semantic structure
- **WHEN** page is rendered
- **THEN** header contains navigation and controls
- **AND** main contains the resume content
- **AND** footer contains copyright/links

### Requirement: ARIA labels for interactive elements
Interactive elements without visible text SHALL have appropriate ARIA labels.

#### Scenario: ARIA labels present
- **WHEN** theme toggle button is rendered
- **AND** button has icon only
- **THEN** aria-label describes the button purpose
- **AND** PDF download button has appropriate aria-label

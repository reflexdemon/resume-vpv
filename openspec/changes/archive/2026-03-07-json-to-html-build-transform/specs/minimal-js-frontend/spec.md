## ADDED Requirements

### Requirement: Minimal JavaScript bundle
The frontend SHALL include only essential JavaScript for progressive enhancements, with all content rendered statically at build time.

#### Scenario: JavaScript only for progressive enhancements
- **WHEN** JavaScript is enabled in the browser
- **THEN** only the following features SHALL be available: theme toggle, navigation toggle, scroll spy, back to top button, PDF download, and deep link handling

#### Scenario: Content does not require JavaScript
- **WHEN** JavaScript is disabled in the browser
- **THEN** all resume content SHALL remain visible and fully readable

### Requirement: Theme toggle functionality
The system SHALL allow users to toggle between light and dark themes, with the preference persisted in localStorage.

#### Scenario: Theme toggle switches theme
- **WHEN** user clicks the theme toggle button
- **THEN** the page theme SHALL switch between light and dark modes

#### Scenario: Theme preference is persisted
- **WHEN** user selects a theme and reloads the page
- **THEN** the previously selected theme SHALL be applied automatically

#### Scenario: Theme prevents flash of wrong theme
- **WHEN** page loads
- **THEN** an inline script in the head SHALL set the theme before any content renders to prevent flash

### Requirement: Navigation works without JavaScript
Core navigation SHALL function without JavaScript, with JavaScript adding progressive enhancements.

#### Scenario: Navigation links work without JS
- **WHEN** user clicks a navigation link with JavaScript disabled
- **THEN** the browser SHALL scroll to the corresponding section using native anchor behavior

#### Scenario: Navigation toggle enhances mobile experience
- **WHEN** JavaScript is enabled and user is on a small screen
- **THEN** clicking the hamburger menu SHALL toggle a mobile navigation drawer

### Requirement: PDF download functionality
Users SHALL be able to download the resume as a PDF document.

#### Scenario: PDF download generates document
- **WHEN** user clicks the PDF download button
- **THEN** a PDF file containing the resume SHALL be downloaded to the user's device

### Requirement: Scroll spy indicates active section
When JavaScript is enabled, the navigation SHALL highlight the currently visible section.

#### Scenario: Active section is highlighted
- **WHEN** user scrolls to a section with JavaScript enabled
- **THEN** the corresponding navigation link SHALL be marked as active

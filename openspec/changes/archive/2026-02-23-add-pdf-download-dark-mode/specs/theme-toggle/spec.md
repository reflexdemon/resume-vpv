## ADDED Requirements

### Requirement: Theme toggle button is accessible
The page SHALL include a toggle button that allows users to switch between light and dark themes.

#### Scenario: Toggle button exists
- **WHEN** page loads
- **THEN** a theme toggle button is visible in the header area

### Requirement: Theme toggle switches between light and dark modes
Clicking the theme toggle SHALL switch the page between light and dark color schemes.

#### Scenario: User clicks theme toggle
- **WHEN** user clicks the theme toggle button
- **AND** current theme is light
- **THEN** the page switches to dark theme
- **AND** user clicks toggle again
- **THEN** the page switches back to light theme

### Requirement: Theme preference persists across page reloads
The selected theme SHALL be saved to localStorage and applied on subsequent page visits.

#### Scenario: Theme persists after reload
- **WHEN** user selects dark theme
- **AND** user reloads the page
- **THEN** dark theme is applied automatically

### Requirement: Default theme follows system preference
If no saved preference exists, the page SHALL use the system's color scheme preference.

#### Scenario: System preference detection
- **WHEN** user visits for first time
- **AND** user has dark mode enabled in OS
- **THEN** dark theme is applied by default

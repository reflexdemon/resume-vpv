## ADDED Requirements

### Requirement: Current section highlighted during scroll
The aside navigation SHALL highlight the section that is currently visible in the viewport as the user scrolls.

#### Scenario: Section highlighted when in view
- **WHEN** a section is currently visible in the viewport (top of section is above viewport bottom and bottom is below viewport top)
- **THEN** the corresponding link in the aside navigation MUST be visually highlighted

#### Scenario: No section highlighted when none in view
- **WHEN** no section is currently visible in the viewport
- **THEN** no link in the aside navigation SHALL be highlighted

### Requirement: Scroll highlighting uses Intersection Observer
The scroll highlighting feature SHALL use the Intersection Observer API for performance.

#### Scenario: Intersection Observer used
- **WHEN** scroll highlighting is active
- **THEN** it MUST use Intersection Observer API to detect visible sections

#### Scenario: Graceful degradation when unsupported
- **WHEN** the browser does not support Intersection Observer
- **THEN** the aside navigation links MUST still be clickable and functional (no highlighting, no error)

### Requirement: Highlight updates on scroll
The highlight SHALL update immediately when the user scrolls to a different section.

#### Scenario: Highlight updates on scroll
- **WHEN** user scrolls to a different section
- **THEN** the aside navigation highlight MUST update to reflect the newly visible section within 100ms

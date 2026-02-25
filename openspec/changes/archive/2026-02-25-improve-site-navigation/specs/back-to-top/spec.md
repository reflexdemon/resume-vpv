## ADDED Requirements

### Requirement: Back-to-top button appears on scroll
The back-to-top button SHALL appear when the user scrolls past the first section of the page.

#### Scenario: Button hidden at top
- **WHEN** the user is at the top of the page (above the first section)
- **THEN** the back-to-top button MUST NOT be visible

#### Scenario: Button appears after scrolling
- **WHEN** the user scrolls past the first section (below the first section's top edge)
- **THEN** the back-to-top button MUST become visible

### Requirement: Back-to-top button scrolls to top
The back-to-top button SHALL scroll the page back to the top when clicked.

#### Scenario: Click scrolls to top
- **WHEN** the user clicks the back-to-top button
- **THEN** the page MUST smoothly scroll to the top of the document

### Requirement: Back-to-top button has proper positioning
The back-to-top button SHALL be positioned in the bottom-right corner of the viewport.

#### Scenario: Fixed position bottom-right
- **WHEN** the back-to-top button is visible
- **THEN** it MUST be fixed to the bottom-right corner with adequate spacing from edges

### Requirement: Back-to-top button has adequate touch target
The back-to-top button SHALL have a minimum touch target size for accessibility.

#### Scenario: Adequate touch target
- **WHEN** the back-to-top button is rendered
- **THEN** it MUST have a minimum size of 44x44 pixels

#### Scenario: Hover state visible
- **WHEN** user hovers over the back-to-top button
- **THEN** the button MUST show a visual indicator of interactivity

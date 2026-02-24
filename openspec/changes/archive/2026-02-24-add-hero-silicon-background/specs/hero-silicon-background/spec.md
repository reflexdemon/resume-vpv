## ADDED Requirements

### Requirement: Hero section displays silicon circuit background
The hero section SHALL display the image `assets/1500x500.jpg` as its background with a silicon integrated circuit pattern overlay.

#### Scenario: Background image displays correctly
- **WHEN** the page loads
- **THEN** the hero section background SHALL show the image from `assets/1500x500.jpg`

#### Scenario: SVG circuit pattern overlay is visible
- **WHEN** the page loads
- **THEN** a silicon circuit pattern overlay SHALL be applied to the hero background

### Requirement: Text remains readable over background
The hero section text SHALL maintain a contrast ratio of at least 4.5:1 against the background.

#### Scenario: Text contrast on light background
- **WHEN** the background image is light in color
- **THEN** text SHALL have sufficient shadow or dark coloring to maintain readability

#### Scenario: Text contrast on dark background
- **WHEN** the background image is dark in color
- **THEN** text SHALL have sufficient highlight or light coloring to maintain readability

### Requirement: Responsive behavior across devices
The hero background SHALL scale appropriately across different screen sizes.

#### Scenario: Background covers section on desktop
- **WHEN** viewing on desktop (≥1024px width)
- **THEN** background SHALL cover the full hero section using `background-size: cover`

#### Scenario: Background covers section on tablet
- **WHEN** viewing on tablet (768px - 1023px width)
- **THEN** background SHALL cover the full hero section

#### Scenario: Background covers section on mobile
- **WHEN** viewing on mobile (<768px width)
- **THEN** background SHALL cover the full hero section without distortion

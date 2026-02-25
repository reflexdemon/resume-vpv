## ADDED Requirements

### Requirement: Aside navigation displays on desktop
The aside navigation SHALL be visible on the left side of the viewport when the viewport width is 1024px or greater.

#### Scenario: Aside nav visible on large screens
- **WHEN** the viewport width is 1024px or greater
- **THEN** the aside navigation sidebar MUST be visible and fixed to the left side of the viewport

#### Scenario: Aside nav hidden on small screens
- **WHEN** the viewport width is less than 1024px
- **THEN** the aside navigation sidebar MUST NOT be visible

### Requirement: Aside navigation contains section links
The aside navigation SHALL contain clickable links to each main section of the resume.

#### Scenario: Section links present
- **WHEN** the aside navigation is rendered
- **THEN** it MUST contain links for: About, Experience, Skills, Education, and Contact sections

#### Scenario: Click navigates to section
- **WHEN** user clicks a link in the aside navigation
- **THEN** the page MUST smoothly scroll to the corresponding section

### Requirement: Aside navigation has proper styling
The aside navigation SHALL have appropriate visual styling consistent with the site design.

#### Scenario: Consistent styling
- **WHEN** the aside navigation is rendered
- **THEN** it MUST use the site's color scheme and typography

#### Scenario: Hover state on links
- **WHEN** user hovers over a link in the aside navigation
- **THEN** the link MUST show a visual indicator (color change or underline)

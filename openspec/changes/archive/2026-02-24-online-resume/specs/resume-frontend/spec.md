## ADDED Requirements

### Requirement: Single Page Application Structure
The system SHALL render a single HTML page that displays all resume content without page reloads.

#### Scenario: Page loads all sections
- **WHEN** user opens index.html
- **THEN** all resume sections (about, experience, education, skills, interests, projects) render on the page

### Requirement: Deep Link Navigation
The system SHALL support deep linking to each section using URL hash fragments (e.g., #about, #experience).

#### Scenario: Deep link scrolls to section
- **WHEN** user navigates to URL with hash (e.g., index.html#experience)
- **THEN** browser scrolls to the Experience section

#### Scenario: Navigation menu links work
- **WHEN** user clicks a nav link (e.g., "Experience")
- **THEN** page scrolls smoothly to the Experience section

### Requirement: Navigation Menu
The system SHALL include a fixed navigation menu with links to all resume sections.

#### Scenario: Navigation visible on load
- **WHEN** page loads
- **THEN** navigation menu is visible with links to all sections

### Requirement: Responsive Design
The system SHALL render properly on mobile, tablet, and desktop viewports.

#### Scenario: Mobile layout adjusts
- **WHEN** viewport is less than 768px wide
- **THEN** layout adjusts to single column with hamburger menu

### Requirement: Icon Integration
The system SHALL display icons from Font Awesome and Devicon for skills and contact info.

#### Scenario: Skills show technology icons
- **WHEN** skill entries render
- **THEN** appropriate Devicon displays next to each technology

#### Scenario: Contact info shows icon
- **WHEN** contact information renders
- **THEN** Font Awesome icons display next to phone, email, social links

### Requirement: External Links Open in New Tab
The system SHALL open external links (LinkedIn, GitHub, blog) in new browser tabs.

#### Scenario: External link clicked
- **WHEN** user clicks external link (LinkedIn, GitHub)
- **THEN** link opens in new tab with rel="noopener noreferrer"

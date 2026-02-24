## ADDED Requirements

### Requirement: Hero section displays background image
The hero section at the top of the resume page SHALL display assets/1500x500.jpg as the background image.

#### Scenario: Hero image loads correctly
- **WHEN** page loads
- **THEN** the hero section background displays the image from assets/1500x500.jpg

### Requirement: Hero image is hidden in PDF output
The hero section with background image SHALL NOT appear in the PDF export.

#### Scenario: PDF excludes hero background
- **WHEN** user downloads PDF
- **THEN** the hero section background image is not included in the output

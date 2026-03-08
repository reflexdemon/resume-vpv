## ADDED Requirements

### Requirement: GA4 script included in HTML
The website SHALL include the Google Analytics 4 tracking script in the HTML output.

#### Scenario: GA script in head
- **WHEN** page loads
- **THEN** the GA4 tracking script SHALL be present in the `<head>` section

#### Scenario: Correct gtag implementation
- **WHEN** GA script is loaded
- **THEN** it SHALL use the gtag.js library with the measurement ID

### Requirement: Page view tracking
The website SHALL automatically track page views.

#### Scenario: Page view tracked
- **WHEN** user loads any page
- **THEN** a page_view event SHALL be sent to Google Analytics

### Requirement: Custom event tracking
The website SHALL track key user interactions.

#### Scenario: PDF download tracked
- **WHEN** user clicks the PDF download button
- **THEN** a custom event SHALL be sent to GA

#### Scenario: Theme toggle tracked
- **WHEN** user toggles between light and dark themes
- **THEN** a custom event SHALL be sent to GA

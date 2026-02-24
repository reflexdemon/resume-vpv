## ADDED Requirements

### Requirement: PDF download button is accessible
The page SHALL include a "Download PDF" button that allows users to download the resume as a PDF document.

#### Scenario: PDF button exists in header
- **WHEN** page loads
- **THEN** a "Download PDF" button is visible in the header/top area of the page

### Requirement: PDF generates without hero image
Clicking the PDF download button SHALL generate and download a PDF of the resume content without the hero background image.

#### Scenario: User clicks PDF download
- **WHEN** user clicks "Download PDF" button
- **THEN** a PDF file is downloaded containing the resume content
- **AND** the hero section background image is not included in the PDF

### Requirement: PDF contains all resume sections
The generated PDF SHALL contain the personal info, experience, education, skills, and projects sections.

#### Scenario: PDF has complete content
- **WHEN** PDF is generated
- **THEN** all resume sections from resume.json are included in the output

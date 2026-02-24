## ADDED Requirements

### Requirement: PDF always uses light mode colors
The generated PDF SHALL use light mode color scheme regardless of the user's current theme setting.

#### Scenario: PDF in light mode regardless of theme
- **WHEN** user has dark theme active
- **AND** user clicks "Download PDF"
- **THEN** the generated PDF uses light background (#ffffff) and dark text (#333333)

#### Scenario: PDF text is readable
- **WHEN** PDF is generated in light mode
- **THEN** text color has minimum 4.5:1 contrast ratio against background

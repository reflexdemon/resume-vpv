## ADDED Requirements

### Requirement: PDF fits A4 page size
The generated PDF SHALL be formatted to A4 size with proper margins.

#### Scenario: A4 page size
- **WHEN** PDF is generated
- **THEN** PDF uses A4 format (210mm x 297mm) with 10mm margins

### Requirement: Content does not break across pages
Sections SHALL NOT be split across pages in a way that leaves partial content.

#### Scenario: Section page breaks
- **WHEN** a section content fits on one page
- **THEN** entire section stays on that page
- **AND** when section continues to next page
- **THEN** section starts at top of new page

### Requirement: Lines not cut at page boundary
Text lines SHALL NOT be cut mid-way and continue on the next page.

#### Scenario: No orphaned lines
- **WHEN** PDF is generated
- **THEN** no single line appears partially on one page and partially on another

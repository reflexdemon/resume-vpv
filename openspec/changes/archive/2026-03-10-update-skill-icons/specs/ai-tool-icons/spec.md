## ADDED Requirements

### Requirement: SVG icon rendering for AI tools
The system SHALL render custom SVG icons for AI/developer assistant tools (Opencode, OpenSpec, Claud Code, Copilot, AmazonQ) in the skills section instead of falling back to generic icons.

#### Scenario: Opencode icon displayed
- **WHEN** the skill "Opencode" is present in the resume data
- **THEN** the system SHALL render a custom Opencode SVG icon

#### Scenario: OpenSpec icon displayed
- **WHEN** the skill "OpenSpec" is present in the resume data
- **THEN** the system SHALL render a custom OpenSpec SVG icon

#### Scenario: Claud Code icon displayed
- **WHEN** the skill "Claud Code" is present in the resume data
- **THEN** the system SHALL render a custom Claud Code SVG icon

#### Scenario: Copilot icon displayed
- **WHEN** the skill "Copilot" is present in the resume data
- **THEN** the system SHALL render a custom Copilot SVG icon

#### Scenario: AmazonQ icon displayed
- **WHEN** the skill "AmazonQ" is present in the resume data
- **THEN** the system SHALL render a custom AmazonQ SVG icon

### Requirement: SVG integration with existing skill rendering
The SVG icons SHALL integrate seamlessly with the existing `renderSkills()` function in `src/index.js` without breaking existing skill icon mappings.

#### Scenario: Fallback to existing icons
- **WHEN** a skill does not match any AI tool (Opencode, OpenSpec, Claud Code, Copilot, AmazonQ)
- **THEN** the system SHALL use existing icon detection logic (devicon classes or generic icon)

#### Scenario: Consistent styling
- **WHEN** SVG icons are rendered
- **THEN** they SHALL have consistent sizing and styling with other skill icons in the UI

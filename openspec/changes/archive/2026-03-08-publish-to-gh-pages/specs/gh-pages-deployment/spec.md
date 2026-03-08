## ADDED Requirements

### Requirement: gh-pages deployment script
The project SHALL have a npm script to deploy the built application to GitHub Pages.

#### Scenario: Deploy script exists
- **WHEN** `npm run deploy` is executed
- **THEN** the contents of the `dist/` folder SHALL be published to the gh-pages branch

#### Scenario: Custom domain is configured
- **WHEN** deployment completes
- **THEN** a CNAME file with `me.vpv.io` SHALL be included in the deployment

### Requirement: CNAME file generation
The build process SHALL generate a CNAME file for the custom domain.

#### Scenario: CNAME file created
- **WHEN** `npm run build` is executed
- **THEN** a file named `CNAME` SHALL be created in the `dist/` folder containing `me.vpv.io`

### Requirement: Jekyll disabled
GitHub Pages SHALL NOT process the site with Jekyll.

#### Scenario: Jekyll disabled
- **WHEN** deployment completes
- **THEN** a `.nojekyll` file SHALL exist in the deployed content

### Requirement: Only required files deployed
The deployment SHALL only include necessary web assets.

#### Scenario: Only dist contents deployed
- **WHEN** deployment runs
- **THEN** only HTML, CSS, JS, assets, CNAME, and .nojekyll files SHALL be deployed
- **AND** no source code, node_modules, or configuration files SHALL be included

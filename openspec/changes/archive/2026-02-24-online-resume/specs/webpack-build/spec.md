## ADDED Requirements

### Requirement: Webpack Build Command
The system SHALL provide an `npm run build` command that compiles source files to the dist folder.

#### Scenario: Build creates dist directory
- **WHEN** user runs `npm run build`
- **THEN** a dist folder is created with compiled assets

### Requirement: JavaScript Bundling
The system SHALL bundle all JavaScript into a single minified file.

#### Scenario: JS is minified
- **WHEN** build completes
- **THEN** dist/main.js is minified (whitespace removed, variables renamed)

### Requirement: HTML Processing
The system SHALL process HTML template and inject bundled JavaScript reference.

#### Scenario: HTML references bundled JS
- **WHEN** build completes
- **THEN** dist/index.html contains script tag pointing to main.js

### Requirement: CSS Bundling
The system SHALL bundle and minify CSS into a single file.

#### Scenario: CSS is minified
- **WHEN** build completes
- **THEN** dist/styles.css is minified

### Requirement: Content Compression
The system SHALL compress JavaScript and HTML using Terser for JS and html-minifier for HTML.

#### Scenario: Output is compressed
- **WHEN** build completes
- **THEN** JS and HTML files are compressed for production

### Requirement: Dev Server
The system SHALL provide `npm start` or `npm run dev` to run a development server with live reload.

#### Scenario: Dev server starts
- **WHEN** user runs `npm run dev`
- **THEN** local server starts at localhost with hot reload enabled

### Requirement: Clean Build Output
The system SHALL clean the dist folder before each build to remove stale files.

#### Scenario: Old files removed
- **WHEN** build runs with existing dist folder
- **THEN** only current build artifacts remain in dist

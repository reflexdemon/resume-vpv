## Why

Currently, the resume website loads JSON data at runtime and renders HTML in the browser via JavaScript. This adds unnecessary JavaScript overhead for a static content site and hurts initial page load performance. Transforming JSON to static HTML during the build process will improve performance, SEO, and allow serving purely static files.

## What Changes

- Add build-time HTML generation from JSON resume data
- Create a webpack plugin or script to transform `src/config/resume.json` into full HTML pages during build
- Remove runtime JSON loading and DOM manipulation for content rendering
- Keep minimal JavaScript only for animations and interactive navigation
- Update build pipeline to output ready-to-serve static HTML + CSS

## Capabilities

### New Capabilities

- `static-html-generation`: Generate complete HTML pages from JSON data during build time, eliminating runtime content rendering
- `minimal-js-frontend`: Maintain only essential JavaScript for animations and navigation, stripping all content-generation JS

### Modified Capabilities

- None - this is a new implementation approach

## Impact

- Build process: Added transformation step from JSON to HTML
- Frontend: Simplified JS bundle (content generation removed)
- Output: Static HTML/CSS files instead of JS-driven rendering
- Performance: Faster initial load, better SEO, no client-side JSON parsing

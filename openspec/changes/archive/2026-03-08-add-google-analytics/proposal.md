## Why

The resume website currently has no analytics tracking. Adding Google Analytics will provide insights into visitor behavior, traffic sources, and page views, helping understand who is viewing the resume and how they navigate the site.

## What Changes

- Add Google Analytics 4 tracking code to the website
- Add GA script to the head section of all pages
- Configure page view tracking
- Add event tracking for key interactions (PDF download, theme toggle)

## Capabilities

### New Capabilities

- `google-analytics-integration`: Google Analytics 4 tracking for visitor insights

### Modified Capabilities

- None - new capability

## Impact

- `src/index-template.html`: Add GA script
- Build output: GA tracking code included in production HTML

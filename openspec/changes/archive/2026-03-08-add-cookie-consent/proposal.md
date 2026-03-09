## Why

Privacy regulations like GDPR and CCPA require websites to obtain user consent before storing non-essential cookies. The resume website currently lacks a cookie consent mechanism, which could lead to compliance issues for visitors from regulated regions. Adding a consent banner demonstrates respect for user privacy and builds trust.

## What Changes

- Add a terminal-style cookie consent popup that appears on first visit
- Implement consent storage in localStorage to remember user preferences
- Provide three options: Accept All, Reject All, and Preferences
- Add a "Cookie Preferences" link in the footer for consent withdrawal
- Block non-essential cookies (analytics, tracking) until consent is granted

## Capabilities

### New Capabilities

- `cookie-consent`: A consent banner component with terminal-style UI that displays on first visit, allows users to accept/reject/manage cookies, and persists consent preferences

### Modified Capabilities

- None - this is a new feature

## Impact

- New files: `src/components/cookie-consent.js`, `src/styles/cookie-consent.css`
- Modified files: `src/index.html` (footer link), `src/index.js` (initialization)
- No new dependencies required - pure JavaScript/CSS implementation
- Affects: Frontend UI only

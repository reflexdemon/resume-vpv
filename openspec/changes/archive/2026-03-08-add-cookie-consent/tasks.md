## 1. Create Cookie Consent Component

- [x] 1.1 Create src/components/cookie-consent.js with consent management logic
- [x] 1.2 Create src/styles/cookie-consent.css with terminal-style UI

## 2. Implement Consent Banner UI

- [x] 2.1 Add banner HTML structure with terminal-style design
- [x] 2.2 Style with monospace font and dark theme (#1a1a1a background)
- [x] 2.3 Style buttons as CLI commands ([ACCEPT], [REJECT], [PREFERENCES])
- [x] 2.4 Add preferences panel with category toggles

## 3. Implement Consent Logic

- [x] 3.1 Add localStorage read/write for consent preferences
- [x] 3.2 Implement consent object format: { necessary, analytics, marketing, timestamp }
- [x] 3.3 Add localStorage availability check with graceful fallback
- [x] 3.4 Implement Accept All button handler
- [x] 3.5 Implement Reject All button handler
- [x] 3.6 Implement Preferences save handler

## 4. Integrate with Website

- [x] 4.1 Add Cookie Preferences link to footer in index.html
- [x] 4.2 Initialize cookie consent on page load in index.js
- [x] 4.3 Show banner only when no stored consent exists
- [x] 4.4 Wire up footer link to re-open banner with current preferences

## 5. Implement Cookie Blocking

- [x] 5.1 Add consent check wrapper for analytics scripts
- [x] 5.2 Block analytics/tracking until explicit consent granted

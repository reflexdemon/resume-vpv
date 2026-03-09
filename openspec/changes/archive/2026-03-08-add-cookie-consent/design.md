## Context

The resume website is a static site built with webpack and vanilla JavaScript. It currently has no cookie consent mechanism, which is required for GDPR and CCPA compliance when serving visitors from regulated regions. The design should be a terminal/CLI-style popup to match the aesthetic preferences.

## Goals / Non-Goals

**Goals:**
- Implement a terminal-style cookie consent banner that appears on first visit
- Store user consent preferences in localStorage
- Provide Accept All, Reject All, and Preferences options
- Allow users to withdraw or modify consent via a footer link
- Block non-essential cookies until explicit consent is given

**Non-Goals:**
- Integration with third-party consent management platforms (CMP)
- Server-side consent logging or API storage
- Multi-language support
- Cookie scanning or automatic categorization

## Decisions

1. **UI Style: Terminal/CLI aesthetic**
   - Use monospace font (e.g., 'Courier New', 'Fira Code', or system monospace)
   - Dark background (#1a1a1a or similar) with green/white text
   - ASCII-style borders or simple box-drawing characters
   - Button text styled as CLI commands (e.g., `[ACCEPT]`, `[REJECT]`)
   - Rationale: Matches requested terminal view aesthetic

2. **Consent Storage: localStorage**
   - Store consent object: `{ necessary: true, analytics: boolean, marketing: boolean, timestamp: string }`
   - Key: `cookie_consent_preferences`
   - Rationale: Simple, no backend required, persists across sessions

3. **Cookie Blocking Strategy: Pre-check pattern**
   - Check consent before loading any analytics/tracking scripts
   - Wrap Google Analytics or similar in consent check
   - Rationale:符合 GDPR "prior consent" requirement - no cookies set before consent

4. **Banner Position: Fixed bottom overlay**
   - Fixed position at bottom of viewport
   - Z-index above other content
   - Rationale: Non-intrusive but visible, standard pattern

5. **No external dependencies**
   - Pure vanilla JavaScript and CSS
   - Rationale: Lightweight, no bloat, full control over styling

## Risks / Trade-offs

- **[Risk]** User may dismiss banner without making choice
  - → [Mitigation] Store a "dismissed" state, re-show on next visit if no choice made

- **[Risk]** Consent may be needed for analytics (e.g., Google Analytics)
  - → [Mitigation] Wrap analytics initialization in consent check; if no consent, analytics won't load

- **[Risk]** Browser localStorage may be unavailable (private browsing)
  - → [Mitigation] Graceful fallback: treat as no consent given, show banner on every page load

- **[Risk]** No timestamp validation for consent renewal
  - → [Mitigation] Consider re-requesting consent after 6-12 months per GDPR guidance

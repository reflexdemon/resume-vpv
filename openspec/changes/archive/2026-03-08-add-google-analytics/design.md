## Context

The resume website needs Google Analytics 4 (GA4) tracking. GA4 is the latest version of Google Analytics with improved event-based tracking. The tracking code should be added to the HTML template so it's included in the build output.

## Goals / Non-Goals

**Goals:**
- Add GA4 tracking script to all pages
- Track page views automatically
- Track key user interactions (PDF download, theme toggle)

**Non-Goals:**
- Set up Google Analytics dashboard
- Configure Goals or Conversions
- Add advanced tracking (scroll depth, outbound links)

## Decisions

### 1. GA4 over Universal Analytics

**Decision:** Use Google Analytics 4 (GA4)

**Rationale:**
- GA4 is the current standard from Google
- Better event tracking model
- Future-proof vs deprecated Universal Analytics

### 2. Script placement

**Decision:** Add GA script in the `<head>` section

**Rationale:**
- Loads early for accurate page view tracking
- Standard practice for GA implementation

### 3. Tracking approach

**Decision:** Use gtag.js for GA4

**Rationale:**
- Official Google library
- Simple implementation
- Supports both page views and custom events

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| GA measurement ID not available | Use environment variable or placeholder |
| Tracking not working in dev | Only include in production build |

## Migration Plan

1. Add GA4 script to `src/index-template.html`
2. Use placeholder measurement ID that user can replace
3. Verify script appears in built HTML

## Open Questions

- Does user have a GA4 measurement ID?
  - Yes it is G-FGWQ8Y7F3G 
- Should we add an environment variable for the measurement ID?
    - No. I can be part of the code and add it to the repo.
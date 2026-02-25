## Context

The resume website is a single-page application built with webpack that displays professional experience and skills. Currently, navigation is limited to a top-level menu that requires scrolling or returning to the top to access other sections. Desktop users would benefit from persistent side navigation that provides quick access to all sections and visual feedback about their current position on the page.

## Goals / Non-Goals

**Goals:**
- Add fixed aside navigation visible on desktop view (screens ≥1024px)
- Implement scroll-based highlighting to show the currently visible section in the aside nav
- Add a back-to-top button that appears after scrolling past the first section
- Ensure responsive behavior: hide aside nav on mobile and tablet (<1024px)

**Non-Goals:**
- Adding keyboard navigation shortcuts (out of scope)
- Animations or transitions beyond basic hover states (keep simple)
- Server-side rendering or PWA features (not applicable)
- Touch gesture support for aside nav (primary focus is desktop)

## Decisions

1. **Aside Navigation Position**: Fixed on the left side of the viewport, 200px wide, positioned below the main header.
   - *Alternative considered*: Right-side positioning was rejected as it competes with content readability.

2. **Scroll Highlighting Approach**: Use Intersection Observer API instead of scroll event listeners for better performance.
   - *Alternative considered*: Scroll event listeners were rejected due to performance concerns on lower-end devices.

3. **Back-to-Top Button Position**: Fixed bottom-right corner, 20px from edges.
   - *Alternative considered*: Floating in aside nav was considered but rejected to keep concerns separated.

4. **Responsive Breakpoint**: 1024px (desktop-first, hide on smaller screens).
   - *Alternative considered*: 768px was considered but rejected as many tablets would show broken layout.

5. **No External Libraries**: Pure JavaScript and CSS for all navigation features.
   - *Alternative considered*: Libraries like scroll-spy were evaluated but rejected to minimize bundle size.

## Risks / Trade-offs

- [Risk] Intersection Observer may not work on very old browsers (IE11) → Mitigation: Feature detection, graceful degradation - nav still works but without highlighting
- [Risk] Fixed positioning may overlap content on smaller desktop screens → Mitigation: Use CSS transform to prevent layout shift, ensure adequate padding
- [Risk] Back-to-top button may be accidentally clicked → Mitigation: Ensure button has adequate click area (44x44px minimum touch target)

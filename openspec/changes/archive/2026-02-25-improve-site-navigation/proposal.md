## Why

Users navigating the resume website on desktop currently lack a persistent side navigation, making it difficult to jump between sections quickly. Additionally, there's no visual indicator of the current section while scrolling, and users must scroll extensively to return to the top. Adding aside navigation with scroll-based highlighting and a back-to-top button will significantly improve user experience and navigation efficiency.

## What Changes

- Add a fixed aside navigation sidebar on desktop view (hidden on mobile)
- Implement scroll-spy functionality to highlight the current section in the aside nav as users scroll
- Add a back-to-top button that appears when users scroll down the page
- Ensure responsive behavior: aside nav hidden on mobile/tablet, visible on desktop breakpoints

## Capabilities

### New Capabilities

- `aside-navigation`: Persistent side navigation for desktop users with section links
- `scroll-highlighting`: Active section highlighting based on user's scroll position
- `back-to-top`: Floating button to quickly scroll back to the top of the page

### Modified Capabilities

- None - this is a new feature with no existing capability modifications

## Impact

- New UI components: AsideNav, BackToTopButton
- New CSS styles for aside navigation and button positioning
- New JavaScript for scroll event handling and intersection observation
- No external dependencies required
- Affects: src/index.html, src/styles.css, src/index.js

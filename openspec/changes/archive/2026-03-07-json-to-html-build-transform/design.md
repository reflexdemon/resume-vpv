## Context

The current implementation loads `resume.json` at runtime in the browser and uses JavaScript to render all content into empty DOM containers. This requires:
- Loading JSON data via JavaScript
- DOM manipulation to insert content
- JavaScript execution for initial page render

The goal is to transform JSON to full HTML during the build process, so the browser receives ready-to-render static HTML with minimal JavaScript only for progressive enhancements.

## Goals / Non-Goals

**Goals:**
- Generate complete static HTML from JSON data at build time
- Maintain visual fidelity with current runtime-rendered output
- Keep JavaScript only for animations, navigation, theme toggle, scroll spy, and PDF download
- Improve initial page load performance and SEO
- Preserve all existing sections: personal info, about, experience, education, skills, interests, projects, contact

**Non-Goals:**
- Add dynamic content that changes at runtime (not needed for a resume)
- Implement server-side rendering (not needed - static files are sufficient)
- Change the visual design or styling
- Support multiple resume versions or languages in a single build

## Decisions

### 1. Build-time transformation approach

**Decision:** Use a Node.js script that runs after webpack build to transform JSON to HTML.

**Rationale:** 
- Simpler than writing a custom webpack plugin
- Keeps build pipeline readable and maintainable
- Easy to debug and modify
- Works with existing webpack setup without major changes

**Alternative considered:** Custom webpack plugin - adds complexity, harder to debug, steeper learning curve for future maintainers.

### 2. Template handling

**Decision:** Use the existing `index.html` as a template, pre-fill all content placeholders at build time.

**Rationale:**
- Preserves existing HTML structure and accessibility features
- Minimizes changes to the codebase
- Easy to compare output with source template

**Alternative considered:** Generate completely new HTML - would lose existing semantic structure and require re-implementing all ARIA attributes.

### 3. JavaScript architecture

**Decision:** Keep a minimal `index.js` that only handles:
- Navigation toggle
- Scroll spy
- Theme toggle (persisted to localStorage)
- Back to top button
- PDF download
- Deep link handling

**Rationale:**
- These features require JavaScript (progressive enhancement)
- Content rendering is no longer needed (build-time generated)
- Removing content JS simplifies the bundle significantly

**Alternative considered:** Remove all JavaScript - would lose theme toggle, PDF download, and smooth navigation features.

### 4. CSS handling

**Decision:** Keep CSS unchanged - continue using webpack to bundle `styles.css`.

**Rationale:**
- CSS doesn't need to change for this transformation
- Works seamlessly with static HTML output

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Build failures if JSON is malformed | Add JSON validation in transformation script |
| Manual content edits require rebuild | Acceptable - resume doesn't change frequently |
| PDF generation requires rendered DOM | Keep html2pdf.js for client-side PDF generation |
| Theme preference requires JS | Use inline script in `<head>` to prevent flash (existing approach) |

## Migration Plan

1. Create `scripts/build-html.js` - Node.js script to transform JSON to HTML
2. Update `webpack.config.js` to run transformation after build
3. Create new `src/index-static.html` template with pre-filled content sections
4. Update `index.html` to remove empty containers (keep structure for JS features)
5. Create minimal `src/runtime.js` for essential JavaScript only
6. Update entry point to use `runtime.js` instead of full `index.js`
7. Test build output matches expected static HTML
8. Verify all features work: theme toggle, PDF download, navigation

## Open Questions

- Should the HTML transformation be a separate npm script or integrated into webpack?
  Ans: We should keep the transformation script separate for easier debugging and modification.
- Do we need to support hot module replacement during development with the new approach?
  Ans: We should still support hot module replacement for development and bundle for production.

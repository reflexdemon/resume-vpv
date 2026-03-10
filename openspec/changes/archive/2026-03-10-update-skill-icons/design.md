## Context

The resume website uses `src/index.js` with a `renderSkills()` function that renders skill icons using Font Awesome and Devicon classes. The AI/developer tools (Opencode, OpenSpec, Claud Code, Copilot, AmazonQ) currently fall back to a generic checkmark icon because no specific mapping exists. The task is to add custom SVG icons for these tools.

## Goals / Non-Goals

**Goals:**
- Add custom SVG icons for Opencode, OpenSpec, Claud Code, Copilot, and AmazonQ
- Integrate SVG icons seamlessly with existing `renderSkills()` function
- Maintain visual consistency with existing skill icons

**Non-Goals:**
- Replace existing Devicon/Font Awesome icons for other skills
- Add new AI tools beyond the five specified
- Modify the skill data structure in `resume.json`

## Decisions

### 1. Inline SVG approach
**Decision:** Store SVG icons as template literal strings in `renderSkills()` function.

**Rationale:** 
- No external file dependencies needed
- Simplifies deployment (single JS file)
- Follows existing pattern where icons are rendered as HTML strings
- Alternative (external sprite file) would require additional HTTP requests

### 2. Icon detection order
**Decision:** Check for AI tools AFTER existing Devicon mappings but BEFORE the fallback generic icon.

**Rationale:**
- Existing skills have specific keywords (e.g., "code" matches VS Code)
- AI tools need precise matching to avoid false positives
- Order: Devicon classes first → AI tool SVG detection → generic fallback

### 3. SVG styling approach
**Decision:** Use inline `width`, `height`, and CSS class for consistent sizing with Devicon icons.

**Rationale:**
- Devicon icons use font-based sizing (1em)
- Inline SVG attributes ensure consistent 24x24px rendering
- CSS class allows future styling adjustments

## Risks / Trade-offs

- **[Risk]** SVG icons may not match exact brand colors of each tool
  - **Mitigation:** Use neutral/coding-themed colors (blues, purples) that fit the resume aesthetic

- **[Risk]** Adding many inline SVGs increases bundle size
  - **Mitigation:** Icons are small (~500 chars each), total ~2.5KB for 5 icons is negligible

- **[Risk]** Future AI tools need icons
  - **Mitigation:** Design the SVG map to be easily extensible

## Open Questions

- Should SVG icons use tool-specific brand colors? (Currently planning neutral styling)
  Ans: No
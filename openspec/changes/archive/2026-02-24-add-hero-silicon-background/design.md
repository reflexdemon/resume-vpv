## Context

The resume website has a hero section at the top of the page. Currently, it likely has a plain or default background. The goal is to enhance the visual appeal by adding a silicon integrated circuit themed background using the provided image and CSS/SVG overlay effects.

## Goals / Non-Goals

**Goals:**
- Add `assets/1500x500.jpg` as hero section background
- Create silicon circuit pattern overlay using CSS/SVG
- Ensure text readability with proper contrast
- Maintain responsive design across all device sizes

**Non-Goals:**
- No changes to page content or layout structure
- No JavaScript changes required for this feature
- No performance optimization of images (assumes image is optimized)

## Decisions

1. **Background Layering**: Use CSS background layering with the image as base layer and SVG overlay on top
   - Alternative considered: Single image with embedded pattern (less flexible)
   - Rationale: Separating image from overlay allows independent adjustments

2. **SVG Circuit Pattern**: Use inline SVG with CSS for the circuit pattern
   - Alternative considered: External SVG file (adds HTTP request)
   - Rationale: Inline SVG keeps it self-contained and allows CSS animations

3. **Contrast Solution**: Use CSS gradient overlay or text-shadow for readability
   - Alternative considered: Dark overlay on image (simpler but reduces image visibility)
   - Rationale: Semi-transparent gradient provides balance between visibility and contrast

## Risks / Trade-offs

- **Risk**: Image may not load → Mitigation: Provide fallback solid background color
- **Risk**: SVG pattern affects text readability → Mitigation: Test contrast ratios, use overlay only on non-text areas if needed
- **Risk**: Responsive behavior on small screens → Mitigation: Use background-size: cover and media queries

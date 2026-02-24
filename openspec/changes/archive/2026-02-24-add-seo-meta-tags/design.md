## Context

The resume website at src/index.html currently has only basic meta tags (charset, viewport, description). For a personal resume site, proper SEO meta tags are essential for discoverability by recruiters and potential employers. The site uses JSON-driven content from resume.json and needs enhanced meta tags for social sharing and search engine visibility.

**Current State:**
- Only basic meta tags present (charset, viewport, description)
- No Open Graph tags for Facebook/LinkedIn sharing
- No Twitter Card tags for Twitter sharing
- No structured data for rich search results

**Constraints:**
- Static HTML site (no server-side rendering)
- Must be deployable via standard static hosting
- Should work with content dynamically loaded from resume.json
- Must maintain existing accessibility features

**Stakeholders:**
- Venkateswara VP (site owner)
- Recruiters and hiring managers searching for technology leaders

## Goals / Non-Goals

**Goals:**
- Add comprehensive Open Graph meta tags for social media sharing
- Add Twitter Card meta tags for Twitter/X sharing
- Add JSON-LD Person structured data for Google rich snippets
- Add canonical URL and additional SEO meta tags
- Improve search engine discoverability for relevant queries

**Non-Goals:**
- Server-side rendering or dynamic meta tag generation
- Analytics or tracking implementation
- Multi-language SEO (English only)
- Blog or content SEO (resume-focused)

## Decisions

1. **JSON-LD over Microdata**: Use JSON-LD (JavaScript Object Notation for Linked Data) for structured data as it's the recommended format by Google, easier to maintain, and doesn't clutter HTML markup.

2. **Static fallback values for dynamic content**: Since resume data is loaded via JavaScript, use static placeholder values in meta tags that will be replaced at build time or use JavaScript to update them. The primary SEO value comes from the static summary and title.

3. **Open Graph image**: Use a placeholder og:image that points to a profile image. A real implementation would generate a custom social sharing image.

4. **Person schema with sameAs**: Include sameAs links to LinkedIn, GitHub, and Twitter profiles to help search engines connect the entity to the person's established web presence.

## Risks / Trade-offs

- **[Risk]** Dynamic content not reflected in meta tags → **Mitigation**: Use static fallback values that represent the core resume content; this is standard practice for statically generated sites
- **[Risk]** Image hosting for og:image → **Mitigation**: Use a placeholder or skip image for initial implementation; can be added when a proper social sharing image is created
- **[Risk]** Structured data validation → **Mitigation**: Use Google's Rich Results Test to validate after implementation

## Migration Plan

1. Add meta tags to src/index.html head section
2. Test social sharing using Facebook Debugger, Twitter Card Validator
3. Test structured data using Google's Rich Results Test
4. No rollback needed - safe to deploy incrementally

## Open Questions

- Should og:image be included now or added later when a social sharing image is created?
- Should the site hostname be hardcoded or made configurable?

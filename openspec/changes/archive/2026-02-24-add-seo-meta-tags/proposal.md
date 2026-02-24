## Why

The resume website lacks comprehensive SEO meta tags, limiting its visibility in search engine results. Without proper Open Graph, Twitter Cards, and structured data, the resume has poor social sharing appearance and missing rich snippets. This impacts discoverability when candidates or recruiters search for technology leaders with 18+ years of experience.

## What Changes

- Add Open Graph meta tags (og:title, og:description, og:image, og:url, og:type)
- Add Twitter Card meta tags (twitter:card, twitter:site, twitter:title, twitter:description, twitter:image)
- Add canonical URL tag
- Add author and keywords meta tags
- Add JSON-LD structured data (Person schema) for rich search results
- Add robots meta tag for proper indexing

## Capabilities

### New Capabilities
- `seo-meta-tags`: Comprehensive SEO meta tags including Open Graph, Twitter Cards, and structured data

### Modified Capabilities
- (None - this is a new capability)

## Impact

- `src/index.html` - Add meta tags to HTML head section
- No new dependencies required
- No API or system changes

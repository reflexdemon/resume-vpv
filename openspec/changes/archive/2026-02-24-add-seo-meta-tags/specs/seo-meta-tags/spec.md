## ADDED Requirements

### Requirement: Open Graph meta tags present
The page SHALL include all required Open Graph meta tags in the `<head>` section for social media sharing.

#### Scenario: Open Graph tags render correctly
- **WHEN** the HTML page is loaded
- **THEN** the following meta tags SHALL be present:
  - `og:title` with the resume title
  - `og:description` with the professional summary
  - `og:image` with a valid image URL
  - `og:url` with the canonical page URL
  - `og:type` set to "profile" for a personal resume

### Requirement: Twitter Card meta tags present
The page SHALL include Twitter Card meta tags for proper Twitter/X sharing appearance.

#### Scenario: Twitter Card tags render correctly
- **WHEN** the HTML page is loaded
- **THEN** the following meta tags SHALL be present:
  - `twitter:card` set to "summary_large_image"
  - `twitter:site` with the Twitter handle
  - `twitter:title` with the resume title
  - `twitter:description` with the professional summary
  - `twitter:image` with a valid image URL

### Requirement: Canonical URL meta tag present
The page SHALL include a canonical URL tag to prevent duplicate content issues.

#### Scenario: Canonical URL is set
- **WHEN** the HTML page is loaded
- **THEN** a `link rel="canonical"` tag SHALL be present with the absolute URL of the page

### Requirement: Additional SEO meta tags present
The page SHALL include additional SEO meta tags for better search engine understanding.

#### Scenario: Additional SEO tags are present
- **WHEN** the HTML page is loaded
- **THEN** the following meta tags SHALL be present:
  - `author` with the person's name
  - `keywords` with relevant technology and leadership terms
  - `robots` with appropriate indexing directives

### Requirement: JSON-LD Person structured data
The page SHALL include JSON-LD structured data using the Person schema for rich search results.

#### Scenario: Person schema validates
- **WHEN** tested with Google's Rich Results Test
- **THEN** the Person structured data SHALL be valid and include:
  - `name` with the full name
  - `jobTitle` with the professional title
  - `url` with the canonical URL
  - `sameAs` links to social profiles (LinkedIn, GitHub, Twitter)

#### Scenario: JSON-LD script tag is present
- **WHEN** the HTML page is loaded
- **THEN** a `<script type="application/ld+json">` tag SHALL be present in the `<head>` with valid Person schema

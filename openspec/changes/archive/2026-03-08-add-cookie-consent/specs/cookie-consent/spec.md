## ADDED Requirements

### Requirement: Cookie consent banner displays on first visit
The cookie consent banner SHALL be displayed to users when they first visit the website, unless they have previously saved consent preferences.

#### Scenario: New visitor sees consent banner
- **WHEN** a user visits the website for the first time and has no stored consent preferences
- **THEN** the cookie consent banner SHALL be displayed in a terminal-style overlay at the bottom of the viewport

#### Scenario: Returning visitor with stored consent
- **WHEN** a user visits the website and has previously saved consent preferences in localStorage
- **THEN** the cookie consent banner SHALL NOT be displayed
- **AND** the stored consent preferences SHALL be applied to block/allow cookies accordingly

### Requirement: Banner has terminal-style UI
The cookie consent banner SHALL use a terminal/CLI-style visual design with monospace fonts and dark theme.

#### Scenario: Banner styling
- **WHEN** the cookie consent banner is displayed
- **THEN** it SHALL use a monospace font family (e.g., Courier New, Fira Code, system monospace)
- **AND** it SHALL have a dark background color (#1a1a1a or similar)
- **AND** it SHALL have light-colored text (white or green)
- **AND** buttons SHALL be styled as CLI commands using square brackets (e.g., [ACCEPT], [REJECT])

### Requirement: Users can accept all cookies
The banner SHALL provide an option for users to accept all cookie categories.

#### Scenario: User accepts all cookies
- **WHEN** user clicks the "[ACCEPT ALL]" button on the consent banner
- **THEN** consent SHALL be granted for all cookie categories (necessary, analytics, marketing)
- **AND** the consent preferences SHALL be saved to localStorage
- **AND** the banner SHALL be hidden
- **AND** non-essential cookies SHALL be enabled

### Requirement: Users can reject all non-essential cookies
The banner SHALL provide an option for users to reject all non-essential cookies while allowing necessary cookies.

#### Scenario: User rejects non-essential cookies
- **WHEN** user clicks the "[REJECT ALL]" button on the consent banner
- **THEN** consent SHALL be granted only for necessary cookies
- **AND** analytics and marketing cookies SHALL be blocked
- **AND** the consent preferences SHALL be saved to localStorage
- **AND** the banner SHALL be hidden

### Requirement: Users can manage cookie preferences
The banner SHALL provide an option for users to selectively enable or disable specific cookie categories.

#### Scenario: User opens preferences
- **WHEN** user clicks the "[PREFERENCES]" button on the consent banner
- **THEN** a preferences panel SHALL be displayed showing cookie categories
- **AND** each category SHALL have a toggle or checkbox for the user to enable/disable
- **AND** categories SHALL include: Necessary (always enabled, disabled), Analytics, Marketing

#### Scenario: User saves preferences
- **WHEN** user adjusts category toggles and clicks "[SAVE]"
- **THEN** the selected consent preferences SHALL be saved to localStorage
- **AND** the banner SHALL be hidden
- **AND** cookies SHALL be enabled/disabled according to saved preferences

### Requirement: Consent is persisted in localStorage
User consent preferences SHALL be stored in localStorage to persist across sessions.

#### Scenario: Consent storage format
- **WHEN** user saves consent preferences
- **THEN** the consent object SHALL be stored in localStorage with key `cookie_consent_preferences`
- **AND** the object SHALL contain: `{ necessary: true, analytics: boolean, marketing: boolean, timestamp: string }`

#### Scenario: Storage unavailable
- **WHEN** localStorage is not available (private browsing, disabled)
- **THEN** the banner SHALL be displayed on every page load
- **AND** the system SHALL treat as if no consent has been given

### Requirement: Users can withdraw consent via footer link
A link SHALL be provided in the website footer that allows users to modify their consent preferences.

#### Scenario: Footer link present
- **WHEN** the website is rendered
- **THEN** a "Cookie Preferences" link SHALL be visible in the footer
- **AND** clicking the link SHALL re-display the consent banner

#### Scenario: Re-opening banner with existing preferences
- **WHEN** user clicks the footer link and has existing consent preferences
- **THEN** the banner SHALL display with current preference settings pre-selected
- **AND** user SHALL be able to modify and save new preferences

### Requirement: Non-essential cookies are blocked until consent
Non-essential cookies (analytics, marketing) SHALL NOT be set until the user provides explicit consent.

#### Scenario: No consent - cookies blocked
- **WHEN** user has not provided consent or has rejected non-essential cookies
- **THEN** analytics scripts SHALL NOT be loaded
- **AND** marketing/tracking cookies SHALL NOT be set

#### Scenario: Consent granted - cookies allowed
- **WHEN** user has provided consent for analytics and/or marketing cookies
- **THEN** the corresponding scripts/cookies SHALL be allowed to load/set

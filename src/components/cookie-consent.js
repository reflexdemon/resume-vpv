const CookieConsent = {
  STORAGE_KEY: 'cookie_consent_preferences',

  init() {
    if (!this.hasConsent()) {
      this.showBanner();
    }
    this.setupFooterLink();
  },

  isStorageAvailable() {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  },

  getConsent() {
    if (!this.isStorageAvailable()) {
      return null;
    }
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      return null;
    }
  },

  hasConsent() {
    return this.getConsent() !== null;
  },

  saveConsent(consent) {
    if (!this.isStorageAvailable()) {
      return false;
    }
    try {
      const data = {
        ...consent,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      return false;
    }
  },

  canUseAnalytics() {
    const consent = this.getConsent();
    return consent && consent.analytics === true;
  },

  canUseMarketing() {
    const consent = this.getConsent();
    return consent && consent.marketing === true;
  },

  showBanner(existingConsent = null) {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) {
      banner.classList.add('active');
      if (existingConsent) {
        this.updatePreferencesUI(existingConsent);
      }
    }
  },

  hideBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) {
      banner.classList.remove('active');
    }
  },

  showPreferences() {
    const banner = document.getElementById('cookie-consent-banner');
    const mainPanel = banner.querySelector('.cc-main');
    const prefsPanel = banner.querySelector('.cc-preferences');
    
    if (mainPanel && prefsPanel) {
      mainPanel.style.display = 'none';
      prefsPanel.style.display = 'block';
    }
  },

  showMain() {
    const banner = document.getElementById('cookie-consent-banner');
    const mainPanel = banner.querySelector('.cc-main');
    const prefsPanel = banner.querySelector('.cc-preferences');
    
    if (mainPanel && prefsPanel) {
      mainPanel.style.display = 'block';
      prefsPanel.style.display = 'none';
    }
  },

  updatePreferencesUI(consent) {
    const banner = document.getElementById('cookie-consent-banner');
    if (!banner) return;

    const analyticsToggle = banner.querySelector('#cc-analytics');
    const marketingToggle = banner.querySelector('#cc-marketing');
    
    if (analyticsToggle) analyticsToggle.checked = consent.analytics === true;
    if (marketingToggle) marketingToggle.checked = consent.marketing === true;
  },

  acceptAll() {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    this.saveConsent(consent);
    this.hideBanner();
    this.onConsentChanged(consent);
  },

  rejectAll() {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    this.saveConsent(consent);
    this.hideBanner();
    this.onConsentChanged(consent);
  },

  savePreferences() {
    const banner = document.getElementById('cookie-consent-banner');
    if (!banner) return;

    const analyticsToggle = banner.querySelector('#cc-analytics');
    const marketingToggle = banner.querySelector('#cc-marketing');

    const consent = {
      necessary: true,
      analytics: analyticsToggle ? analyticsToggle.checked : false,
      marketing: marketingToggle ? marketingToggle.checked : false
    };
    this.saveConsent(consent);
    this.hideBanner();
    this.onConsentChanged(consent);
  },

  onConsentChanged(consent) {
    if (consent.analytics) {
      this.loadAnalytics();
    }
    if (consent.marketing) {
      this.loadMarketing();
    }
  },

  loadAnalytics() {
    console.log('[CookieConsent] Analytics cookies enabled');
  },

  loadMarketing() {
    console.log('[CookieConsent] Marketing cookies enabled');
  },

  setupFooterLink() {
    const link = document.getElementById('cookie-preferences-link');
    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const existingConsent = this.getConsent();
        this.showBanner(existingConsent);
      });
    }
  }
};

function initCookieConsent() {
  const bannerHTML = `
    <div id="cookie-consent-banner" class="cc-banner" role="dialog" aria-labelledby="cc-title" aria-describedby="cc-description">
      <div class="cc-container">
        <div class="cc-main">
          <div class="cc-header">
            <span class="cc-prompt">></span>
            <span id="cc-title" class="cc-title">Cookie Consent</span>
          </div>
          <p id="cc-description" class="cc-description">
            This website uses cookies to improve your experience. We use necessary cookies for basic functionality. 
            You can choose to accept all cookies or just necessary ones.
          </p>
          <div class="cc-buttons">
            <button class="cc-btn cc-btn-accept" id="cc-accept-all">[ACCEPT ALL]</button>
            <button class="cc-btn cc-btn-reject" id="cc-reject-all">[REJECT ALL]</button>
            <button class="cc-btn cc-btn-prefs" id="cc-preferences">[PREFERENCES]</button>
          </div>
        </div>
        <div class="cc-preferences" style="display: none;">
          <div class="cc-header">
            <span class="cc-prompt">></span>
            <span class="cc-title">Cookie Preferences</span>
          </div>
          <div class="cc-options">
            <label class="cc-option">
              <input type="checkbox" checked disabled>
              <span class="cc-option-label">Necessary</span>
              <span class="cc-option-desc">Required for the website to function</span>
            </label>
            <label class="cc-option">
              <input type="checkbox" id="cc-analytics">
              <span class="cc-option-label">Analytics</span>
              <span class="cc-option-desc">Help us understand how visitors interact with our website</span>
            </label>
            <label class="cc-option">
              <input type="checkbox" id="cc-marketing">
              <span class="cc-option-label">Marketing</span>
              <span class="cc-option-desc">Used to deliver personalized advertisements</span>
            </label>
          </div>
          <div class="cc-buttons">
            <button class="cc-btn cc-btn-back" id="cc-back">[BACK]</button>
            <button class="cc-btn cc-btn-save" id="cc-save">[SAVE]</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', bannerHTML);

  document.getElementById('cc-accept-all').addEventListener('click', () => CookieConsent.acceptAll());
  document.getElementById('cc-reject-all').addEventListener('click', () => CookieConsent.rejectAll());
  document.getElementById('cc-preferences').addEventListener('click', () => CookieConsent.showPreferences());
  document.getElementById('cc-back').addEventListener('click', () => CookieConsent.showMain());
  document.getElementById('cc-save').addEventListener('click', () => CookieConsent.savePreferences());

  CookieConsent.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCookieConsent);
} else {
  initCookieConsent();
}

module.exports = CookieConsent;

// Cookie banner settings. Wording is the first draft by the developer and must be reviewed by the client
// (see docs/OPEN-QUESTIONS.md, "Cookie banner"). The sentence in `intro` follows the Privacy Policy's "Use of Cookies".
export const cookieConsent = {
  storageKey: 'lakeside-cookie-consent',
  version: 1,
  intro: 'We use cookies to help personalize your online experience. You can accept all, reject the optional ones, or choose.',
  policyHref: '/your-privacy#use-of-cookies',
  categories: [
    { key: 'necessary', label: 'Necessary', text: 'Needed for the site to work, for example to remember this choice. Always on.', locked: true },
    { key: 'analytics', label: 'Analytics', text: 'Helps us see how the site is used, so we can improve it.', locked: false },
    { key: 'marketing', label: 'Marketing', text: 'Used to show relevant information about our services on other sites.', locked: false },
  ],
} as const;
export type ConsentKey = (typeof cookieConsent.categories)[number]['key'];

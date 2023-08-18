/** @type {import('next-sitemap').IConfig} */

const SITE_URL = (function () {
  // Set hostname dependent on environment, branch and vercel url
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
    // TODO: Update with actual url
    return 'https://www.production.com';
  } else if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  } else {
    return 'http://localhost:3000';
  }
})();

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

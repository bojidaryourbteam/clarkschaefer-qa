const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@use 'global' as *;`,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'images.ctfassets.net',
      'downloads.ctfassets.net',
    ],
  },
  env: {
    company_name: 'Clark Schaeffer Consulting',
  },
};

const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    'storybook-addon-next',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve = {
      fallback: {
        crypto: false,
      },
      alias: {
        path: require.resolve('path-browserify'),
        '@components': path.resolve(__dirname, '../src/components'),
        '@content': path.resolve(__dirname, '../src/content'),
        '@data': path.resolve(__dirname, '../src/data'),
        '@layout': path.resolve(__dirname, '../src/layout'),
        '@lib': path.resolve(__dirname, '../src/lib'),
        '@root': path.resolve(__dirname, '../'),
        '@snippets': path.resolve(__dirname, '../src/snippets'),
        '@src': path.resolve(__dirname, '../src'),
        '@store': path.resolve(__dirname, '../src/store'),
        '@templates': path.resolve(__dirname, '../src/templates'),
      },
    };

    return config;
  },
};

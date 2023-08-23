module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:react/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
  globals: {
    __PATH_PREFIX__: true
  },
  overrides: [
    {
      files: ['./src/pages/**/*.js', './src/templates/**/*.js'],
      rules: {
        'react/prop-types': 0
      }
    }
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    requireConfigFile: false,
    sourceType: 'module'
  },
  plugins: ['jest', 'jsx-a11y', 'prettier', 'react'],
  rules: {
    'import/no-unresolved': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['invalidHref', 'preferButton'],
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight']
      }
    ],
    'react/no-unescaped-entities': 0,
    'react/no-unknown-property': 0,
    'react/prop-types': [
      2,
      {
        ignore: ['activeClassName', 'backgroundImageClassName', 'className', 'contentClassName', 'key', 'size']
      }
    ],
    'react/react-in-jsx-scope': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}

module.exports = {
  root: true,

  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],

  plugins: ['react', 'prettier'],

  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },

  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'import/no-unresolved': 0,
  },
}

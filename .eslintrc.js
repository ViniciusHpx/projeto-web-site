module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/state-in-constructor': 0,
    'react/forbid-prop-types': 0,
  },
};

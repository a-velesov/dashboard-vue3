module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2019,
  },
  plugins: [
    'vue',
  ],
  rules: {
    'import/no-cycle': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'vue/no-multiple-template-root': 'off', // vue 3 added multiroot
    'linebreak-style': 0,
    'max-len': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};

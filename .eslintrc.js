module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    quotes: ["error", "double"],
    "linebreak-style": "off",
    "no-console": "off",
    "comma-dangle": "off"
  }
};

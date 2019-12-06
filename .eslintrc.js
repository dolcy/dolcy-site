module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["plugin:vue/strongly-recommended", "@nuxtjs"],
  // add your custom rules here
  rules: {
    "vue/require-v-for-key": false,
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        startTag: "never",
        endTag: "never",
        selfClosingTag: "never"
      }
    ],

    exceptAfterSingleLine: true,
    // Remove semi colons
    semi: ["error", "never"],
    "no-console": 0,
    quotes: [
      2,
      "single",
      {
        avoidEscape: true
      }
    ]
  }
};

const cssProperties = require("css-properties");

module.exports = {
  extends: "stylelint-config-standard",
  plugins: [
    "stylelint-value-no-unknown-custom-properties",
    "@mavrin/stylelint-declaration-use-css-custom-properties",
    "stylelint-order",
  ],
  rules: {
    "alpha-value-notation": "number",
    "at-rule-empty-line-before": [
      "always",
      {
        ignore: [
          "after-comment",
          "first-nested",
          "inside-block",
          "blockless-after-same-name-blockless",
          "blockless-after-blockless",
        ],
      },
    ],
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-space-before": "never",
    "color-function-notation": "legacy",
    "color-named": "never",
    "color-no-hex": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-no-important": true,
    "font-family-name-quotes": "always-unless-keyword",
    "font-weight-notation": "numeric",
    "function-url-quotes": "always",
    "hue-degree-notation": "number",
    linebreaks: "unix",
    "max-line-length": 80,
    "media-feature-name-no-vendor-prefix": true,
    "no-duplicate-selectors": true,
    "no-empty-first-line": true,
    "number-max-precision": 3,
    "property-no-unknown": [true, { ignoreProperties: ["composes"] }],
    "property-no-vendor-prefix": true,
    "selector-attribute-quotes": "always",
    "selector-max-id": 0,
    "selector-max-type": [0, { ignoreTypes: ["html"] }],
    "selector-no-qualifying-type": true,
    "selector-no-vendor-prefix": true,
    "shorthand-property-no-redundant-values": true,
    "string-quotes": "double",
    "value-no-vendor-prefix": true,
    "csstools/value-no-unknown-custom-properties": true,
    "mavrin/stylelint-declaration-use-css-custom-properties": {
      cssDefinitions: ["color"],
      ignoreValues: ["/^0$/"],
    },
    "order/properties-order": ["composes", ...cssProperties],
  },
};

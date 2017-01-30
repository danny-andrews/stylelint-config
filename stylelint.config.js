module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-property-sort-order-smacss'
  ],
  rules: {
    // At Rules
    'at-rule-empty-line-before': ['always', {
        except: [
          'blockless-group',
          'first-nested',
        ],
        ignore: ['after-comment'],
      }
    ],
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-no-unknown': true,
    'at-rule-no-vendor-prefix': true,
    // Colors
    'color-named': 'never',
    // Custom Properties
    'custom-property-no-outside-root': true,
    // Declarations
    'declaration-no-important': true,
    // Declaration Blocks
    'declaration-block-no-ignored-properties': true,
    'declaration-block-semicolon-newline-after': 'always',
    // Font Family
    'font-family-name-quotes': 'always-unless-keyword',
    // Font Weight
    'font-weight-notation': 'numeric',
    // Functions
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    // Media Features
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-no-missing-punctuation': true,
    // Numbers
    'number-leading-zero': 'never',
    // Properties
    'property-no-vendor-prefix': true,
    // Selectors
    'selector-attribute-quotes': 'always',
    'selector-max-compound-selectors': 3,
    'selector-no-empty': true,
    'selector-no-id': true,
    'selector-no-qualifying-type': true,
    'selector-no-universal': true,
    'selector-no-vendor-prefix': true,
    'selector-root-no-composition': true,
    // String
    'string-quotes': 'single',
    // Time
    'time-no-imperceptible': true,
    // Values
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': true,
    // General / Sheet
    'max-line-length': 80,
    'max-nesting-depth': 2,
    'no-browser-hacks': true,
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'no-indistinguishable-colors': true,
    'no-unknown-animations': true,
    'no-unsupported-browser-features': true
  }
};

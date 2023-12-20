module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-order',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'color-hex-length': 'long',
    'at-rule-no-unknown': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'selector-type-no-unknown': [
      true,
      { ignore: ['custom-elements', 'default-namespace'] },
    ],
    'selector-class-pattern': '',
    'at-rule-name-space-after': 'always',
    'selector-combinator-space-after': 'always',
    'selector-attribute-operator-space-after': 'never',
    'block-opening-brace-space-before': 'always',
    'selector-type-case': ['lower', { ignoreTypes: ['/.+/'] }],
    'unit-allowed-list': [
      '%',
      'deg',
      'em',
      'fr',
      'ms',
      'px',
      'rem',
      's',
      'vh',
      'vw',
      'svh',
      'dvh',
    ],
    'max-empty-lines': 1,
    'value-keyword-case': ['lower', { ignoreKeywords: ['/.+/'] }],
  },
};

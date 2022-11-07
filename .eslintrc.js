module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import', 'jest'],
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    semi: ['warn', 'always'],
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'import/no-unresolved': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
      },
    ],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],
    'import/no-mutable-exports': 0,
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-useless-escape': 'off',
    'lines-between-class-members': 'off',
    'max-len': ['warn', { code: 120, ignoreRegExpLiterals: true }],
    'no-console': 'warn',
    'no-underscore-dangle': 'off',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'warn',
    camelcase: 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
      alias: [
        ['@src', './src'],
        ['@components', './src/components'],
      ],
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
  },
};

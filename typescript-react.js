module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks"],
  rules: {
    "sort-imports": ["warn", { ignoreCase: true, ignoreDeclarationSort: true }],
    semi: ["error", "always"],
    "prettier/prettier": ["error", { singleQuote: true }],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", ["parent", "sibling", "index"]],

        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before"
          }
        ],
        "newlines-between": "always"
        // TODO: alphabetize issue, waiting for new relase (https://github.com/benmosher/eslint-plugin-import/pull/1562)
        // alphabetize: {
        //   order: "asc"
        // }
      }
    ]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};

module.exports = {
  "plugins": [
    "react",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "react/hook-use-state": "error",
    "react/no-array-index-key": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        "props": "never",
        "children": "never"
      }
    ]
  }
}

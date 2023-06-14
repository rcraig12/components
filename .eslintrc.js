module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "root": true,
    "parser": "@typescript-eslint/parser",
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "prettier"
    ],
    "rules": {
      "no-console": 1,       // Means warning
      "prettier/prettier": 2 // Means error
    },
    "settings": {
    "react": {
      "version": "detect"
    }
  }
}

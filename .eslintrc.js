module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "key-spacing": [
            "error",
            { "beforeColon": false }
        ],
        "arrow-spacing": "error",
        "space-infix-ops": "error",
        "space-before-blocks": "error",
        "no-multi-spaces": "warn",
        "no-trailing-spaces": "warn",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "comma-spacing": "warn",
        "keyword-spacing": "error",
        "react/jsx-tag-spacing": [
            "error",
            {
                "closingSlash": "never",
                "beforeSelfClosing": "always",
                "afterOpening": "never",
                "beforeClosing": "never"
            }
        ],
        "react/jsx-curly-spacing": [
            "error",
            "never",
            {
                "allowMultiline": true
            }
        ],
        "@typescript-eslint/type-annotation-spacing": "error",
    }
}

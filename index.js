const { join } = require("path");

module.exports = {
    env: {
        browser: false,
        es6: true,
    },
    extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2019,
        project: join(__dirname, "./tsconfig.json"),
        sourceType: "module",
    },
    plugins: [
        "@typescript-eslint",
        "rxjs",
        "implicit-dependencies",
        "filenames",
        "sonarjs"
    ],
    rules: {
        //kushki
        semi: ["error", "always"],
        "no-proto": "error",
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: "const", next: "return" },
        ],
        "prefer-const": "error",
        "no-else-return": ["error", { allowElseIf: true }],
        "no-self-compare": "error",
        "no-script-url": "error",
        "max-params": ["error", 10],
        curly: "off",
        "implicit-dependencies/no-implicit": [
            "error",
            { peer: true, dev: true, optional: true },
        ],
        "arrow-body-style": ["error", "as-needed"],
        "filenames/match-exported": [2, "pascal"],
        "default-case": "error",
        "spaced-comment": ["error", "always"],
        "no-empty": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/member-ordering": [
            "error",
            {
                default: [
                    "public-static-field",
                    "public-instance-field",
                    "private-static-field",
                    "private-instance-field",
                    "public-constructor",
                    "private-constructor",
                    "public-instance-method",
                    "protected-instance-method",
                    "private-instance-method",
                ],
            },
        ],
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-duplicate-case": "error",
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-semi": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-regex-spaces": "error",
        "no-sparse-arrays": "error",
        "no-unexpected-multiline": "error",
        "valid-jsdoc": "error",
        "valid-typeof": "error",
        "no-multi-spaces": "error",
        "handle-callback-err": "error",
        "brace-style": "error",
        "underscore-consistent-invocation": [
            true,
            {
                "style": "static"
            }
        ],
        //rxjs-eslint-rules
        "rxjs/no-create": "off",
        "rxjs/no-tap": "error",
        "rxjs/no-unsafe-switchmap": "error",
        "rxjs/no-internal": "error",
        "rxjs/ban-observables": "error",
        "rxjs/no-unsafe-first": "error",
        "rxjs/prefer-observer": "error",
        "rxjs/no-nested-subscribe": "error",
        "rxjs/no-subclass": "error",
        "rxjs/no-ignored-notifier": "error",
        "rxjs/no-ignored-replay-buffer": "error",
        "rxjs/no-exposed-subjects": "error",
        "rxjs/suffix-subjects": "error",
        "rxjs/no-connectable": "error",
        "rxjs/no-ignored-observable": "error",
        "rxjs/no-async-subscribe": "error",
        "rxjs/no-ignored-subscription": "off",
        "rxjs/no-explicit-generics": "error",
        //sonar
        "sonarjs/no-duplicate-string": "error",
        "sonarjs/prefer-while": "error"
    },
};

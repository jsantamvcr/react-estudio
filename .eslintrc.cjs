module.exports = {
    env: {
        browser: true,
        es2022: true,
        jest: true, // just lint recognize jest globals
    },
    extends: ['eslint:recommended', 'plugin:react-hooks/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        // Rules necessary for the project
    },
};

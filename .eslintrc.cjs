/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    env: {
        browser: true,
        es2021: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
    },
    ignorePatterns: ['out'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base',
        'next/core-web-vitals',
    ],
    rules: {
        '@typescript-eslint/indent': ['error', 4],

        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx'],
            },
        ],
    },
};

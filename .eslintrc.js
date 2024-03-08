module.exports = {
	ignorePatterns: ['babel.config.js'],
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended'
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'react'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'warn',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				ignoreRestSiblings: true
			}
		],
		'prettier/prettier': [
			'warn',
			{
				useTabs: true,
				indentSize: 4,
				singleQuote: true,
				trailingComma: 'none',
				printWidth: 120,
				semi: true,
				bracketSpacing: true,
				bracketSameLine: true,
				arrowParens: 'always',
				parser: 'typescript',
				endOfLine: 'lf'
			}
		]
	}
};

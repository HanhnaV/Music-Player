import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import globals from 'globals'

export default [
	{
		ignores: [
			'**/node_modules/**',
			'**/.expo/**',
			'**/.next/**',
			'**/__generated__/**',
			'**/build/**',
			'/react-native-lab/react-native/**',
			'/docs/react-native-website/**',
			'**/android/**',
			'**/assets/**',
			'**/bin/**',
			'**/fastlane/**',
			'**/ios/**',
			'**/kotlin/providers/**',
			'**/vendored/**',
			'/docs/public/static/**',
		],
	},
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 12,
				sourceType: 'module',
			},
			globals: {
				...globals.node,
				...globals.es2021,
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			...reactPlugin.configs.recommended.rules,
			...reactHooksPlugin.configs.recommended.rules,
			'import/order': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/display-name': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
]

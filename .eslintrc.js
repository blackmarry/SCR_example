/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	'extends': [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript'
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? ['warn', { allow: ['warn', 'error', 'info'] }] : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

		semi: ['warn', 'never'],
		quotes: ['warn', 'single'],
		indent: ['warn', 'tab'],
		'vue/script-indent': ['warn', 'tab'],
		'vue/html-indent': ['warn', 'tab'],
		'no-tabs': ['warn', { allowIndentationTabs: true }],

		'vue/multi-word-component-names': 'off',
		'multiline-ternary': 'off',
		'no-multiple-empty-lines': ['warn', { max: 2, maxBOF: 0, maxEOF: 0 }],
	}
}

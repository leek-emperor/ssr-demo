module.exports = {
	env: {
		browser: true,
		commonjs: true, // ADD, 支持对commonjs全局变量的识别
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime', // 兼容 jsx 新的语法
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: { '@typescript-eslint/no-var-requires': 0 },
};

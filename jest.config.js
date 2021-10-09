module.exports = {
	rootDir: 'resources/js',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		'^~/(.*)$': '<rootDir>/$1',
		'^vue$': 'vue/dist/vue.common.js',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/mocks.js',
		'\\.(css|less)$': '<rootDir>/__mocks__/mocks.js',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'vue', 'json'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.js$': 'babel-jest',
		'.*\\.(vue)$': 'vue-jest',
	},
	collectCoverage: true,
	collectCoverageFrom: [
		'<rootDir>/components/**/*.vue',
		'<rootDir>/layouts/**/*.vue',
		'<rootDir>/pages/**/*.vue',
	],
	coverageDirectory: './coverage',
	coveragePathIgnorePatterns: ['/node_modules/', '/vendor/'],
	coverageReporters: ['text', 'text-summary', 'cobertura', 'json', 'lcov'],
	globals: {
		'ts-jest': {
			babelConfig: true,
			tsConfig: 'jest.tsconfig.json',
		},
		'vue-jest': {
			pug: { doctype: 'html' },
		},
	},
	testEnvironment: 'jsdom',
	testMatch: ['**/*.(test|spec).(ts|tsx|js|jsx)'],
	testURL: 'http://localhost/',
};

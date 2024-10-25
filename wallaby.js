'use strict';

module.exports = function (wallaby) {
	return {
		files: [
			'src/settings.js',
			'test/mocks/databasemock.js',
			'!test/*.js',
		],
		tests: [
			'test/settings.js',
		],
		env: {
			type: 'node',
			runner: 'node',
		},
		testFramework: 'mocha',
		compilers: {
			'**/*.js': wallaby.compilers.babel(),
		},
		debug: true,
	};
};

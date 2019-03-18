/* eslint-disable no-undef */
const path = require('path');

exports.config = {
	allScriptsTimeout: 20000,
	getPageTimeout: 20000,
	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	specs: [path.resolve(`./test/nativeScript/features/*.feature`)],
	capabilities: {
		browserName: `chrome`,
		shardTestFiles: false,
		maxInstances: 1
	},
	disableChecks:true,
	cucumberOpts: {
		require: [path.resolve(`./test/nativeScript/steps/**/*.js`)],
		tags: `@aliaksandr3`,
		ignoreUncaughtExceptions: true,
		format: `json:./reports/report.json`,
	},
	onPrepare: () => {
		browser.manage().window().maximize();
	}
};	
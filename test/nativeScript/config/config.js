/* eslint-disable no-undef */
const path = require('path');
const logger = require(path.resolve(`./test/nativeScript/config/loggerConfig.js`)).logger;

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
		tags: `@All`,
		ignoreUncaughtExceptions: true,
		format: `json:./reports/report.json`,
	},
	onPrepare: () => {
		logger.info(`Maximizing browser window`);
		browser.manage().window().maximize();
	}
};	
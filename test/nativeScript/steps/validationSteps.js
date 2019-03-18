/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { Then } = require(`cucumber`);
const path = require(`path`);
const stepFunctions = require(`./stepFunctions`);
const { expect } = require(`chai`);
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;



Then(/^Count of "([^"]*)" should( not)? be "([^"]*)"$/, async (alias, notArg, expectedNumber) => {
	notArg = notArg ? ` not` : ``;
	let element = await stepFunctions.getPageObjectElement(alias);
	let result = await element.length;
	expectedNumber = parseInt(expectedNumber);
	if (notArg) {
		return expect(result).to.not.equal(expectedNumber);
	} else {
		return expect(result).to.equal(expectedNumber);
	}
});

Then(/^Class Attribute of "([^"]*)" from "([^"]*)" should( not)? be "([^"]*)"$/, async (position, alias, notArg, expectedValue) => {
	notArg = notArg ? ` not` : ``;
	const element = await (stepFunctions.getSomeElementFromArray(position, alias));
	const classAtr = await element.getAttribute('class');
	if (notArg) {
		return expect(classAtr).to.not.equal(expectedValue);
	} else {
		return expect(classAtr).to.equal(expectedValue);
	}

});

Then(/^Text of each "([^"]*)" should( not)? contain "([^"]*)"$/, async (alias, notArg, textToContain) => {
	notArg = notArg ? ` not` : ``;
	let elements = await stepFunctions.getPageObjectElement(alias);
	let wrongStrings = [];
	for (let i = 0; i < elements.length; i++) {
		if (!(await elements[i].getText()).includes(textToContain)) {
			wrongStrings.push(await elements[i].getText());
		}
	}
	return wrongStrings.length ? Promise.reject(new Error(`Strings not containing "${textToContain}":\n${wrongStrings.join(`\n`)}`)) : Promise.resolve();
});

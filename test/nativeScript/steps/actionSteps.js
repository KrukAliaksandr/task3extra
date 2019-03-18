/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let { When } = require(`cucumber`);
const path = require(`path`);
const pageSelector = require(`../utils/pageSelector`);
const stepFunctions = require(`./stepFunctions`);
const { setDefaultTimeout } = require(`cucumber`);

const {expectedConditions} = protractor;
setDefaultTimeout(60 * 1000);

When(/^I open "([^"]*)" url$/, (url) => {
	return browser.get(url);
});
  
When(/^I type "([^"]*)" in "([^"]*)"$/, async (text, alias) => {
	return (await stepFunctions.getPageObjectElement(alias)).sendKeys(text);
});
  
When(/^I click on "([^"]*)" element from "([^"]*)"$/, async (position, alias) => {
    
	return (await stepFunctions.getSomeElementFromArray(position, alias)).click();
});
  
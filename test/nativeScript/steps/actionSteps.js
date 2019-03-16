/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let { When } = require(`cucumber`);
const path = require(`path`);
const pageSelector = require(`../utils/pageSelector`);
const stepFunctions = require(`./stepFunctions`);

const {expectedConditions} = protractor;

When(/^I open "([^"]*)" url$/, (url) => {
	return browser.get(url);
});
  
When(/^I click "([^"]*)"$/, async (alias) => {
	
     
});

When(/^I type "([^"]*)" in "([^"]*)"$/, async (text, alias) => {
	
});

When(/^I click on "([^"]*)" element from "([^"]*)"$/, async (position, alias) => {
	return (await stepFunctions.getSomeElementFromArray(position, alias)).click();
});
  
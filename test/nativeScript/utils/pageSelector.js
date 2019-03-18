/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const path = require('path');


const pagesEnum = {
	"MAIN": {
		po: require(path.resolve(`./test/nativescript/pages/mainPage.json`)),
		symptomes: [/^https:\/\/market\.nativescript\.org\/$/, /\?tab=templates/]
	},
	"PLUGINS":
	{
		po: require(path.resolve(`./test/nativescript/pages/searchResultsPage.json`)),
		symptomes: [/\?tab=plugins$/]
	}
};

const getPage = async () => {
	let currentUrl = await browser.getCurrentUrl();
	currentUrl = currentUrl.endsWith(`/`) ? currentUrl : currentUrl + `/`;
	console.log(`currurl - ${currentUrl}`);
	for (const page in pagesEnum) { // Check every ENUM page
		for (let symptome of pagesEnum[page].symptomes) {
			if (currentUrl.search(symptome) >= 0) {
				console.log(`PageObject - ${page}`);
				console.log(pagesEnum[page].po);
				return pagesEnum[page].po;
			}
		}
	}
};


module.exports = {
	getPage
};
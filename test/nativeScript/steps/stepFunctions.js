/* eslint-disable no-undef */
const pageSelector = require(`../utils/pageSelector`);
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;

const getPageObjectElement = async (alias) => {
	let pageElement = (await pageSelector.getPage())[alias];
	if (pageElement[`isCollection`]) {
		pageElement = await $$(pageElement.selector);
		return pageElement;
	} else {
		pageElement = await $(pageElement.selector);
		return pageElement;
	}
};

let getSomeElementFromArray = async (position, alias) => {
	let element;
	const elements = await getPageObjectElement(alias);
	if (isNaN(position)) {
		switch (position) {
		case `any`:
			logger.debug(elements.length + `Elements`);
			// eslint-disable-next-line no-case-declarations
			const index = Math.floor(Math.random() * elements.length);
			element = elements[index];
			break;
		default:
			logger.error(`Wrong element position: [${position}]`);
			throw new Error(`Wrong element position.`);
		}
	} else {
		element = elements[position];
	}
	return element;
};

let getElementFromCollectionByText = async (alias, text) => {
	const itemsLocator = (await pageSelector.getPage())[alias].items;
	const element = await getPageObjectElement(alias);
	const items = await element.$$(itemsLocator);
	logger.debug(items.length);
	for (let i = 0; i < items.length; i++) {
		const itemText = await (items[i]).getText();
		logger.debug(itemText + ` - Inner Element text (getElementFromCollectionByText)`);
		if (itemText.includes(text)) {
			return items[i];
		}
	}
	throw new Error(`No element with text [${text}] in [${alias}]!`);
};


module.exports = {
	getPageObjectElement,
	getElementFromCollectionByText,
	getSomeElementFromArray,
};
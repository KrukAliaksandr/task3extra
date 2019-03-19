const fs = require(`fs-extra`);
const path = require(`path`);

fs.existsSync(path.resolve(`./reports/`))||fs.mkdirSync(path.resolve(`./reports/`));
fs.existsSync(path.resolve(`./logs/`))||fs.mkdirSync(path.resolve(`./logs/`));

fs.emptyDirSync(path.resolve(`./reports/`));
fs.emptyDirSync(path.resolve(`./logs/`));
const cheerio = require('cheerio');

module.exports = (html) => {
	const $ = cheerio.load(html);

	const commits = [];
	$('.commit-group a.sha');

	return {
		lastCommit: ''
	};
};

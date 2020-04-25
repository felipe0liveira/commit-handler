const cheerio = require('cheerio');

module.exports = (html) => {
	const $ = cheerio.load(html);

	const commits = [];

	const commitElements = $('.commit-group a.sha');

	for (let i = 0; i < commitElements.length; i++) {
		const commit = commitElements[i];

		const href = commit.attribs.href;
		const hash = href.substr(href.length - 40);

		commits.push({
			hash
		});
	}

	return commits;
};

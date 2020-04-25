const https = require('https');
const scrapper = require('./scrapper');

const options = {
	hostname: 'github.com',
	path: '/felipe0liveira/felipe0liveira.dev/commits/master',
	method: 'GET'
};

const getGithub = () => {
	const initialTimeStamp = new Date();
	const req = https.request(options, res => {
		let data = '';
		res.on('data', d => data += d);

		res.on('end', () => {
			const commits = scrapper(data);
			console.log('|');
			console.log(`| Hash Found: ${commits[0].hash}`);
			console.log(`| Elapsed Time: ${(new Date - initialTimeStamp) / 1000}s`);
			console.log('|');

			getGithub();
		});
	});

	req.end();
}

console.clear();
getGithub();
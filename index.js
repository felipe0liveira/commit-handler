const https = require('https');

// https://github.com/felipe0liveira/felipe0liveira.dev/commits/master

const options = {
	hostname: 'github.com',
	path: '/felipe0liveira/felipe0liveira.dev/commits/master',
	method: 'GET'
};

const req = https.request(options, res => {
	let data = '';
	res.on('data', d => data += d);

	res.on('end', () => {
		console.log(data);
	});
});

req.end();

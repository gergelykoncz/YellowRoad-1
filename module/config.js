var path = require('path');
var ip = require('ip');

var protocol = 'http://';
var domain = '';
var port = 3333;

var getPublicUrl = () => {
	if (domain === '') {
		domain = ip.address();
	}
	return protocol + domain + ':' + port;
};

module.exports = {
	vars: {},
	protocol: protocol,
	domain: domain,
	port: port,
	getPublicUrl: getPublicUrl
};

const Client = require('./Client');

function PBL(options) {
	return new Client(options);
}

PBL.Client = Client;

module.exports = PBL;

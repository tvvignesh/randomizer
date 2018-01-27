'use strict';

module.exports = {
	app: {
		title: 'Randomizer',
		description: 'Randomizer app',
		url: 'http://localhost'
	},
	port: process.env.NODEJS_PORT || 8082,
	hostname: process.env.NODEJS_IP || 'localhost'
};

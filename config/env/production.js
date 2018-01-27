'use strict';

module.exports = {
	app: {
		title: 'Ramco API',
		description: 'Ramco API app',
		url : 'http://localhost:3000'
	},
  port: process.env.NODEJS_PORT || 3000,
	hostname: process.env.NODEJS_IP || 'localhost',
	clientId: 'f0GPrsWJhScb5fadeTgvso6UVzwa',
	redirectUri: 'http://localhost:8081/cb',
	dataSource: 'ignite'
};

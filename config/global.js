var baseURL = 'http://a76f05ff11db011e7a7b41283e06dba7-1443541100.us-east-1.elb.amazonaws.com:9000';

var demoData = [
	
	{
		id: 1,
		serviceName: 'ironman',
		dbNames: ['mongoDB']
	},
	{
		id: 1,
		serviceName: 'pricing',
		dbNames: ['mongoDB', 'mysql']
	},
	{
		id: 1,
		serviceName: 'bumblebee',
		dbNames: ['mongoDB', 'mssql', 'posgres']
	},
	{
		id: 1,
		serviceName: 'heimdall',
		dbNames: ['mongoDB']
	},
	{
		id: 1,
		serviceName: 'pcm',
		dbNames: ['mongoDB', 'posgres']
	}
	
]



exports.baseURL = baseURL;
exports.demoData = demoData;

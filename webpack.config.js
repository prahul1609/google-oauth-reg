var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client');

var config = {
   entry: [
      APP_DIR + '/index'
   ],
	
   output: {
      path: APP_DIR,
      filename: 'index.js',
      publicPath: '/public/'
   },
	
   devServer: {
      inline: true,
      port: 9000
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?/,
            exclude: /node_modules/,
            loader: 'babel',
            include : APP_DIR
         }
      ]
   }
}

module.exports = config;

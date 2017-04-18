(function () {
	
	'use strict';

	var express = require('express');
	var app = express();
	var http = require('http');
	var expressSession = require('express-session');
	var config = require('./webpack.config');
	var webpack = require('webpack');
	var webpackDevMiddleware = require('webpack-dev-middleware');
	var webpackHotMiddleware = require('webpack-hot-middleware');
	var webpackServerMiddleware = require('webpack-server-middleware');

	//var passport = require('passport');
	//var bodyParser = require('body-parser');
	var port = process.env.PORT || 9000;

	//app.use(bodyParser.urlencoded({extended: true});
    var compiler = webpack(config);
	app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
	app.use(webpackHotMiddleware(compiler));
	//app.use(webpackServerMiddleware(compiler));

	app.use(expressSession({
        secret: 'secret',
        resave: false,
        saveUninitialized: true
    }));

    app.use(express.static(__dirname + '/bower_components'));
    app.use(express.static(__dirname + '/client/public'));
    app.set('view engine', 'ejs');


	app.use(function (req, res, next) {
    if (!req.session) {
        return next(new Error('oh no')); // handle error
    }
    next();
});

	var passport = require('./config/passport');
	app.use(passport.initialize());
	app.use(passport.session());

	var router = require('./routes')(app, passport);

	var server = app.listen(port, function () {
		console.log('Server started listening on port :' + port);
	});

})();

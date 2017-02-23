(function () {
	
	'use strict';

	var express = require('express');
	var app = express();
	var http = require('http');
	var expressSession = require('express-session');
	//var passport = require('passport');
	//var bodyParser = require('body-parser');
	var port = 9000;

	//app.use(bodyParser.urlencoded({extended: true});

	app.use(expressSession({
        secret: 'secret',
        resave: false,
        saveUninitialized: true
    }));

    app.use(express.static(__dirname + '/bower_components'));
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

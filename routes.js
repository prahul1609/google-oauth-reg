var authData = require('./models/authData');
var Client = require('node-rest-client').Client;
var rest = new Client();

module.exports = function(app, passport) {

	// GET /auth/google - redirecting user to google login page
	app.get('/auth/google', 
		passport.authenticate('google', {scope: ['email', 'profile'] })
	);

	// GET /auth/google/callback - redirected back to our login page
	app.get('/auth/google/callback',
		passport.authenticate('google', {failureRedirect: '/login'}),
		function(req, res) {
			console.log('Google login successful')
			res.redirect('/profile');
		}
	);


	//routes------
	app.get('/', function(req, res) {
		res.send('Welcome');
	});

	app.get('/login', function(req, res) {
		res.render('login');
	});

	app.get('/profile', function(req ,res) {
		res.render('profile' , {
			user: req.user
		})
	});

	app.get('/logout', function(req, res) {
		req.session.destroy(function(e){
        	req.logout();
        	//res.render('login');
    	});
        revokeAccessToken(function(err, data) {
        	if (err) {
        		res.status(400).send({errMsg: 'Unable to logout completely. Please try again'});
        	} else {
        		res.redirect('/login');
        	}
        })
    });

    //Usage functions-----

	function revokeAccessToken(callBack) {
		var url = 'https://accounts.google.com/o/oauth2/revoke?token='+authData.getAuthData().accessToken ;
		rest.get(url, function(data, response) {
			if (response.statusCode === 200) {
				callBack(null, data);
			} else {
				callBack(data);
			}
		})
	}
}

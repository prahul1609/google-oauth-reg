var passport = require('passport');
var googleStrategy = require('passport-google-oauth').OAuth2Strategy;
var authConfig = require('./auth');
var authDataModel = require('../models/authData');
var Client = require('node-rest-client').Client;
var rest = new Client();

(function() {
	// used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
    	var userData = authDataModel.getUserData();
    	if (userData.id === id) {
    		done(null, userData);
    	} else {
    		done({errMsg: 'Unable to get user data'});
    	}
    });

	passport.use(new googleStrategy({
		clientID: authConfig.googleAuth.clientID,
		clientSecret: authConfig.googleAuth.clientSecret,
		callbackURL: authConfig.googleAuth.callbackURL
	}, function(accessToken, refreshToken, profile, callBack) {
			
			if(profile._json.domain === 'arvindinternet.com') {
				var url = "https://www.googleapis.com/oauth2/v3/tokeninfo?access_token="+accessToken;
				console.log(url);
				rest.get(url, function(data, response) {
					if (response.statusCode >= 400) return callBack(data);
					if (data.email_verified && data.email === profile.emails[0].value) {
						authDataModel.setAuthData(accessToken, refreshToken, profile);
						return callBack(null, {id: profile.id, name: profile.name, emails: profile.emails});
					}
					
				});
			} else {
				callBack({errMsg: 'Please access only with AIL account'});
			}
			
		}
	));
})();

module.exports = passport;

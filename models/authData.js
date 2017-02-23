var _ = require('lodash');

module.exports = { getUserData, getAuthData, setAuthData, resetAuthData };

var authData = {} , userData = {};

function setUserData(profile) {
	_.extend(userData, _.pick(profile, 'id', 'name', 'emails'));
}

function setAuthData(accessToken, refreshToken, profile) {
	authData.accessToken = accessToken;
	authData.refreshToken = refreshToken;
	authData.profile = profile;
	setUserData(profile);
}

function resetAuthData() {
	authData = null;
	userData = null;
}

function getUserData() {
	return userData;
}

function getAuthData() {
	return authData;
}

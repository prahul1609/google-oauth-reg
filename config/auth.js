module.exports = {

	googleAuth: {
		'clientID' : process.env.clientID || '62697760995-fkfi54cd0ofjdf5osbj2beihq36m7uua.apps.googleusercontent.com',
		'clientSecret' : process.env.clientSecret || 'Db2oMObPDqsamhOh8lyjQtUF',
		'domainURL' : process.env.domainURL || 'http://localhost:9000',
		'callbackURL' : '/auth/google/callback'
	}
}

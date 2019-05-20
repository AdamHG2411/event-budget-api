const User = require('./models/User.js');
const data = require('./data.json');

User.deleteMany({}).then(() => {
	console.log('deleted all users');
	User.create(data).then((users) => {
		console.log(users);
	});
});

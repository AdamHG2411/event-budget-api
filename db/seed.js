const { User, Bill, Event, Expense } = require('./models.js');
const data = require('./data.json');

User.deleteMany({}).then(() => {
	Bill.deleteMany({}).then(() => {
		Event.deleteMany({}).then(() => {
			Expense.deleteMany({}).then(() => {
				User.create(data);
			});
		});
	});
});

const { User, Bill, Event, Expense } = require('./models.js');

User.deleteMany({}).then(() => {
	Bill.deleteMany({}).then(() => {
		Event.deleteMany({}).then(() => {
			Expense.deleteMany({});
		});
	});
});

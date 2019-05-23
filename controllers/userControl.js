let { User } = require('../db/models.js');

module.exports = {
	index: (req, res) => {
		User.find({}).then((users) => {
			res.json(users);
		});
	},
	findById: (req, res) => {
		User.findOne({ _id: req.params.userId }).then((user) => {
			res.json(user);
		});
	},
	create: (req, res) => {
		User.create(req.body).then((user) => {
			res.json(user);
		});
	},
	update: (req, res) => {
		User.updateOne({ _id: req.params.userId }, req.body).then((user) => {
			res.json(user);
		});
	},
	delete: (req, res) => {
		Event.find({ userId: req.params.userId }).then((events) => {
			events.forEach((event) => {
				Expense.deleteMany({ eventId: event._id }).then((expenses) => {
					console.log(expenses);
					Event.deleteMany({ userId: req.params.userId }).then((events) => {
						console.log(events);
						Bill.deleteMany({ userId: req.params.userId }).then((bills) => {
							console.log(bills);
							User.deleteOne({ _id: req.params.userId }).then((user) => {
								console.log(user);
							});
						});
					});
				});
			});
		});
	}
};

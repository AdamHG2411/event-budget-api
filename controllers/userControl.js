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
		User.findOne({ _id: req.params.userId }).then((user) => {
			if (user.events) {
				Event.find({ userId: req.params.userId }).then((events) => {
					events.forEach((thisEvent) => {
						console.log(thisEvent);
						if (thisEvent.expenses) {
							Expense.deleteMany({ eventId: event._id }).then((delExp) => {
								console.log(delExp);
							});
						}
						Event.deleteOne({ _id: event._id }).then((delEvent) => {
							console.log(delEvent);
						});
					});
				});
			}
			if (user.bills) {
				Bill.deleteMany({ userId: req.params.userId }).then((delBills) => {
					console.log(delBills);
				});
			}
			User.deleteOne({ _id: req.params.userId }).then((delUser) => {
				res.json(delUser);
			});
		});
	}
};

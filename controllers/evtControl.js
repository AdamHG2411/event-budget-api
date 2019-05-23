const { User, Event } = require('../db/models.js');

module.exports = {
	index: (req, res) => {
		Event.find({ userId: req.params.userId }).then((events) => res.json(events));
	},
	findById: (req, res) => {
		Event.findOne({ _id: req.params.eventId }).then((event) => {
			res.json(event);
		});
	},
	create: (req, res) => {
		User.findOne({ _id: req.params.userId }).then((user) => {
			Event.create(req.body).then((newEvent) => {
				user.events.push(newEvent._id);
				user.save();
				Event.updateOne({ _id: newEvent._id }, { userId: req.params.userId }).then((event) => {
					res.json(event);
				});
			});
		});
	},
	update: (req, res) => {
		Event.updateOne({ _id: req.params.eventId }, req.body).then((event) => {
			res.json(event);
		});
	},
	delete: (req, res) => {
		User.findOne({ _id: req.params.userId }).then((user) => {
			Event.deleteOne({ _id: req.params.eventId }).then((event) => {
				Expense.deleteMany({ eventId: req.params.eventId }).then((exp) => {
					let newEvents = user.events.filter((event) => event != req.params.eventId);
					user.events = newEvents;
					user.save();
					res.json(event);
				});
			});
		});
	}
};

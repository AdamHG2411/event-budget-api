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
		User.deleteOne({ _id: req.params.userId }).then((user) => {
			res.json(user);
		});
	}
};

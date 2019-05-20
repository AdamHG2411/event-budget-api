let User = require('../db/models/User.js');

module.userorts = {
	index: (req, res) => {
		User.find({}).then((users) => {
			res.json(users);
		});
	},
	findById: (req, res) => {
		User.find({ _id: req.params.id }).then((user) => {
			res.json(user);
		});
	},
	create: (req, res) => {
		User.create(req.body).then((user) => {
			res.json(user);
		});
	},
	update: (req, res) => {
		User.update({ _id: req.params.id }, req.body).then((user) => {
			res.json(user);
		});
	},
	delete: (req, res) => {
		User.delete({ _id: req.params.id }).then((user) => {
			res.json(user);
		});
	}
};

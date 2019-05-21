let { User } = require('../db/models.js');

module.exports = {
	index: (req, res) => {
		User.find({}).then((exps) => {
			res.json(exps);
		});
	},
	findById: (req, res) => {
		User.find({ _id: req.params.id }).then((exp) => {
			res.json(exp);
		});
	},
	create: (req, res) => {
		User.create(req.body).then((exp) => {
			res.json(exp);
		});
	},
	update: (req, res) => {
		User.update({ _id: req.params.id }, req.body).then((exp) => {
			res.json(exp);
		});
	},
	delete: (req, res) => {
		User.delete({ _id: req.params.id }).then((exp) => {
			res.json(exp);
		});
	}
};

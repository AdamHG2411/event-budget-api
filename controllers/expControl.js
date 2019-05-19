let Expense = require('../db/models/Expense.js');

module.exports = {
	index: (req, res) => {
		Expense.find({}).then((exps) => {
			res.json(exps);
		});
	},
	findById: (req, res) => {
		Expense.find({ _id: req.params.id }).then((exp) => {
			res.json(exp);
		});
	},
	create: (req, res) => {
		Expense.create(req.body).then((exp) => {
			res.json(exp);
		});
	},
	update: (req, res) => {
		Expense.update({ _id: req.params.id }, req.body).then((exp) => {
			res.json(exp);
		});
	},
	delete: (req, res) => {
		Expense.delete({ _id: req.params.id }).then((exp) => {
			res.json(exp);
		});
	}
};

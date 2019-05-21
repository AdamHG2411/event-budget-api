let { User } = require('../db/models.js');

module.exports = {
	index: (req, res) => {
		User.find({}).then((evts) => {
			res.json(evts);
		});
	},
	findById: (req, res) => {
		User.find({ _id: req.params.id }).then((evt) => {
			res.json(evt);
		});
	},
	create: (req, res) => {
		User.create(req.body).then((evt) => {
			res.json(evt);
		});
	},
	update: (req, res) => {
		User.update({ _id: req.params.id }, req.body).then((evt) => {
			res.json(evt);
		});
	},
	delete: (req, res) => {
		User.findOne({ _id: req.params.id }).then((evt) => {
			evt.expenses.forEach((exp) => {
				Expense.deleteOne({ _id: exp }).then(() => {
					User.deleteOne({ _id: req.params.id }).then((deleted) => {
						res.json(deleted);
					});
				});
			});
		});
	}
};

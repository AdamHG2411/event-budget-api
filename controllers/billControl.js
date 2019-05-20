let Bill = require('../db/models/Bill.js');

module.exports = {
	index: (req, res) => {
		Bill.find({}).then((bills) => {
			res.json(bills);
		});
	},
	findById: (req, res) => {
		Bill.find({ _id: req.params.id }).then((bill) => {
			res.json(bill);
		});
	},
	create: (req, res) => {
		Bill.create(req.body).then((bill) => {
			res.json(bill);
		});
	},
	update: (req, res) => {
		Bill.update({ _id: req.params.id }, req.body).then((bill) => {
			res.json(bill);
		});
	},
	delete: (req, res) => {
		Bill.delete({ _id: req.params.id }).then((bill) => {
			res.json(bill);
		});
	}
};

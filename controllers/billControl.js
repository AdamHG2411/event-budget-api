const { User, Bill } = require('../db/models.js');

module.exports = {
	index: (req, res) => {
		Bill.find({ userId: req.params.userId }).then((bills) => res.json(bills));
	},
	findById: (req, res) => {
		Bill.findOne({ _id: req.params.billId }).then((bill) => {
			res.json(bill);
		});
	},
	create: (req, res) => {
		User.findOne({ _id: req.params.userId }).then((user) => {
			Bill.create(req.body).then((bills) => {
				bills.forEach((bill) => {
					user.bills.push(bill._id);
					user.save();
					Bill.updateOne({ _id: bill._id }, { userId: req.params.userId }).then((newBill) => {
						res.json(newBill);
					});
				});
			});
		});
	},
	update: (req, res) => {
		Bill.updateOne({ _id: req.params.billId }, req.body).then((bill) => {
			res.json(bill);
		});
	},
	delete: (req, res) => {
		User.findOne({ _id: req.params.userId }).then((user) => {
			Bill.deleteOne({ _id: req.params.billId }).then((bill) => {
				let newBills = user.bills.filter((bill) => bill != req.params.billId);
				user.bills = newBills;
				user.save();
				res.json(bill);
			});
		});
	}
};

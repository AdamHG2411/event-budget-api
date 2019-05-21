const { Event, Expense } = require('../db/models.js');

module.exports = {
	index: (req, res) => {
		Expense.find({}).then((expenses) => res.json(expenses));
	},
	findById: (req, res) => {
		Expense.findOne({ _id: req.params.expenseId }).then((expense) => {
			res.json(expense);
		});
	},
	create: (req, res) => {
		Event.findOne({ _id: req.params.eventId }).then((event) => {
			Expense.create(req.body).then((newExpense) => {
				event.expenses.push(newExpense._id);
				event.save();
				Expense.updateOne({ _id: newExpense._id }, { eventId: req.params.eventId }).then((expense) => {
					res.json(expense);
				});
			});
		});
	},
	update: (req, res) => {
		Expense.updateOne({ _id: req.params.expenseId }, req.body).then((expense) => {
			res.json(expense);
		});
	},
	delete: (req, res) => {
		Event.findOne({ _id: req.params.eventId }).then((event) => {
			Expense.deleteOne({ _id: req.params.expenseId }).then((expense) => {
				let newExpenses = event.expenses.filter((expense) => expense != req.params.expenseId);
				event.expenses = newExpenses;
				event.save();
				res.json(expense);
			});
		});
	}
};

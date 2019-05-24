const { Event, Expense } = require('../db/models.js');

module.exports = {
	index: (req, res) => {
		Expense.find({ eventId: req.params.eventId }).then((expenses) => res.json(expenses));
	},
	findById: (req, res) => {
		Expense.findOne({ _id: req.params.expenseId }).then((expense) => {
			res.json(expense);
		});
	},
	create: (req, res) => {
		Event.findOne({ _id: req.params.eventId }).then((foundEvent) => {
			Expense.create(req.body).then((newExpenses) => {
				newExpenses.forEach((newExpense) => {
					foundEvent.expenses.push(newExpense._id);
					foundEvent.save();
					newExpense.eventId = foundEvent._id;
					newExpense.save();
				});
				res.json(newExpenses);
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

const mongoose = require('./connection.js');

const Expense = new mongoose.Schema({
	name: String,
	eventId: { ref: 'Event', type: mongoose.Schema.Types.ObjectId },
	cost: Number,
	category: String,
	url: String,
	purchased: Boolean,
	essential: Boolean
});

const Event = new mongoose.Schema({
	name: String,
	userId: { ref: 'User', type: mongoose.Schema.Types.ObjectId },
	dates: {
		start: Date,
		end: Date
	},
	expenses: [ { ref: 'Expense', type: mongoose.Schema.Types.ObjectId } ]
});

const Bill = new mongoose.Schema({
	name: String,
	userId: { ref: 'User', type: mongoose.Schema.Types.ObjectId },
	amount: Number,
	freq: Number,
	category: String
});

const User = new mongoose.Schema({
	username: String,
	password: String,
	income: Number,
	bills: [ { ref: 'Bill', type: mongoose.Schema.Types.ObjectId } ],
	events: [ { ref: 'Event', type: mongoose.Schema.Types.ObjectId } ]
});

const UserModel = mongoose.model('User', User);
const BillModel = mongoose.model('Bill', Bill);
const EventModel = mongoose.model('Event', Event);
const ExpenseModel = mongoose.model('Expense', Expense);

module.exports = { User: UserModel, Bill: BillModel, Event: EventModel, Expense: ExpenseModel };

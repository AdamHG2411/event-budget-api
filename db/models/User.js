const mongoose = require('../connection.js');

//models structure inspired by Rasha Baig
const Expense = new mongoose.Schema({
	name: String,
	cost: Number,
	category: String,
	url: String,
	purchased: Boolean,
	essential: Boolean
});

const Event = new mongoose.Schema({
	name: String,
	dates: {
		start: Date,
		end: Date
	},
	expenses: [ Expense ]
});

const Bill = new mongoose.Schema({
	name: String,
	amount: Number,
	freq: Number,
	category: String
});

const User = new mongoose.Schema({
	username: String,
	password: String,
	income: Number,
	bills: [ Bill ],
	events: [ Event ]
});

module.exports = mongoose.model('User', User);

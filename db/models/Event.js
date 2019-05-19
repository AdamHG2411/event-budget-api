const mongoose = require('../connection.js');

const Event = new mongoose.Schema({
	name: String,
	code: String,
	dates: {
		start: Date,
		end: Date
	},
	expenses: [
		{
			ref: 'Expense',
			type: mongoose.Schema.Types.ObjectId
		}
	]
});

module.exports = mongoose.model('Event', Event);

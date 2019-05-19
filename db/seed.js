const mongoose = require('./connection.js');

const Event = require('../db/models/Event.js');
const Expense = require('../db/models/Expense.js');
const evtData = require('./evtData.json');

//Delete all entries
Event.deleteMany({}).then(() => {
	console.log('deleted all events');
	Expense.deleteMany({}).then(() => {
		console.log('deleted all expenses');
		//Seed events collection
		Event.create(evtData).then((events) => {
			//Seed expenses collection
			Expense.create(evtData).then(() => {
				//Find the expenses associated with each event and push them to the event's expenses array
				events.forEach((event) => {
					Expense.find({ evtCode: event.code }).then((expenses) => {
						expenses.forEach((expense) => {
							event.expenses.push(expense._id);
						});
					});
				});
			});
		});
	});
});

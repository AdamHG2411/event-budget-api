let Event = require('../db/models/Event.js');

module.exports = {
	index: (req, res) => {
		Event.find({}).then((evts) => {
			res.json(evts);
		});
	},
	findById: (req, res) => {
		Event.find({ _id: req.params.id }).then((evt) => {
			res.json(evt);
		});
	},
	create: (req, res) => {
		Event.create(req.body).then((evt) => {
			res.json(evt);
		});
	},
	update: (req, res) => {
		Event.update({ _id: req.params.id }, req.body).then((evt) => {
			res.json(evt);
		});
	},
	delete: (req, res) => {
		Expense.deleteMany({ evtId: req.params.id }).then(() => {
			Event.delete({ _id: req.params.id }).then((evt) => {
				res.json(evt);
			});
		});
	}
};

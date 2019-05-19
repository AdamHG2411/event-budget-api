const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const app = express();
const evtRouter = require('./routes/evtRoute.js');
const expRouter = require('./routes/expRoute.js');

app.use(cors());

app.use(
	parser.urlencoded({
		extended: true
	})
);
app.use(parser.json());

app.use('/api/events/', evtRouter);
app.use('/api/expenses', expRouter);

app.listen(3001, () => {
	console.log('planning a much-needed vacation on 3001');
});

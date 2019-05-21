const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/userRoute.js');
const billRouter = require('./routes/billRoute.js');
const eventRouter = require('./routes/evtRoute.js');
const expenseRouter = require('./routes/expRoute.js');

app.use(cors());

app.use(
	parser.urlencoded({
		extended: true
	})
);
app.use(parser.json());

app.use('/api/users/', userRouter);
app.use('/api/:userId/bills/', billRouter);
app.use('/api/:userId/events/:eventId/expenses', expenseRouter);
app.use('/api/:userId/events/', eventRouter);

app.get('/', (req, res) => {
	res.redirect('/api/users');
});
app.get('/api/', (req, res) => {
	res.redirect('/api/users/');
});

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
	console.log(`planning a much-needed vacation on ${app.get('port')}`);
});

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const fieldsRoute = require('./routes/fields');
const formsRoute = require('./routes/forms');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', (req, res) => res.send('Pong'));
app.use('/fields', fieldsRoute);
app.use('/forms', formsRoute);

// Waterfalls down to next fxn
app.use(function(req, res, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Collects all errors
app.use(function (err, req, res) {
	res.status(err.status || 500);
	res.json({
		error: req.app.get('env') === 'development' ? err.message : {}
	});
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;
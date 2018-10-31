'use strict';

const express = require('express');
const router = express.Router();
const { getFields, getField, addField, updateField, deleteField } = require('../database/queries');

router.get('/', (req, res) => {
	getFields()
		.then(function (fields) {
			res.json({ message: fields });
		})
		.catch((error) => {
			error.status = 500;
			next(error.message)
		});
});

router.get('/:id', (req, res, next) => {
	getField(req.params.id)
		.then((result) => {
			if (result) {
				res.json({ message: result });
			} else {
				const error = new Error('Not Found');
				error.status = 404;
				next(error.message);
			}
		})
		.catch((error) => {
			error.status = 400;
			next(error.message)
		});
});

router.post('/', (req, res, next) => {
	addField(req.body)
		.then((response) => {
			res.json({ message: response });
		})
		.catch((error) => {
			error.status = 400;
			next(error.message)
		});
});

router.put('/:id', (req, res, next) => {
	updateField(req.params.id, req.body)
		.then((response) => {
			res.json({ message: response });
		})
		.catch((error) => {
			error.status = 400;
			next(error.message)
		});
});

router.delete('/:id', (req, res, next) => {
	deleteField(req.params.id)
		.then()
		.catch((error) => {
			error.status = 400;
			next(error.message)
		});
});

module.exports = router;
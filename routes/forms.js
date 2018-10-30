'use strict'

const express = require('express');
const router = express.Router();
const { isValidId, isValidForm } = require('../utils/validations');
const { getForms, getForm, addForm, updateForm, deleteForm } = require('../database/queries');

router.get('/', (req, res) => {
	getForms()
		.then(function (forms) {
			res.json({ forms });
		});
});

router.get('/:id', (req, res, next) => {
	const [err] = isValidId.validateSync(req.params);
	if (err) {
		err.status = 400;
		return next(err.message);
	}
	getForm(req.params.id)
		.then((result) => {
			if (result) {
				res.json({ message: result });
			} else {
				const error = new Error('Not Found');
				error.status = 404;
				next(error);
			}
		})
		.catch((error) => next(new Error(error)));
});

router.post('/', (req, res, next) => {
	const [err] = isValidForm.validateSync(req.body);
	if (err) {
		err.status = 400;
		return next(err.message);
	}
	addForm(req.body)
		.then((result) => {
			res.json({ message: result });
		})
		.catch((error) => {
			error.status = 400;
			next(error)
		});
});

router.put('/:id', (req, res, next) => {
	const [err] = isValidForm.validateSync(req.body);
	if (err) {
		err.status = 400;
		return next(err.message);
	}
	updateForm(req.params.id, req.body)
		.then((result) => {
			res.json({ message: result });
		})
		.catch((error) => {
			error.status = 400;
			next(error)
		});
});

router.delete('/:id', (req, res, next) => {
	const [err] = isValidId.validateSync(req.body.id);
	if (err) {
		err.status = 400;
		return next(err.message);
	}
	deleteForm(req.params.id)
		.then()
		.catch((error) => {
			error.status = 400;
			next(error)
		});
});

module.exports = router;
const express = require('express');
const router = express.Router();
const { isValidField, isValidId } = require('../utils/validations');
const { getFields, getField, addField, updateField, deleteField } = require('../database/queries');

router.get('/', (req, res) => {
	getFields()
		.then(function (fields) {
			res.json({ message: fields });
		})
		.catch((error) => {
			error.status = 500;
			next(error)
		});
});

router.get('/:id', (req, res, next) => {
	const [err] = isValidId.validateSync(req.params);
	if (err) {
		err.status = 400;
		return next(err.message);
	}
	getField(req.params.id)
		.then((result) => {
			if (result) {
				res.json({ message: result });
			} else {
				const error = new Error('Not Found');
				error.status = 404;
				next(error);
			}
		})
		.catch((error) => {
			error.status = 400;
			next(error)
		});
});

router.post('/', (req, res, next) => {
	const [err] = isValidField.validateSync(req.body);
	if (err) {
		err.status = 400;
		return next(err.message);
	}
	addField(req.body)
		.then((response) => {
			res.json({ message: response });
		})
		.catch((error) => {
			error.status = 400;
			next(error)
		});
});

router.put('/:id', (req, res, next) => {
	const [err] = isValidId.validateSync(req.body.id);
	if (err) {
		err.status = 400;
		return next(err.message);
	}
	updateField(req.params.id, req.body)
		.then((response) => {
			res.json({ message: response });
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
	deleteField(req.params.id)
		.then()
		.catch((error) => {
			error.status = 400;
			next(error)
		});
});

module.exports = router;
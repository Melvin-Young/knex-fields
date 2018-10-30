'use strict'
const bookshelf = require('../database/bookshelf');
const _ = require('lodash');

const Form = bookshelf.Model.extend({
	tableName: 'forms',
	parse: function (response) {
		return _.transform(response, (result, value, key) => {
			if (value instanceof Object && !(Array.isArray(value) || key === 'dob')) {
				value = camelCaseHelper(value);
			}
			result[_.camelCase(key)] = value;
		}, {});
	},
	format: function (attributes) {
		return _.transform(attributes, (result, value, key) => {
			if (value instanceof Object && !(Array.isArray(value) || key === 'dob')) {
				value = snakeCaseHelper(value);
			}
			result[_.snakeCase(key)] = value;
		}, {});
	}
});

function camelCaseHelper(snakeObj) {
	return _.mapKeys(snakeObj, function (value, key) {
		return _.camelCase(key);
	});
}

function snakeCaseHelper(camelObj) {
	return _.mapKeys(camelObj, function (value, key) {
		return _.snakeCase(key);
	});
}

function shouldHandleNested(value) {
	return 
}

module.exports = Form;
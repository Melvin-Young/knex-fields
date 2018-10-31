'use strict'

const bookshelf = require('../database/bookshelf');
const _ = require('lodash');
const Checkit = require('checkit');

const isValidForm = new Checkit({
  firstName: ['required', 'string'],
	lastName: ['required', 'string'],
	"dob": ['required', 'string'],
	email: ['required', 'email'],
	"emergencyContact": ['object']
});

const Form = bookshelf.Model.extend({
	tableName: 'forms',

	initialize: function() {
		this.on('saving', this.validateSave);
	},

	validateSave: function() {
		return isValidForm.run(this.attributes);
	},

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

// Only handles nesting one layer deep
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

module.exports = Form;
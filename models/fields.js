'use strict';

const bookshelf = require('../database/bookshelf')
const Checkit = require('checkit');

const fieldCheck = new Checkit({
	type: ['required', 'string'],
	name: ['required', 'string'],
	required: 'boolean'
});

const Field = bookshelf.Model.extend({
	tableName: 'fields',

	initialize: function() {
		this.on('saving', this.validateSave);
	},

	validateSave: function() {
		return fieldCheck.run(this.attributes);
	}
});

module.exports = Field;
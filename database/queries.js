'use strict';

const Fields = require('../models/fields');
const Forms = require('../models/forms');

const queries = {
	/* Queries for fields */
	getFields: () => Fields.fetchAll(),
	getField: (id) => Fields.where('id', id).fetch(),
	addField: (field) => Fields.forge(field).save(null, { method: 'insert' }),
	updateField: (id, field) => Fields.forge('id', id).save(field, {patch: true}),
	deleteField: (id) => Fields.where('id', id).destroy(),

	/* Queries for forms*/
	getForms: () => Forms.fetchAll(),
	getForm: (userId) => Forms.where('id', userId).fetch(),
	addForm: (user) => Forms.forge(user).save(null, { method: 'insert' }),
	updateForm: (userId, user) => Forms.where('id', userId).save(user, {patch: true}),
	deleteForm: (userId) => Forms.where('id', userId).destroy()
};

module.exports = queries;
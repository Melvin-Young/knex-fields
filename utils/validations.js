const Checkit = require('checkit');

const isValidField = new Checkit({
	type: ['required', 'string'],
	name: ['required', 'string'],
	required: 'boolean'
});

const isValidId = new Checkit({ id: 'integer' });

const isValidForm = new Checkit({
  firstName: ['required', 'string'],
	lastName: ['required', 'string'],
	"dob": ['required', 'string'],
	email: ['required', 'email'],
	"emergencyContact": ['object']
});

module.exports = {
	isValidField,
	isValidId,
	isValidForm
}

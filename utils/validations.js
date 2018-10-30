const Checkit = require('checkit');

const isValidId = new Checkit({ id: 'integer' });

const isValidForm = new Checkit({
  firstName: ['required', 'string'],
	lastName: ['required', 'string'],
	"dob": ['required', 'string'],
	email: ['required', 'email'],
	"emergencyContact": ['object']
});

module.exports = {
	isValidId,
	isValidForm
}

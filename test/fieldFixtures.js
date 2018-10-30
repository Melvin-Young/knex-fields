const fields = [
	{
		id: 1,
		type: 'text',
		name: 'firstName',
		required: 'true'
	},
	{
		id: 2,
		type: 'text',
		name: 'lastName',
		required: 'true'
	},
	{
		id: 3,
		type: 'date',
		name: 'dob',
		required: 'true'
	},
	{
		id: 4,
		type: 'email',
		name: 'email',
		required: 'true'
	}
]

const field = {
	"type": "text",
	"name": "Height",
	"required": false
}

const newField = {
	"type": "text",
	"name": "Height",
	"required": "false"
}

const updatedField = {
	"type": "text",
	"name": "Height",
	"required": "true"
}

module.exports = {
	fields,
	field,
	newField,
	updatedField
}
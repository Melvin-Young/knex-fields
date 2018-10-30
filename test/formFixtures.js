const forms = [
	{
		id: 1,
		firstName: 'Hickman',
		lastName: 'Kramer',
		dob: '1967-11-02T14:00:00.000Z',
		emergencyContact: {
			"firstName": "Bass",
			"lastName": "Travis",
			"email": "basstravis@tersanki.com"
		},
		email: 'hickmankramer@tersanki.com'
	},
	{
		id: 2,
		firstName: 'Gallegos',
		lastName: 'Daniels',
		dob: '1975-01-11T13:00:00.000Z',
		emergencyContact: {
			"firstName": "Lily",
			"lastName": "Owens",
			"email": "lilyowens@tersanki.com"
		},
		email: 'gallegosdaniels@tersanki.com'
	},
	{
		id: 3,
		firstName: 'Hicks',
		lastName: 'Wilcox',
		dob: '1995-08-12T14:00:00.000Z',
		emergencyContact: {
			"firstName": "Hendricks",
			"lastName": "Mccall",
			"email": "hendricksmccall@tersanki.com"
		},
		email: 'hickswilcox@tersanki.com'
	},
	{
		id: 4,
		firstName: 'Lorena',
		lastName: 'Adkins',
		dob: '1956-09-07T14:00:00.000Z',
		emergencyContact: {
			"firstName": "Cunningham",
			"lastName": "Turner",
			"email": "cunninghamturner@tersanki.com"
		},
		email: 'lorenaadkins@tersanki.com'
	},
	{
		id: 5,
		firstName: 'Sparks',
		lastName: 'Holt',
		dob: '1965-05-08T14:00:00.000Z',
		emergencyContact: {
			"firstName": "Kathie",
			"lastName": "Ward",
			"email": "kathieward@tersanki.com"
		},
		email: 'sparksholt@tersanki.com'
	},
	{
		id: 6,
		firstName: 'Duncan',
		lastName: 'Price',
		dob: '1987-09-22T14:00:00.000Z',
		emergencyContact: {
			"firstName": "Young",
			"lastName": "Browning",
			"email": "youngbrowning@tersanki.com"
		},
		email: 'duncanprice@tersanki.com'
	},
	{
		id: 7,
		firstName: 'Bray',
		lastName: 'Cherry',
		dob: '1991-11-07T13:00:00.000Z',
		emergencyContact: {
			"firstName": "Lowe",
			"lastName": "Moody",
			"email": "lowemoody@tersanki.com"
		},
		email: 'braycherry@tersanki.com'
	},
	{
		id: 8,
		firstName: 'Adele',
		lastName: 'Carey',
		dob: '2002-05-28T14:00:00.000Z',
		emergencyContact: {
			"firstName": "Carol",
			"lastName": "Long",
			"email": "carollong@tersanki.com"
		},
		email: 'adelecarey@tersanki.com'
	},
	{
		id: 9,
		firstName: 'Audra',
		lastName: 'Pennington',
		dob: '1999-12-08T13:00:00.000Z',
		emergencyContact: {
			"firstName": "Reilly",
			"lastName": "Cash",
			"email": "reillycash@tersanki.com"
		},
		email: 'audrapennington@tersanki.com'
	},
	{
		id: 10,
		firstName: 'Patty',
		lastName: 'Ashley',
		dob: '2001-06-21T14:00:00.000Z',
		emergencyContact: {
			"firstName": "Marina",
			"lastName": "Oconnor",
			"email": "marinaoconnor@tersanki.com"
		},
		email: 'pattyashley@tersanki.com'
	}]


const form = {
	"firstName": "Chuck",
	"lastName": "Stevenson",
	"dob": "11-08-1942",
	"email": "c.stevenson42@gmail.com",
	"emergencyContact": {
		"firstName": "Guy",
		"lastName": "Thompson",
		"email": "thompson41@aol.com"
	}
}

const newForm = {
	"firstName": "Chuck",
	"lastName": "Stevenson",
	"dob": "1942-11-07T13:00:00.000Z",
	"email": "c.stevenson42@gmail.com",
	"emergencyContact": {
		"firstName": "Guy",
		"lastName": "Thompson",
		"email": "thompson41@aol.com"
	}
}

const updatedForm = {
	"firstName": "Larry",
	"lastName": "Stevenson",
	"dob": "1942-11-07T13:00:00.000Z",
	"email": "c.stevenson42@gmail.com",
	"emergencyContact": {
		"firstName": "Guy",
		"lastName": "Thompson",
		"email": "thompson41@aol.com"
	}
}

module.exports = {
	forms,
	form,
	newForm,
	updatedForm
}

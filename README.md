## Project title

A Test

## Motivation

This project uses Bookshelf Postgres and Express to provide some endpoints for database forms

## Code style

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Tech/framework used

<b>Built with</b>
ES6 Vanilla JavaScript
Knexjs
Bookshelfjs
Postgres
Express
## Features

User can perform basic CRUD operations on the Fields and Forms endpoints

## Installation

npm install && npm start

## API Reference

GET -> /Forms /Fields returns all forms or fields
POST -> /Forms /Fields creates a new form or field
PUT -> /Forms/ID /Fields/ID updates a form or field
DELETE -> /Forms/ID /Fields/ID deletes a form or field

* Sample Form 
	{
		"firstName": "Chuck",
	"lastName": "Stevenson",
	"dob": "11-08-1942",
	"email": "c.stevenson42@gmail.com",
	"emergencyContact": {
		"firstName": "Guy",
		"lastName": "Thompson",
		"email": "thompson41@aol.com"
	}

* Sample Field
{
	"type": "text",
	"name": "Height",
	"required": false
}
## Tests

- Unit tests currently checking CRUD at both endpoints on test db

## How to use?

Npm run start

- Runs on port 3000 or whatever your PORT environment variable is set to

### Time Spent ~6 hrs
### Place after 2 hrs 
* Field enpoints were done and DB could be updated/rolled back/seeded

## Issues
Couldn't figure out how to get the grouping done in Bookshelf, I was looking into usinig a Collection or on of those "many" functions but ran out of time
Also could've put validation on the Model instead of the endpoint

## License

MIT © [Melvin-Young]()

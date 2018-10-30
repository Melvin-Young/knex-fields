const bookshelf = require('../database/bookshelf')

const Field = bookshelf.Model.extend({
	tableName: 'fields'
});

module.exports = Field;
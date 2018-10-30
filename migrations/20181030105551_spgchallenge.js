
exports.up = function (knex, Promise) {
	return knex.schema
		.createTable('fields', function(table) {
			table.increments('id');
			table.string('type').notNull();
			table.string('name').unique();
			table.string('required').defaultTo(false);
		})
		.createTable('forms', function(table) {
			table.increments('id').primary();
			table.string('first_name').notNull();
			table.string('last_name').notNull();
			table.date('dob').notNull();
			table.json('emergency_contact');
			table.string('email').unique();
		})
};

exports.down = function (knex, Promise) {
	return knex.schema
		.dropTableIfExists('fields')
		.dropTableIfExists('forms');
};

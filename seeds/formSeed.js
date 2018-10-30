const data = require('./formData.json');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('forms').del()
    .then(function () {
      // Inserts seed entries
      return knex('forms').insert(data);
    });
};
'use strict';

const environment = process.env.NODE_ENV || 'development';
const databaseConfig = require('../knexfile');
const knex = require('knex')(databaseConfig[environment]);
const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
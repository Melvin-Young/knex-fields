// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'spgchallenge',
      user: 'spgchallenge',
      password: '',
      charset: 'utf8',
      pool: { min: 0, max: 50 }
    },
  },
  test: {
    client: 'pg',
    connection: {
      database: 'test-spgchallenge'
    }
  }
};

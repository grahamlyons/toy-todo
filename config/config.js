module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './db.development.sqlite',
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
  },
};

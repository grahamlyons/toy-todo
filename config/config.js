module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './db.development.sqlite',
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
  },
  staging: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    operatorsAliases: false,
    dialectOptions: {
      ssl: true,
    },
  },
};

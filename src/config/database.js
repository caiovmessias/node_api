module.exports = {
  development: {
    dialect: 'postgres',
    host: 'postgres',
    username: 'postgres',
    port: 5432,
    password: '12345678',
    database: 'node_api',
    seederStorage: 'sequelize',
    logging: false
  },
  test: {
    dialect: 'sqlite',
    storage: './__tests__/database.sqlite',
    seederStorage: 'sequelize',
    logging: false
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    protocol: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
}
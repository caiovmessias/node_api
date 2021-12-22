module.exports = {
  development: {
    dialect: 'mysql',
    host: 'mysql-5.7',
    username: 'root',
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
    dialectOptions: {
        ssl: true
    }
  },
}
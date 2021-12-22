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
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    database: 'node_api',
  },
}
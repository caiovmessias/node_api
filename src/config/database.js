module.exports = {
  development: {
    dialect: 'mysql',
    host: 'mysql-5.7',
    username: 'root',
    password: '12345678',
    database: 'node_api',
    seederStorage: 'sequelize'
  },
  test: {
    dialect: 'mysql',
    host: 'mysql-5.7',
    username: 'root',
    password: '12345678',
    database: 'node_api_test',
    seederStorage: 'sequelize'
  },
  production: {
    dialect: 'mysql',
    host: 'mysql-5.7',
    username: 'root',
    password: '12345678',
    database: 'node_api',
    seederStorage: 'sequelize'
  },
}
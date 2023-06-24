const Sequelize = require('sequelize');

const connection = new Sequelize('formequipamento', 'root', 'Senhamysql1*', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = connection;

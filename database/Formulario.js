const Sequelize = require('sequelize');
const connection = require('./database');

const Formulario = connection.define('formulario', {
  solicitante: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gati: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Formulario.sync({ force: false }).then(() => {});

module.exports = Formulario;

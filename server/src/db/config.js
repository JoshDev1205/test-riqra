const Sequelize = require('sequelize')

const db = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  operatorsAliases: false,
  storage: './testriqra.sqlite3'
})

module.exports = db
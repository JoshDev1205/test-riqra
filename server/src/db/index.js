const Sequelize = require('sequelize')
const db = require('./config')

const commentModel = db.define('comments', {
  content: { type: Sequelize.TEXT, allowNull: false },
  published: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 1 }
}) 

const Comment = db.models.comments

module.exports = { Comment }
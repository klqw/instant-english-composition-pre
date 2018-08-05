'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/instant_english',
  {
    logging: false,
    operatorsAliases: false
  });
const Sentence = sequelize.define('sentences', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  grade: {
    type: Sequelize.INTEGER
  },
  stage: {
    type: Sequelize.INTEGER
  },
  question: {
    type: Sequelize.STRING
  },
  answer: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false
});

Sentence.sync();
module.exports = Sentence;

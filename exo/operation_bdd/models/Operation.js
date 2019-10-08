var Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:8889/calcul');
const Operation = sequelize.define('operation', {
    // attributes
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    nombre1: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nombre2: {
      type: Sequelize.INTEGER,
      allowNull:false,
      // allowNull defaults to true
    },
    type: {
      type:Sequelize.STRING,
      allowNull:false,
    },
  resultat:{
      type:Sequelize.INTEGER,
    
  }
 } ,{sequelize, timestamps: false});

module.exports = Operation;
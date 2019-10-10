var Sequelize = require('sequelize');
//const sequelize=new Sequelize({dialect:"mysql"});
const sequelize = new Sequelize('mysql://root:root@localhost:8889/calcul');



const Operation = sequelize.define('operation', {
    // attributes
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    nombre1: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    nombre2: {
      type: Sequelize.FLOAT,
      allowNull:false,
      // allowNull defaults to true
    },
    type: {
      type:Sequelize.STRING,
      allowNull:false,
    },
  resultat:{
      type:Sequelize.FLOAT,
    
  },
  actif:{
    type:Sequelize.INTEGER,
  }
 } ,{sequelize, tableName:"operation",timestamps: false});

 var exports = module.exports = {};
 exports.Operation = Operation;
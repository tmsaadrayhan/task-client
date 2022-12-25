/*
the schema for cart
*/

const { Sequelize} = require("sequelize");

module.exports = (sequelize , Sequelize) => {
    const Inout = sequelize.define("inout" , {
       id : {
          type : Sequelize.INTEGER,
          primaryKey : true,
          autoIncrement : true
       },
       in_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      out_time: {
        type: Sequelize.DATE
        
      }
    });
    return Inout;
}
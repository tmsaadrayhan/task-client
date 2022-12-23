
//this file contains the schema definition for the employee resource


module.exports = (sequelize, Sequelize) =>{
const Employee = sequelize.define('employee', {
  id : {
     type : Sequelize.INTEGER,
     primaryKey : true,
     autoIncrement : true
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  job_title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  salary: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
  return Employee;
}



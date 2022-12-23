const Sequelize = require('sequelize');


module.exports = (sequelize , Sequelize) =>{
const Leave = sequelize.define('leave', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  
  start_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  end_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('approved', 'pending', 'rejected'),
    defaultValue: 'pending'
  }
});

  return Leave;
}
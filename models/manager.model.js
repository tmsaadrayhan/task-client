// Manager model

module.exports = (sequelize , Sequelize) => {
const Manager = sequelize.define('manager', {
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
  salary: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
   return Manager;
}
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("emp_db", "root", "apple@17", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
const { manager } = require('../models');
const db = require('../models');
const Manager = db.manager;
const Employee = db.employee;



exports.findAll = (req, res) => {
  Employee.findAll({
    attributes: ['first_name', 'last_name', 'salary'],
    include: [
      {
        model: Manager,
        as: 'manager',
        
        attributes: ['first_name', 'last_name', 'salary'],
      }
    ]
  })
    .then((employees) => {
      res.status(200).send(employees);
    })
    .catch((error) => {
      res.status(500).send({
        message: 'Error executing query',
        error: error,
      });
    });
}
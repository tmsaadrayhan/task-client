const { leave } = require("../models");
const db = require("../models");
const Leave = db.leave;
const Employee = db.employee;


exports.create =  (req, res) => {
  const { employeeId, start_date, end_date, status } = req.body;
  Leave.create({
    employeeId: employeeId,
    start_date: start_date,
    end_date: end_date,
    status: status
  })
    .then(leave => {
      res.status(201).json({ message: 'Leave request added successfully', leave });
    })
    .catch(error => {
      res.status(500).json({ message: 'Error adding leave request', error });
    });
};


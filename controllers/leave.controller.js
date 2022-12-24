const { leave } = require("../models");
const db = require("../models");
const Leave = db.leave;
const Employee = db.employee;

//handler for creating new leave resource
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



//handler for fetching the leaves

exports.findAll = (req, res) =>{
  Leave.findAll().then(leaves =>{
      res.status(200).send(leaves);
  }).catch(err=>{
    res.status(500).send({
      message : `failed to fetch employees's leaves`
  })
})
}
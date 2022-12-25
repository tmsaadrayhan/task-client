const { inout } = require("../models");
const db = require("../models");
const Inout = db.inout;
const Employee = db.employee;
const Op = db.Sequelize.Op;



//handler to create inout resource
exports.create =  (req, res) => {
  const { employee_id, in_time } = req.body;
  Inout.create({
    employeeId: employee_id,
    in_time: in_time
  })
    .then(attendance => {
      res.status(201).json({ message: 'Attendance added successfully', attendance });
    })
    .catch(error => {
      res.status(500).json({ message: 'Error adding attendance', error });
    });
};


//handler to update the inout resource
exports.update =  (req, res) => {
  const id = req.params.id;
  const { out_time } = req.body;
  Inout.update({ out_time: out_time }, {
    where: { id: id }
  })
    .then(numUpdated => {
      if (numUpdated) {
        res.status(200).json({ message: 'Attendance updated successfully' });
      } else {
        res.status(404).json({ message: 'Attendance not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Error updating attendance', error });
    });
};



//handler for fetching inout based on employee id
exports.fetchAll = (req, res) => {
  const employee_id = req.params.employee_id;
  Inout.findAll({
    where: { employeeId: employee_id }
  })
    .then(attendance => {
      res.json(attendance);
    })
    .catch(error => {
      res.status(500).json({ message: 'Error getting attendance for employee' });
    });
};




//handler to fetch inout of all inout
exports.findAll = (req, res) => {
  Inout.findAll()
    .then(inout => {
      res.json(inout);
    })
    .catch(error => {
      res.status(500).json({ message: 'Error getting attendance' });
    });
};

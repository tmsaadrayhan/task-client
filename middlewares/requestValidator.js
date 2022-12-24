const { employee } = require("../models");
const db = require("../models");
const Employee = db.employee;
const Leave = db.leave;

const validateEmployeeRequest = (req, res, next) =>{

    if (!req.body.first_name & !req.body.last_name) {
        res.status(400).send({
            message: "Name of the employee can't be empty !"
        })
        return;
    }
    next();
}

const validateLeaveRequest = (req, res, next) => {

    /**
     * Validation of the request body
     */

    if (!req.body.start_date & !req.body.end_date) {
        res.status(400).send({
            message: "Date of the leave request can't be empty !"
        })
        return;
    }

    if (req.body.employeeId) {
        //Check if the employee exists, if not return the proper error message
        Employee.findByPk(req.body.employeeId).then(employee=> {
            if (!employee) {
                res.status(400).send({
                    message: `employee id passed is not available : ${req.body.employeeId}`
                });
                return;
            }
            next();
        }).catch(err => {
            res.status(500).send({
                message: "Some Internal error while adding the leave request!"
            });
        });
    } else {
        res.status(400).send({
            message: `employee id passed is not available `
        })

        return;
    }

}



module.exports = {
    validateLeaveRequest: validateLeaveRequest,
  
    validateEmployeeRequest : validateEmployeeRequest
}
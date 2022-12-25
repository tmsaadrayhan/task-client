/**
 * this file have logic which is necessary for processing the request
 * 
 * handler for creating a new employee resource
 */

const { employee } = require("../models");
const db = require("../models");
const Employee = db.employee;


exports.create = (req , res)=>{
   /**
    * try to create new category object using request body
    */
    
   const employee = {
       first_name : req.body.first_name,
       last_name : req.body.last_name,
       job_title : req.body.job_title,
       salary : req.body.salary,
       managerId : req.body.managerId
   }

   // store this in db
   Employee.create(employee)
       .then(employee =>{
            console.log(`employee name: [ ${employee.name}] got inserted in the db`);
             res.status(201).send(employee);

      })
       .catch(err =>{
             console.log(`issue in inserting the employee name: [ ${employee.name}].Error message :${err.message}`);
             res.status(500).send({
                  message : `some internal eroor happened`
       })
   })



  }


  /**
 * 
 * hanlder for getting all the employees
 * 
 */

exports.findAll = (req, res) =>{
  Employee.findAll().then(employees =>{
      res.status(200).send(employees);
  }).catch(err=>{
    res.status(500).send({
      message : `failed to fetch employees`
  })
})
}



/**
 * handler for getting employees based on the id
 * 
 */
 
exports.findOne = (req, res) =>{
  const employeeId = req.params.id;

  Employee.findByPk(employeeId).then(employeeId =>{
       res.status(201).send(employeeId);

  }).catch(err =>{
     res.status(500).send({
         message : 'failed to get the employee'
     })
  })
}


// handler for promoting employee

exports.updateProm =  (req, res) => {
  const employeeId = req.params.id;
  const { job_title } = req.body;

  Employee.update({job_title}, {
    where: { id: employeeId }
  })
    .then(numUpdated => {
      if (numUpdated) {
        res.status(200).json({ message: 'Employee promoted successfully' });
      } else {
        res.status(404).json({ message: 'Employee not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Error promoting employee', error });
    });
};

exports.update = (req, res) =>{
  /**
   * need to parse the request body just like post method
   */
   const employee = {
     job_title : req.body.job_title
 }
 /**
  * need to know which employee has to be updated(i.e. promoted)
  */
 const employeeId = req.params.id ;
 
 /**
  * now promote the employee
  */
   Employee.update(employee,{
       where : {id : employeeId},
       returning : true
   }).then(promotedEmployee =>{
     // need to make a get call to get the promoted employee
     console.log(promotedEmployee);
     Employee.findByPk(employeeId).then(employeeRes =>{
          res.status(200).send(employeeRes);
     }).catch(err =>{
         res.status(500).send({
             message : "could not promote employee"
         })
     })
     
   }).catch(err =>{
     res.status(500).send({
         message : "error promoting the employee"
     })
   })
}



exports.updateSalary = (req, res) =>{
  /**
   * need to parse the request body just like post method
   */
   const employee = {
     salary : req.body.salary
 }
 /**
  * need to know which employee's salary has to be updated
  */
 const employeeId = req.params.id ;
 
 /**
  * now update  the employee's salary
  */
   Employee.update(employee,{
       where : {id : employeeId},
       returning : true
   }).then(updatedSalary =>{
     // need to make a get call to get the updated salary
     console.log(updatedSalary);
     Employee.findByPk(employeeId).then(employeeRes =>{
          res.status(200).send(employeeRes);
     }).catch(err =>{
         res.status(500).send({
             message : "could not update employee's salary"
         })
     })
     
   }).catch(err =>{
     res.status(500).send({
         message : "error updating  the employee's salary"
     })
   })
}


/**
 * 
 *providing support for deleting the employee
 */

 exports.delete = (req, res) =>{
  const employeeId = req.params.id;

  Employee.destroy({
       where : {
           id : employeeId
       }
  }).then(result =>{
     res.status(200).send({
        message : "successfully deleted"
     })
  }).catch(err =>{
    res.status(500).send({
        message : "some internal error happened"
     
  })
})
}



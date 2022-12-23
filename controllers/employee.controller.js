/**
 * this file have logic which is necessary for processing the request
 * 
 * handler for creating a new employee resource
 */

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
       salary : req.body.salary
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

  
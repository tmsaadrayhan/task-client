/**
 * this file is responsible for the routing the requests to the right controller method
 */

const controller = require("../controllers/employee.controller");

module.exports = function(app){
     //route for creating new employee
     
     app.post('/emp/api/v1/employees' , controller.create);



     //route for  getting all the employees
     
     app.get('/emp/api/v1/employees', controller.findAll);

      
     // route for getting the category based on category id
     app.get('/emp/api/v1/employees/:id', controller.findOne);


      //route for updating (promoting) the employee

      app.put('/emp/api/v1/employees/:id' , controller.update);


      //route for updating the salary of employee

      app.put('/emp/api/v1/employees/salary/:id' , controller.updateSalary);
   


}
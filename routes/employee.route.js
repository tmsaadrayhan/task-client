/**
 * this file is responsible for the routing the requests to the right controller method
 */

const controller = require("../controllers/employee.controller");

module.exports = function(app){
     //route for creating new employee
     
     app.post('/emp/api/v1/employees' , controller.create);

     

      


   


}
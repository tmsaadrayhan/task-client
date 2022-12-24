/**
 * this file is responsible for the routing the requests to the right controller method
 */

const controller = require("../controllers/leave.controller");

module.exports = function(app){
    //route for creating new leave
     
     app.post('/emp/api/v1/leaves' , controller.create);

      
     //route for  getting all the leaves
     
     app.get('/emp/api/v1/leaves', controller.findAll);

}
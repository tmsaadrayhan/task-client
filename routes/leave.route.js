/**
 * this file is responsible for the routing the requests to the right controller method
 */

const controller = require("../controllers/leave.controller");
const { requestValidator , authJwt } = require("../middlewares");

module.exports = function(app){
    //route for creating new leave
     
     app.post('/emp/api/v1/leaves' ,[authJwt.verifyToken,authJwt.isAdmin , requestValidator.validateLeaveRequest] , controller.create);

      
     //route for  getting all the leaves
     
     app.get('/emp/api/v1/leaves', controller.findAll);


      //route for updating the leave

      app.put('/emp/api/v1/leaves/:id' ,[authJwt.verifyToken,authJwt.isAdmin , requestValidator.validateLeaveRequest] , controller.update);




       //route for deleting the leave request

     app.delete('/emp/api/v1/leaves/:id', [authJwt.verifyToken,authJwt.isAdmin] ,controller.delete);


}
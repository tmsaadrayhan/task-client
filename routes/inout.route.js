const controller = require("../controllers/inout.controller");
const { requestValidator ,authJwt} = require("../middlewares");

module.exports = function(app){
  //route for creating new inout resource
  
  app.post('/emp/api/v1/inout' ,[authJwt.verifyToken,authJwt.isAdmin], controller.create);



  //route for  getting all the inout
  
  app.get('/emp/api/v1/inout', controller.findAll);

   
  // route for getting the inout based on employee id
  app.get('/emp/api/v1/inout/:id', controller.fetchAll);


   //route for updating the out_time in inout resource using id of inout resource

   app.put('/emp/api/v1/inout/:id' ,[authJwt.verifyToken,authJwt.isAdmin] , controller.update);


   

   


}

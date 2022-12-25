const controller = require("../controllers/manager.controller");
const { requestValidator , authJwt } = require("../middlewares");





module.exports = (app) =>{
    
   // route for creating a new manager
   app.post("/emp/api/v1/managers" ,[authJwt.verifyToken,authJwt.isAdmin],controller.create );


   //route for getting  all managers
   app.get("/emp/api/v1/managers" , controller.findAll);


   //route for getting manager by id

   app.get('/emp/api/v1/managers/:id', controller.findOne);

    //route for updating the manager

    app.put('/emp/api/v1/managers/:id' ,[authJwt.verifyToken,authJwt.isAdmin], controller.update)

    // route for deleting the manager

    app.delete('/emp/api/v1/managers/:id' ,[authJwt.verifyToken,authJwt.isAdmin], controller.delete)



}
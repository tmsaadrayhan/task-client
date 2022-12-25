

const controller = require("../controllers/empmanager.controller");
const { requestValidator ,authJwt} = require("../middlewares");


module.exports = function(app){
app.get('/emp/api/v1/employees_managers_data' , [authJwt.verifyToken,authJwt.isAdmin], controller.findAll);

}

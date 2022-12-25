
const authController = require("../controllers/auth.controller");
const { verifySignUp , authJwt } = require("../middlewares");

module.exports = (app) =>{
    
    // route for user signup

    app.post("/emp/api/v1/auth/signup" ,  [verifySignUp.checkDuplicateUsernameOrEmail,verifySignUp.checkRolesExisted] , authController.signup );

     // route for user signin

     app.post("/emp/api/v1/auth/signin" , authController.signin);

    
    
};
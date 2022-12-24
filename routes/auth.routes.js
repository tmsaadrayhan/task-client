
const authController = require("../controllers/auth.controller");

module.exports = (app) =>{
    
    // route for user creation

    app.post("/emp/api/v1/auth/signup",authController.signup );

    
    
};
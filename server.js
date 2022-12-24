let express=require('express');

let bodyParser=require('body-parser');

let cors=require('cors');
let app = express();

app.use(bodyParser.json());
app.use(cors())

/**
 * code for the table initialization
 */
const db = require("./models"); // node will find index.js form models folder -- standard naming
const Employee = db.employee;
const Leave = db.leave;
const Role = db.role;

console.log(Employee);

//Setting the One to Many relationship between Employee and Leaves
Employee.hasMany(Leave); // This will create a foreign key column( employeeId) in Leaves table

/**
 * create the table
 */
db.sequelize.sync({force:true}).then(() => {
      console.log("table destroyed and recreated");
      init();
}).catch(err =>{
    console.log(err.message);
})

//initialise the routes
require('./routes/employee.route')(app);
require('./routes/leave.route')(app);
require('./routes/auth.routes')(app);


function init() {
      /**
     * Adding roles
     */
      Role.create({
        id:1,
        name:"engineer"
    });
    Role.create({
        id:2,
        name:"manager"
    })



}



app.listen(8000,() =>{
  console.log("application started");
})












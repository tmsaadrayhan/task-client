let express=require('express');


let bodyParser=require('body-parser');

let cors=require('cors');
let app = express();

app.use(bodyParser.json());
app.use(cors());

/**
 * code for the table initialization
 */
const db = require("./models"); // node will find index.js form models folder -- standard naming
const Employee = db.employee;
const Leave = db.leave;
const Role = db.role;
const Inout = db.inout;
const Manager = db.manager;



Manager.hasMany(Employee);
Employee.belongsTo(Manager);

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
require('./routes/inout.route')(app);
require('./routes/manager.route')(app);
  require('./routes/empmanager.route')(app)


function init() {
      /**
     * Adding roles
     */
      Role.create({
        id:1,
        name:"user"
    });
    Role.create({
        id:2,
        name:"admin"
    })
    


    //Initializing few managers
    var managers = [
      {
          first_name: "sundar",
          last_name : "pichai",
          salary: 200000
      },
      {
          first_name: "satya",
          last_name : "nadella",
          salary : 100000
      }
  ];

  Manager.bulkCreate(managers).then(() => {
      console.log("manager table is initialized");
  }).catch(err => {
      console.log("Error while initializing manager table");
  })

}






app.listen(9000,() =>{
  console.log("application started");
})












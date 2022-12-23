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

console.log(Employee);

/**
 * create the table
 */
db.sequelize.sync().then(() => {
      console.log("table created");
}).catch(err =>{
    console.log(err.message);
})













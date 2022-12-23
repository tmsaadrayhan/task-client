let express=require('express');

let bodyParser=require('body-parser');

let cors=require('cors');

const sequelize = require("./models/database");


let app = express();

app.use(bodyParser.json());
app.use(cors())





sequelize
  .sync()
  .then((result) => {
    
    app.listen(8000, () => {
      console.log(" listening to 8000 port ");
    });
  })
  .catch((err) => {
    console.log(err);
  });
 
 




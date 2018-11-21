const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');	
const port = 3000;
const UserModel = require('./api/models/user-model'); 
const TaskModel = require('./api/models/task-model'); 
const routes = require('./api/routes/app-routes'); 

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://blackswan_user:V3ckShdI7N7k430Y@ds113454.mlab.com:13454/blackswan', { useNewUrlParser: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(port, () => console.log(`Blackswan test app running on: ${port}!`))
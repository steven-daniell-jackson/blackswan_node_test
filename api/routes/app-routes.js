const routes = require('express').Router();
var userController = require('../controllers/user-controller');
var taskController = require('../controllers/task-controller');

// Domain Route
routes.get('/', (req, res) => {
	res.send('Written by Steven Jackson');
});


 // User Routes
 routes.route('/api/users')
 	.get(userController.get_Users)
 	.post(userController.create_User);

 routes.route('/api/users/:user_id')
 	.get(userController.get_User)
 	.put(userController.update_User);

 // Task Routes
 routes.route('/api/users/:user_id/tasks')
 	.get(taskController.get_Tasks)
 	.post(taskController.create_Task);

 routes.route('/api/users/:id/tasks/:task_id')
 	.get(taskController.get_Task)
 	.put(taskController.update_Task)
 	.delete(taskController.delete_Task);


 module.exports = routes;
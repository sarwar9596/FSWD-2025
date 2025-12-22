import taskController from '../Controllers/taskController.js';
import express from 'express';

const taskRouter = express.Router();

taskRouter.route('/').get(taskController().getAllTasks);
taskRouter
	.route('/:id')
	.get(taskController().getTask())
	.post(taskController().createTask())
	.patch(taskController().updateTask())
	.delete(taskController().deleteTask());

export default taskRouter;

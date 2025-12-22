import taskModel from '../Models/TaskModel.js';

export default function taskController() {
	return {
		getAllTasks: async (req, res) => {
			try {
				const tasks = await taskModel.find({ taskName: 'firstTask' });
				res.status(200).json({
					status: 'success',
					data: tasks,
				});
			} catch (error) {
				res.status(400).json({
					status: 'fail',
					message: error,
				});
			}
		},
		getTask: async (req, res) => {
			try {
				const id = req.params.id;
				const task = await taskModel.findById(id);
				if (!task) {
					res.status(404).json({
						status: 'fail',
						message: 'Not Found',
					});
				}
				res.status(200).json({
					status: 'success',
					data: task,
				});
			} catch (error) {
				res.status(400).json({
					status: 'fail',
					message: error,
				});
			}
		},
		createTask: async (req, res) => {
			try {
				const { serialNumber, taskName, Time } = req.body;
				const newTask = await taskModel.create({
					serialNumber,
					taskName,
					Time,
				});
				res.status(201).json({
					status: 'success',
					data: task,
				});
			} catch (error) {
				res.status(400).json({
					status: 'fail',
					message: error,
				});
			}
		},
		updateTask: async (req, res) => {
			try {
				const id = req.params.id;
				const { name } = body.req;
				if (!name) {
					res.status(404).json({
						status: 'fail',
						message: 'not found',
					});
				}
				const task = await taskModel.findByIdAndUpdate(id);
				res.status(200).json({
					status: 'success',
					data: task,
				});
			} catch (error) {
				res.status(400).json({
					status: 'fail',
					message: error,
				});
			}
		},
		deleteTask: async (req, res) => {
			try {
				const id = req.params.id;
				const taskExist = await findById(id);
				if (!taskExist) {
					res.status(404).json({
						status: 'fail',
						message: 'not found',
					});
					const task = await taskModel.deleteOne(id);
					res.status(204).json({
						status: 'success',
						data: task,
					});
				}
			} catch (error) {
				res.status(400).json({
					status: 'fail',
					message: error,
				});
			}
		},
	};
}

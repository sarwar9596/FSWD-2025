import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
	{
		// serial number depends upon array.length
		serialNumber: {
			type: Number,
			required: true,
			unique: true,
		},
		taskName: {
			type: String,
			required: true,
		},
		Time: new Date().toISOString(),
	},
	{ timestamps: true }
);
const taskModel = mongoose.model('taskModel', todoSchema);
export default taskModel;

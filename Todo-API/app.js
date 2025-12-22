import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import taskRouter from '../Routes/taskRoutes.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/task', taskRouter);

export default app;
// http://localhost/api/v1/task/

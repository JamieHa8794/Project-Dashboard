import express from 'express';
import cors from 'cors';

import { getTasksController } from './contollers/taskController';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
);

app.use(express.json());

app.get('/tasks', getTasksController);

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is listening on Port: ${PORT}`);
});

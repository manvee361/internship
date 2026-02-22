// server.js - Entry point for the backend
// Simple Express server exposing three API endpoints

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import usersRouter from './routes/users.js';
import statisticsRouter from './routes/statistics.js';
import summaryRouter from './routes/summary.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/users', usersRouter);
app.use('/api/statistics', statisticsRouter);
app.use('/api/summary', summaryRouter);

app.get('/', (req, res) => {
  res.send({ message: 'MyDashboard API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

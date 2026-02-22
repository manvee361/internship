// routes/statistics.js - Returns aggregated statistics

import express from 'express';
import db from '../db.js';

const router = express.Router();

// GET /api/statistics
// Returns a single row with total values
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT total_value, total_users, total_orders, total_revenue FROM statistics LIMIT 1');
    const result = rows[0] || {
      total_value: 0,
      total_users: 0,
      total_orders: 0,
      total_revenue: 0
    };
    res.json(result);
  } catch (err) {
    console.error('Error fetching statistics:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

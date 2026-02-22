// routes/summary.js - Returns summary value

import express from 'express';
import db from '../db.js';

const router = express.Router();

// GET /api/summary
// Returns the total_summary value from the `summary` table
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT total_summary FROM summary LIMIT 1');
    const result = rows[0] || { total_summary: 0 };
    res.json(result);
  } catch (err) {
    console.error('Error fetching summary:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

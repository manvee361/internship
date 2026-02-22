// routes/users.js - Returns list of users

import express from 'express';
import db from '../db.js';

const router = express.Router();

// GET /api/users
// Returns all users from the `users` table
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id, name, role FROM users');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

# Backend (Express + MySQL)

Requirements:
- Node.js
- MySQL

Quick start:
1. Copy `.env.example` to `.env` and fill your DB credentials.
2. Create the database and sample data: `mysql -u root -p < schema.sql` (or run the SQL in a client).
3. Install dependencies: `npm install` inside `backend`.
4. Start server: `npm run dev` (requires `nodemon`) or `npm start`.

APIs:
- `GET /api/users` - list of users
- `GET /api/statistics` - single row of statistics
- `GET /api/summary` - total summary

Files:
- `server.js` - app entry
- `db.js` - MySQL connection pool (mysql2)
- `routes/*.js` - route handlers
- `schema.sql` - DB schema + sample data

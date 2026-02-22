-- schema.sql - Create tables and insert sample data for MyDashboard

CREATE DATABASE IF NOT EXISTS mydashboard;
USE mydashboard;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  role VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS statistics (
  id INT AUTO_INCREMENT PRIMARY KEY,
  total_value INT DEFAULT 0,
  total_users INT DEFAULT 0,
  total_orders INT DEFAULT 0,
  total_revenue DECIMAL(12,2) DEFAULT 0.00
);

CREATE TABLE IF NOT EXISTS summary (
  id INT AUTO_INCREMENT PRIMARY KEY,
  total_summary VARCHAR(255) DEFAULT ''
);

-- Insert a sample row for statistics and summary
INSERT INTO users (name, role) VALUES
('Alice Johnson', 'Admin'),
('Bob Smith', 'Manager'),
('Carol Lee', 'Analyst');

INSERT INTO statistics (total_value, total_users, total_orders, total_revenue) VALUES
(12345, 3, 58, 98765.43);

INSERT INTO summary (total_summary) VALUES
('This is a sample total summary value from the database.');

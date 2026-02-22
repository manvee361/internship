import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import StatsCards from '../components/StatsCards'
import Overview from '../components/Overview'
import Summary from '../components/Summary'

// Dashboard.jsx - Main page that loads data and passes to components
export default function Dashboard() {
  const [users, setUsers] = useState([])
  const [stats, setStats] = useState(null)
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    // Load data on page load
    const fetchData = async () => {
      try {
        const [usersRes, statsRes, summaryRes] = await Promise.all([
          axios.get('http://localhost:5000/api/users'),
          axios.get('http://localhost:5000/api/statistics'),
          axios.get('http://localhost:5000/api/summary')
        ])
        setUsers(usersRes.data)
        setStats(statsRes.data)
        setSummary(summaryRes.data)
      } catch (err) {
        console.error('Error loading data:', err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="app-root">
      <Sidebar />
      <div className="main-area">
        <Navbar />
        <main className="content">
          <h2 className="page-title">Dashboard</h2>

          <StatsCards stats={stats} />

          <div className="lower-row">
            <Overview />
            <Summary summary={summary} />
          </div>

        </main>
      </div>
    </div>
  )
}

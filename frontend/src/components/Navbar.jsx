import React from 'react'

// Navbar.jsx - Top bar with title, notification and profile
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1>Dashboard</h1>
      </div>
      <div className="navbar-right">
        <div className="icon">🔔</div>
        <div className="profile">
          <div className="name">Alex Doe</div>
          <div className="role">Administrator</div>
        </div>
      </div>
    </header>
  )
}

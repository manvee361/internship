import React from 'react'

// Sidebar.jsx - Left navigation
export default function Sidebar() {
  const menu = ['Option 1','Option 2','Option 3','Option 4','Option 5']
  return (
    <aside className="sidebar">
      <div className="logo">MyDashboard</div>
      <nav>
        {menu.map((m) => (
          <div className="menu-item" key={m}>{m}</div>
        ))}
      </nav>
    </aside>
  )
}

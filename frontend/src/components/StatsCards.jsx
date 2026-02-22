import React from 'react'

// StatsCards.jsx - Four statistic cards
export default function StatsCards({ stats }) {
  const cards = [
    { title: 'Total Value', value: stats ? stats.total_value : '—' },
    { title: 'Total Users', value: stats ? stats.total_users : '—' },
    { title: 'Total Orders', value: stats ? stats.total_orders : '—' },
    { title: 'Total Revenue', value: stats ? `$${stats.total_revenue}` : '—' }
  ]

  return (
    <div className="stats-cards">
      {cards.map((c) => (
        <div className="card" key={c.title}>
          <div className="card-title">{c.title}</div>
          <div className="card-value">{c.value}</div>
        </div>
      ))}
    </div>
  )
}

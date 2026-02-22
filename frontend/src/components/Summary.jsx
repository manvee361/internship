import React from 'react'

// Summary.jsx - Shows a summary card with value from DB
export default function Summary({ summary }) {
  return (
    <aside className="summary-card">
      <h3>Summary</h3>
      <p className="summary-value">{summary ? summary.total_summary : 'Loading...'}</p>
    </aside>
  )
}

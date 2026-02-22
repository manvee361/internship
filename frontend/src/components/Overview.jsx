import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

// Overview.jsx - Line chart with filter and export button
export default function Overview() {
  const [filter, setFilter] = useState('All')

  const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  // Dummy datasets for demo. In a real app this would come from the backend.
  const datasetAll = labels.map((_,i) => Math.floor(100 + Math.random()*400))
  const datasetMonthly = labels.map((_,i) => Math.floor(50 + Math.random()*200))
  const datasetYearly = labels.map((_,i) => Math.floor(500 + Math.random()*2000))

  const getData = () => {
    let data = datasetAll
    if (filter === 'Monthly') data = datasetMonthly
    if (filter === 'Yearly') data = datasetYearly
    return {
      labels,
      datasets: [
        {
          label: 'Overview',
          data,
          borderColor: 'rgba(59,130,246,1)',
          backgroundColor: 'rgba(59,130,246,0.2)'
        }
      ]
    }
  }

  const handleExport = () => {
    // Dummy export: downloads current chart data as JSON
    const data = getData()
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'overview-data.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="overview">
      <div className="overview-header">
        <div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option>All</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
        <div>
          <button className="btn" onClick={handleExport}>Export</button>
        </div>
      </div>

      <div className="chart">
        <Line data={getData()} />
      </div>
    </section>
  )
}

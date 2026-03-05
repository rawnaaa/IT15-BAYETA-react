import React from 'react';
import '../Dashboard.css'; // Using your existing CSS for consistency

const Analytics = () => {
  return (
    <div className="content-area">
      <div className="analytics-header">
        <h1>Data Analytics</h1>
        <p className="subtitle">Real-time performance insights</p>
      </div>

      <div className="stats-grid">
        {/* Growth Rate Card with Visual Ring */}
        <div className="stat-card analytics-card">
          <div className="card-header">
            <h3>Growth Rate</h3>
            <span className="trend positive">+2.5%</span>
          </div>
          <div className="visual-stat">
            <div className="progress-ring">
              <svg width="100" height="100">
                <circle className="ring-bg" cx="50" cy="50" r="40" />
                <circle className="ring-fill growth" cx="50" cy="50" r="40" />
              </svg>
              <div className="percentage">24%</div>
            </div>
          </div>
          <p className="stat-desc">Weekly user acquisition</p>
        </div>

        {/* Engagement Card with Visual Ring */}
        <div className="stat-card analytics-card">
          <div className="card-header">
            <h3>Engagement</h3>
            <span className="status-pill active">High</span>
          </div>
          <div className="visual-stat">
            <div className="progress-ring">
              <svg width="100" height="100">
                <circle className="ring-bg" cx="50" cy="50" r="40" />
                <circle className="ring-fill engagement" cx="50" cy="50" r="40" />
              </svg>
              <div className="percentage">88%</div>
            </div>
          </div>
          <p className="stat-desc">User retention rate</p>
        </div>
      </div>

      {/* NEW SECTION: Performance Breakdown */}
      <div className="recent-activity-section">
        <h3>Metric Breakdown</h3>
        <table className="activity-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Status</th>
              <th>Current Score</th>
              <th>Target</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Page Views</td>
              <td><span className="status-pill active">Stable</span></td>
              <td>12.4k</td>
              <td>15.0k</td>
            </tr>
            <tr>
              <td>Bounce Rate</td>
              <td><span className="status-pill pending">Warning</span></td>
              <td>32%</td>
              <td>25%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analytics;
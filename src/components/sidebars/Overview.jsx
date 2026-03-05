import React from 'react';

const Overview = () => {
  const stats = [
    { label: 'Total Users', value: '1,284', change: '+12%', icon: '👥' },
    { label: 'Active Sessions', value: '432', change: '+5%', icon: '⚡' },
    { label: 'Pending Requests', value: '18', change: '-2%', icon: '⏳' },
  ];

  const recentUsers = [
    { name: 'Sarah Jenkins', status: 'Active', date: 'Oct 24, 2023', amount: '$120.00', initial: 'SJ' },
    { name: 'Michael Ross', status: 'Pending', date: 'Oct 23, 2023', amount: '$45.00', initial: 'MR' },
  ];

  return (
    <div className="overview-container">
      {/* Header with Greeting */}
      <div className="dashboard-header">
        <h2 className="welcome-text">System Overview</h2>
        <button className="export-btn">Download Report</button>
      </div>

      {/* Stats Grid with Icons */}
      <section className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card modern">
            <div className="stat-card-top">
              <span className="stat-icon-bg">{stat.icon}</span>
              <span className={`trend-pill ${stat.change.includes('+') ? 'pos' : 'neg'}`}>
                {stat.change}
              </span>
            </div>
            <h2 className="stat-value">{stat.value}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Enhanced Table Section */}
      <section className="recent-activity">
        {/* Corrected Header Container */}
        <div className="section-header">
          <h3>Recent Transactions</h3>
          <button className="view-all-btn">View All</button>
        </div>
        
        <div className="table-wrapper">
          <table className="modern-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Status</th>
                <th>Date</th>
                <th>Amount</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((user, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="user-info">
                      <div className="user-avatar">{user.initial}</div>
                      <span>{user.name}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`status-pill ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>{user.date}</td>
                  <td className="amount-cell">{user.amount}</td>
                  <td className="text-right">
                    <button className="action-dot-btn">⋮</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Overview;
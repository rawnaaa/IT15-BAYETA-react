import React from 'react';
import { useNavigate } from 'react-router-dom'; // Added for navigation
import './Dashboard.css';



const Dashboard = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const stats = [
    { label: 'Total Users', value: '1,284', change: '+12%' },
    { label: 'Active Sessions', value: '432', change: '+5%' },
    { label: 'Pending Requests', value: '18', change: '-2%' },
  ];

  const handleLogout = () => {
    // Redirects user back to the login page (path "/")
    navigate('/'); 
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">Lovebirds</div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active">Overview</li>
            <li>Analytics</li>
            <li>Messages</li>
            <li>Settings</li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          {/* Added the click handler here */}
          <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="content-header">
          <h1>Dashboard Overview</h1>
          <div className="user-profile">
            <span>David Brooks</span>
            <div className="avatar">DB</div>
          </div>
        </header>

        {/* Stat Cards */}
        <section className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <p className="stat-label">{stat.label}</p>
              <h2 className="stat-value">{stat.value}</h2>
              <span className={`stat-change ${stat.change.includes('+') ? 'pos' : 'neg'}`}>
                {stat.change} from last month
              </span>
            </div>
          ))}
        </section>

        {/* Data Table Area */}
        <section className="recent-activity">
          <h3>Recent Activity</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sarah Jenkins</td>
                  <td><span className="status-pill active">Active</span></td>
                  <td>Oct 24, 2023</td>
                  <td>$120.00</td>
                </tr>
                <tr>
                  <td>Michael Ross</td>
                  <td><span className="status-pill pending">Pending</span></td>
                  <td>Oct 23, 2023</td>
                  <td>$45.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
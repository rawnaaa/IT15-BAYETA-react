import React from 'react';
import { useNavigate, Routes, Route, NavLink } from 'react-router-dom';
import './Dashboard.css';

// Import your sub-components
import Overview from './sidebars/Overview';
import Analytics from './sidebars/Analytics';
import Messages from './sidebars/Messages';
import Settings from './sidebars/Settings';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">DataPulse</div>
        <nav className="sidebar-nav">
          <ul>
            {/* end prop ensures 'Overview' isn't always highlighted */}
            <li><NavLink to="/dashboard" end>Overview</NavLink></li>
            <li><NavLink to="/dashboard/analytics">Analytics</NavLink></li>
            <li><NavLink to="/dashboard/messages">Messages</NavLink></li>
            <li><NavLink to="/dashboard/settings">Settings</NavLink></li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="content-header">
          {/* This title can be dynamic or static */}
          <h1>Dashboard</h1> 
          <div className="user-profile">
            <span>David Brooks</span>
            <div className="avatar">DB</div>
          </div>
        </header>

        {/* THIS IS THE ENGINE: It swaps content based on the URL */}
        <section className="content-area">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="messages" element={<Messages />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
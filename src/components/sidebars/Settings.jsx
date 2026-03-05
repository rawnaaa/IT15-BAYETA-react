import React from 'react';

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="section-header">
        <div>
          <h2 className="welcome-text">Account Settings</h2>
          <p className="subtitle">Manage your profile and system preferences</p>
        </div>
      </div>

      <div className="settings-grid-layout">
        {/* Profile Section */}
        <div className="settings-card">
          <div className="card-header-simple">
            <span className="icon">👤</span>
            <h3>Profile Information</h3>
          </div>
          <div className="settings-form">
            <div className="input-group">
              <label>Display Name</label>
              <input type="text" placeholder="David Brooks" className="modern-input" />
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="david.brooks@example.com" className="modern-input" />
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="settings-card">
          <div className="card-header-simple">
            <span className="icon">⚙️</span>
            <h3>System Preferences</h3>
          </div>
          <div className="settings-options">
            <div className="option-item">
              <div className="option-info">
                <span>Email Notifications</span>
                <p>Receive weekly activity reports</p>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
            
            <div className="option-item">
              <div className="option-info">
                <span>Dark Mode</span>
                <p>Use high-contrast theme</p>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-footer">
        <button className="save-btn-primary">Save Changes</button>
        <button className="cancel-btn">Reset to Default</button>
      </div>
    </div>
  );
};

export default Settings;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotPass, setIsForgotPass] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard'); 
  };

  const handleReset = (e) => {
    e.preventDefault();
    alert("Password updated successfully!");
    setIsForgotPass(false); 
  };

  return (
    <div className="login-container">
      
      {/* THE MOVING BACKGROUND: Now matches a Data/Finance theme */}
      <div className={`sliding-bg ${isForgotPass ? 'at-left' : 'at-right'}`}>
        <div className="design-content">
          <div className="brand-circle">
            {/* Swapped bird for a growth chart icon to match your dashboard metrics */}
            <span className="brand-icon">📊</span>
          </div>
          <h1 className="brand-name">DataPulse</h1>
          <p className="brand-tagline">
           Having a good view of everything.
          </p>
        </div>
      </div>

      {/* LOGIN PANEL (Left side) */}
      <div className={`form-holder left-side ${isForgotPass ? 'fade-out' : 'fade-in'}`}>
        <div className="login-card">
          <h2>Secure Login</h2>
          <p className="subtitle">Access your financial overview</p>
          <form onSubmit={handleLogin}>
            <div className="input-field">
              <span className="icon">✉️</span>
              <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-field">
              <span className="icon">🔒</span>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="login-button">Sign In</button>
            <button type="button" className="text-link" onClick={() => setIsForgotPass(true)}>
              Forgot Password?
            </button>
          </form>
        </div>
      </div>

      {/* FORGOT PASS PANEL (Right side) */}
      <div className={`form-holder right-side ${isForgotPass ? 'fade-in' : 'fade-out'}`}>
        <div className="login-card">
          <h2>Account Recovery</h2>
          <p className="subtitle">Reset your administrative credentials</p>
          <form onSubmit={handleReset}>
            <div className="input-field">
              <span className="icon">🔒</span>
              <input type="password" placeholder="New Password" required />
            </div>
            <div className="input-field">
              <span className="icon">✅</span>
              <input type="password" placeholder="Confirm Password" required />
            </div>
            <button type="submit" className="login-button">Update Credentials</button>
            <button type="button" className="text-link" onClick={() => setIsForgotPass(false)}>
              Back to Login
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Login;
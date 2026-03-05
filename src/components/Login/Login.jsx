import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import this
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // 2. Initialize the hook

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Submitted:", { email, password });
    
    // 3. Instead of just an alert, navigate to the dashboard path
    navigate('/dashboard'); 
  };

  return (
    <div className="login-container">
      {/* Left side: Illustration */}
      <div className="login-illustration">
        <img 
          src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg" 
          alt="Illustration" 
        />
      </div>

      {/* Right side: The Blue Section with White Card */}
      <div className="login-form-section">
        <div className="login-card">
          <h2>Hello!</h2>
          <p className="subtitle">Sign Up to Get Started</p>

          <form onSubmit={handleLogin}>
            <div className="input-field">
              <span className="icon">✉️</span>
              <input 
                type="email" 
                placeholder="Email Address"
                value={email} // 2. Bind value to state
                onChange={(e) => setEmail(e.target.value)} // 3. Allow typing
                required 
              />
            </div>

            <div className="input-field">
              <span className="icon">🔒</span>
              <input 
                type="password" 
                placeholder="Password"
                value={password} // 2. Bind value to state
                onChange={(e) => setPassword(e.target.value)} // 3. Allow typing
                required 
              />
            </div>

            <button type="submit" className="login-button">Login</button>
            <a href="#" className="forgot-pass">Forgot Password?</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
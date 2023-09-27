import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Here, you can handle the form submission, e.g., send the data to a server or perform validation.
    // For this example, we'll simply log the form data.
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="design">
          <div className="pill-1 rotate-45"></div>
          <div className="pill-2 rotate-45"></div>
          <div className="pill-3 rotate-45"></div>
          <div className="pill-4 rotate-45"></div>
        </div>
        <div className="login">
          <h3 className="title">User Login</h3>
          <div className="text-input">
            <i className="ri-user-fill"></i>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="text-input">
            <i className="ri-lock-fill"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-btn" type="submit">
            LOGIN
          </button>
          <a href="#" className="forgot">
            Forgot Username/Password?
          </a>
          <div className="create">
            <Link to="/register">Create Account</Link>
            <i className="ri-arrow-right-fill"></i>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;

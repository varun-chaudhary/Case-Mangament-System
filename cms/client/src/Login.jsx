import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const nav=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://127.0.0.1:3000/login', { email, pass})
      .then((res) => {
        console.log(res);
        if (res.data === "Success") {
          // console.log("hogya login");
          nav('/home');
        } else if (res.data === "The password is incorrect") {
          alert(res.data);
        } else if (res.data === "User does not exist") {
          alert(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
              placeholder="Email"
              value={email} // Change from `username` to `email`
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text-input">
            <i className="ri-lock-fill"></i>
            <input
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button className="login-btn" type="submit">
            LOGIN
          </button>
          <a href="#" className="forgot">
            Forgot UserId/Password?
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

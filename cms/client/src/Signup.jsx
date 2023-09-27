import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const nav=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:3000/register', { name, email, gender, pass })

    .then((res) => {
        console.log(res);
        nav('/login');
    })
    .catch((err) => {console.log(err)})
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
            <h3 className="title">Register</h3>
            <div className="text-input">
                <i className="ri-user-fill"></i>
                <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="text-input">
                <i className="ri-user-fill"></i>
                <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="text-input">
                <i className="ri-user-fill"></i>
                <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                </select>
            </div>
            <div className="text-input">
                <i className="ri-lock-fill"></i>
                <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
                />
            </div>
            <button className="login-btn" type="submit">SIGN UP</button>
            {/* <div className="create">
                <Link to="/login">Already have an account? Login here.</Link>
            </div> */}
        </div>
        </div>
    </form>
  );
}

export default Signup;

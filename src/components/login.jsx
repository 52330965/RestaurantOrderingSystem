import React from 'react'
import { Link } from 'react-router-dom';
import "./login.css"
const login = () => {
  return (
   
    <>
    <div className="login-page">

      <div className="login-box">

        <h1>Welcome Back!</h1>
        <h2>RR Restaurant</h2>

        <p>Login to continue your experience.</p>

        <form>
          <input
            type="email"
            placeholder="Enter your Email"
            required
          />

          <input
            type="password"
            placeholder="Enter your Password"
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="register-link">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

        <Link to="/" className="back-home">
          Back to Home
        </Link>

      </div>

    </div>

    
    </>
  );
};

export default login;

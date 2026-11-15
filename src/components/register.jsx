import React from "react";
import { Link } from "react-router-dom";
import "./register.css";
const register = () => {
  return (
    <>
      <div className="register-page">
        <div className="register-box">
          <h1>Create Account</h1>
          <h2>RR Restaurant</h2>

          <p>Join us and enjoy your favorite meals!</p>

          <form>
            <input type="text" placeholder="Enter your Full Name" required />

            <input type="email" placeholder="Enter your Email" required />

            <input type="password" placeholder="Enter your Password" required />

            <input
              type="password"
              placeholder="Confirm your Password"
              required
            />

            <button type="submit">Register</button>
          </form>

          <p className="login-link">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

          <Link to="/" className="back-home">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default register;

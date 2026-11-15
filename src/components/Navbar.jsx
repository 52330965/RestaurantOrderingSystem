import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        
        <div className="nav-items">
          <NavLink to="/home" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/menu" className="nav-link">
            Menu
          </NavLink>
          <NavLink to="/your-selection" className="nav-link">
            Your Selection
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </div>
        <div className="nav-loginregister">
          <NavLink to="/register" className="nav-link">
            Register
          </NavLink>
          <NavLink to="/" className="nav-link">
            Login
          </NavLink>
        </div>

      </nav>
    </>
  );
};

export default Navbar;

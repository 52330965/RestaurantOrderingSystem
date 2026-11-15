import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
     <nav class="navbar bg-1 fg-2">
  <div class="container-fluid">
    
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn-outline theme-success" type="submit" style={{color:" #573d1f",borderColor:"#e6ddd0"}}>Search</button>
    </form>
  </div>
</nav>
      <nav className="navbar">
        
        <div className="nav-items">
          <NavLink to="/" className="nav-link">
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
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </div>

      </nav>
    </>
  );
};

export default Navbar;

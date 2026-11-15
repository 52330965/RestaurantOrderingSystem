import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="utility-bar">
        <form className="search-form" role="search">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="search-submit" type="submit">
            Search
          </button>
        </form>
      </div>
      <nav className={`navbar${isOpen ? " is-open" : ""}`} aria-label="Main navigation">
        <button
          className="nav-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="nav-items" id="primary-navigation">
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/menu" className="nav-link" onClick={closeMenu}>
            Menu
          </NavLink>
          <NavLink to="/your-selection" className="nav-link" onClick={closeMenu}>
            Your Selection
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </NavLink>
        </div>
        <div className="nav-loginregister">
          <NavLink to="/register" className="nav-link" onClick={closeMenu}>
            Register
          </NavLink>
          <NavLink to="/login" className="nav-link" onClick={closeMenu}>
            Login
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Secure Haven</h1>
       <nav> {/*style={{ display: 'flex', alignItems: 'center', width: '100%' }}> */}
        <ul className="nav-list" style={{ flex: 1 }}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/features" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Dashboard
            </NavLink>
          </li>
        </ul>
        <div className="nav-auth-btns">
          <Link to="/login" className="nav-btn nav-signup-btn">Login</Link>
          <Link to="/signup" className="nav-btn nav-signup-btn">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

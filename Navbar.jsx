import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h2>Hope Foundation</h2>
    <ul>
      <li><Link to="/">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/donate">Donate</Link></li>
    </ul>
  </nav>
);

export default Navbar;

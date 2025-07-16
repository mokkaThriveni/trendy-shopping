import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🛍️ TrendyMart</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mobiles">Mobiles</Link></li>
        <li><Link to="/Laptop">Laptops</Link></li>
        <li><Link to="/men">Men Fashion</Link></li>
        <li><Link to="/women">Women Fashion</Link></li>
        <li><Link to="/furniture">Furniture</Link></li>
        <li><Link to="/cart">🛒 Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

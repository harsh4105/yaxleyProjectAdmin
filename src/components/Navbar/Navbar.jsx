
import React from 'react';
// import './Navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex items-center lg:py-6 lg:px-10">
      <div className="navbar-logo w-[35%] md:px-14">
        <img src="https://c.animaapp.com/0ReT5wt9/img/group-4034-1.png" alt="Logo" />
      </div>
      <ul className={`flex justify-between font-semibold DMSans_18pt_Light w-[70%] text-[#FF6612] navbar-links ${isOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to="/services" className="nav-link">Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/countryInfo" className="nav-link">Country Information</Link>
        </li>
        <li className="nav-item">
          <Link to="#course-search" className="nav-link">Course Search</Link>
        </li>
        <li className="nav-item">
          <Link to="https://uniexpertsdemo.blogspot.com/" className="nav-link">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link to="/testprep" className="nav-link">Test Prep</Link>
        </li>
        <li className="nav-item">
          <Link to="/events" className="nav-link">Events</Link>
        </li>
        <li className="nav-item">
          <Link to="/contactus" className="nav-link btn-type bg-[#FF6612] text-white px-4 rounded-full py-1">Contact Us</Link>
        </li>
      </ul>
      <button className="navbar-toggle md:hidden block" onClick={toggleMenu}>
        <span className="navbar-toggle-icon">&#9776;</span>
      </button>
    </nav>
  );
};

export default Navbar;

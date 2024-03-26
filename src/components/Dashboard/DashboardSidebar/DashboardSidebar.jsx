import React from 'react';
import {Link} from "react-router-dom";
import './DashboardSidebar.css';

const DashboardSidebar = () => {
  return (
    <div className="sidebar">
      <div className="section">
        <Link to='/' className='sidebar-links'>Home</Link>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adip</p> */}
      </div>
      <div className="section">
        <Link to='/service' className='sidebar-links'>Services</Link>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adip</p> */}
      </div>
      <div className="section">
      <Link to='/countryInfo' className='sidebar-links'>Country Info</Link>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adip</p> */}
      </div>
      <div className="section">
        <Link to='/contactUs' className='sidebar-links'>Contact Us</Link>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adip</p> */}
      </div>
      <div className="section">
        <Link to='/events' className='sidebar-links'>Events</Link>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adip</p> */}
      </div>
      <div className="section">
        <Link to='/testPrep' className='sidebar-links'>Test Prep</Link>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adip</p> */}
      </div>
    </div>
  );
};

export default DashboardSidebar;

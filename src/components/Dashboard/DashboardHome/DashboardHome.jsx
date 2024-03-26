import React from 'react';
import { useState, useEffect } from 'react';
import './DashboardHome.css';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import DashboardFAQS from '../DashboardFAQS/DashboardFAQS';
import PreviousQueAndAns from '../DashboardPreviousQueAndAns/DashboardPreviousQueAndAns';

const DashboardHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://13.127.109.224:4000/dashboardHome');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);
  return (
    <div className='Dashboard-Home'>
      <div className='Dashboard-sidebar-section'>
        <DashboardSidebar />
      </div>
      <div className='Dashboard-contant-section'>
        <div className="Dashboard-home-heading-heading">
          <h2 className='Dashboard-home-heading'>Home</h2>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adip</p> */}
        </div>
        <DashboardFAQS heading='Home Page' for='home' />
        <h3 className='previously-added'>Previously added FAQ questions</h3>
        {
          data.map((item) =>
            <PreviousQueAndAns
              heading={item.selectedState}
              question={item.inputValue}
              questionDescription="React.js is a JavaScript library for building user interfaces."
              answer={item.textAreaValue}
              answerDescription="It is maintained by Facebook and a community of individual developers and companies."
            />
          )
        }
      </div>
    </div>
  );
}

export default DashboardHome;

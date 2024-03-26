import React, { useState,useEffect } from 'react';
import HeroForEvent from '../components/HeroSection/HeroForEvent';
import AllEventAW from '../components/AllEventsAndWebinar/AllEventAW';
import UpcomingEAW from '../components/UpcomingEventsAndWebinar/UpcomingEAW'
import Faqs from '../components/Faqs/Faqs';
const Events = () => {
  useEffect(() => {
    fectchData();
  },[])
  const [data, setData] = useState([]);

  const fectchData = async () => {
    try {
      const response = await fetch('http://13.127.109.224:4000/dashboardEvents');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // console.log(data);
      setData(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  return (
    <div>
      <HeroForEvent />
      <UpcomingEAW />
      <AllEventAW />
      <Faqs />
    </div>
  )

};

export default Events;

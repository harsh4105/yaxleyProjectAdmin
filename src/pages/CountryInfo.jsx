import React, { useState,useEffect } from 'react';
import CountryInfoHeroForService from '../components/HeroSection/HeroForCountryInfo';
import Usa from '../components/Usa/Usa';
import UnitedKingdom from '../components/UnitedKingdom/UnitedKingdom';
import Canada from '../components/Canada/Canada';
import Australia from '../components/Australia/Australia';
import NewzeLand from '../components/NewzeLand/NewzeLand';
import Singapore from '../components/Singapore/Singapore';
import Ireland from '../components/Ireland/Ireland';
import France from '../components/France/France';
import Poland from '../components/Poland/Poland';
import Faqs from '../components/Faqs/Faqs';

const CountryInfo = () => {
  useEffect(() => {
    fectchData();
  },[])
  const [data, setData] = useState([]);

  const fectchData = async () => {
    try {
      const response = await fetch('http://13.127.109.224:4000/dashboardCountryInfo');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  return (
    <div>
      <CountryInfoHeroForService />
      <Usa />
      <UnitedKingdom />
      <Canada />
      <Australia />
      <NewzeLand />
      <Singapore />
      <Ireland />
      <France />
      <Poland />
      <Faqs />
    </div>
  );
};

export default CountryInfo;

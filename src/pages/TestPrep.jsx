import React, { useEffect, useState } from "react";
import HeroForTestPrep from "../components/HeroSection/HeroForTestPrep";
import IELTS_Section from "../components/IELTS_Section/IELTS_Section";
import IELTS_Modules from "../components/IELTS_Modules/IELTS_Modules";
import WeGotYouCovered from "../components/WeGotYouCovered/WeGotYouCovered";
import BatchesForYou from "../components/BatchesForYou/BactchesForYou";
import OurExpertsInYourSupports from "../components/OurExpertsInYourSupports/OurExpertsInYourSupports";
import Faqs from '../components/Faqs/Faqs'
import Carousel from "../components/Carousel/Carousel";
const TestPrep = () => {
    useEffect(()=>{
        fectchData();
    },[])
    const [data,setData]=useState([]);
    
    const fectchData = async () => {
        try {
            const response = await fetch('http://13.127.109.224:4000/dashboardTestPrep');
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
            <HeroForTestPrep />
            <IELTS_Section />
            <IELTS_Modules />
            <WeGotYouCovered />
            <BatchesForYou />
            <OurExpertsInYourSupports />
            <Carousel />
            <Faqs />
        </div>
    )
}

export default TestPrep;
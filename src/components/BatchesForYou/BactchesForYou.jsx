import React, { useState ,useEffect} from 'react';
import './BatchesForYou.css';
import UpcomingImg from '../images/UpcomingImg.png'
import BatchesForYouImg from '../images/BatchesForYouImg.png'
import webinar from "../images/webinars.jpg"
import student from "../images/student.jpg"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const BatchesForYou = () => {

   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

   const fetchData = async () => {
      const response = await fetch('http://13.127.109.224:4000/dashboardTestPrep');
      const result = await response.json();
      setData(result);
  };
   useEffect(()=>{
      fetchData();
  },[])
  const [data,setData]=useState([]);
  


   console.log(data,"asdfsdf")
   return (
   
      <div className=''>
      <Slider {...settings}  className='Test-repo_container'>
      {
         data.map((values)=>(
            <div className='inner_slide_container'>
               <img src={webinar} className='slide_image'/>
               <div className='inner_slide_container_content'>
                  <p className='inner_slide_container_batchName'>{values.batchName}</p>
                  <p className='inner_slide_container_description'>{values.description}</p>
                        <div className='inner_slide_container_points'>{values.P1}</div>
                        <div className='inner_slide_container_points'>{values.P2}</div>
                        <div className='inner_slide_container_points'>{values.P3}</div>
                        <div className='inner_slide_container_points'>{values.P4}</div>

               </div>
            </div>
         ))
      }
    </Slider>
    </div>
   );
};

export default BatchesForYou;

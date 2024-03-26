import React from "react";
import './Country.css';

import { useState ,useEffect} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const CountryInfo=()=>{

    const countryArr = [
        {
            id : 1,
            image : "/home/paris.png",
            flag : "/home/1024px-United-states_flag_icon_round.svg.png",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id : 2,
            image : "/home/uk.png",
            flag : "/home/1024px-United-states_flag_icon_round.svg.png",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id : 3,
            image : "/home/usa.png",
            flag : "/home/1024px-United-states_flag_icon_round.svg.png",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
   return(
    <>
    <div className="relative">
    <div className="country-info">
         <h3 className="text-5xl text-[#353535] Raleway_Bold  text-center">Country Information </h3>
                <p className="text-center w-[30%] m-auto mt-2 text-[#727272]">Lorem ipsum dolor sit amet,
                <span className="gradient-text-gradient-two gradient-text gradient-text-gradient-two" >consectetur adipiscing</span>
                  elit, sed do eiusmod tempor incididunt.</p>
    </div>


      <div className='home-country-slider '>
        <Slider {...settings}  className='home-country-slider '>
            {
                countryArr.map((values,index)=>(
                    <div className="main-container h-[300px]">
                            <img className={`w-[420px] h-[300px]`} src={values.image}/>
                           
                            <p className="-mt-36 text-white m-auto px-10 ">{values.content}</p>
                            <div className="-mt-[120px] ml-[35px] flex  items-center gap-2">
                                    <img src={values.flag} className="w-[30px]"/>
                                    <p className="text-white font-semibold text-[22px]">USA</p>
                            </div>
                    </div>
                ))
            }
        </Slider>
    </div>

</div>
</>
   )
}

export default CountryInfo;




































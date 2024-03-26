import React from "react";
import './Hero.css';
import heroSectionStudent from '../images/heroSectionStudent.png';
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
    return (
        <div className="hero-section relative ">
        <div className="bg-[url('/public/home-building-bg.png')] bg-center  bg-[length:1300px_510px] bg-no-repeat px-20 py-44">
            <div className="flex">
                <div className="m-auto p-0 w-[50%]"> 
                    <div className="">
                   <p className="text-white Raleway_Bold text-4xl w-[75%]"> Shaping Futures, Connecting Cultures
                   </p>
                    <p className="text-white w-[70%]">Our technology-driven solutions assist international students in selecting top universities worldwide</p>
                   </div>
                   <button className="flex items-center mt-6 bg-white gap-4 px-6 py-3 rounded-full Raleway_SemiBold font-semibold text-[#FF6612]">Enquire Now <FaArrowRightLong/></button>
                </div>
                <div className="-mt-10 m-auto w-[300px]">
                    <img src={"/yaxelpng/girl-back-bg.png"} alt="student-img" className="absolute top-0 right-10" />
                    <img src={heroSectionStudent} alt="student-img" className=" absolute w-[366px] top-[-39px] right-36" />
                </div>
            </div>
            <div className="absolute bottom-14 left-32">
                <p className="bg-white DMSans_18pt_Light rounded-full px-1 p-1 text-center m-auto text-[18px] font-semibold text-gray-600 "><span className="bg-gradient-to-r from-[#3312FF] to-[#FF59BD] text-white text-[16px] rounded-full  px-3 py-1" >New</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. jsaid</p>
            </div>
        </div>
        </div>
    )
}

export default Hero;
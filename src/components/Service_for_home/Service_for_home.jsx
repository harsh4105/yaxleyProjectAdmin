import React from "react";
import './Service_for_home.css';
import counselling from '../images/counselling.png';
import admission from '../images/admission.png';
import visa from '../images/visa.png';
import scholarship from '../images/scholarship.png';
import educationLoan from '../images/educationLoan.png';
const Service_for_Home = () => {
    return (
        <>
            <div className="bg-[url('/public/home/serviceimages/rose-png.png')]  bg-center  bg-contain bg-no-repeat py-8">
                <h3 className="text-5xl text-[#353535] Raleway_Bold  text-center">Services</h3>
                <p className="text-center w-[30%] m-auto mt-2 text-[#727272]">Lorem ipsum dolor sit amet,
                <span className="gradient-text-gradient-two gradient-text gradient-text-gradient-two" >consectetur adipiscing</span>
                  elit, sed do eiusmod tempor incididunt.</p>

                  <div className="mt-16">
                        <div className="grid grid-cols-12 justify-items-center m-auto gap-10" >
                            <div className="col-span-1"></div>
                            <div className="col-span-3">
                                <div className="p-8 drop-one rounded-3xl bg-white w-[385px]">
                                    <img src="/home/serviceimages/girl-two.png"/>
                                    <div className="flex items-center mt-2">
                                        <img src="/home/serviceimages/double-tick.png"/>
                                        <span className=" text-[20px] Raleway_SemiBold">Counselling</span>
                                    </div>
                                    <p className="text-[#727272] Raleway_SemiBold w-[100%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    <p className="text-[#727272] Raleway_SemiBold w-[100%]">
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1"></div>

                            <div className="col-span-6 " >
                            <div className="flex gap-6">
                            
                            <div className="p-8 drop-one rounded-3xl bg-white w-[355px] h-[220px]">
                                    <img src="/home/serviceimages/girl-one.png"/>
                                    <div className="flex items-center mt-2">
                                        <img src="/home/serviceimages/double-tick.png"/>
                                        <span className=" text-[20px] Raleway_SemiBold">Admission</span>
                                      
                                    </div>
                                    <p className="text-[#727272] Raleway_SemiBold w-[100%]">Lorem ipsum dolor sit amet ...</p>
                            </div>
                            
                        
                            
                            <div className="p-8 drop-one rounded-3xl bg-white w-[355px] h-[220px]">
                                    <img src="/home/serviceimages/passport.png"/>
                                    <div className="flex items-center mt-2">
                                        <img src="/home/serviceimages/double-tick.png"/>
                                        <span className=" text-[20px] Raleway_SemiBold">Visa Processing</span>
                                      
                                    </div>
                                    <p className="text-[#727272] Raleway_SemiBold w-[100%]">Lorem ipsum dolor sit amet ...</p>
                            </div>
                            </div>
                            <div className="flex gap-6 mt-8">
                            
                            <div className="p-8 drop-one rounded-3xl bg-white w-[355px] h-[220px]">
                                    <img src="/home/serviceimages/pen.png"/>
                                    <div className="flex items-center mt-2">
                                        <img src="/home/serviceimages/double-tick.png"/>
                                        <span className=" text-[20px] Raleway_SemiBold">Scholarships</span>
                                      
                                    </div>
                                    <p className="text-[#727272] Raleway_SemiBold w-[100%]">Lorem ipsum dolor sit amet ...</p>
                            </div>
                            
                        
                            
                            <div className="p-8 drop-one rounded-3xl bg-white w-[355px] h-[220px]">
                                    <img src="/home/serviceimages/money.png"/>
                                    <div className="flex items-center mt-2">
                                        <img src="/home/serviceimages/double-tick.png"/>
                                        <span className=" text-[20px] Raleway_SemiBold">Education Loan</span>
                                      
                                    </div>
                                    <p className="text-[#727272] Raleway_SemiBold w-[100%]">Lorem ipsum dolor sit amet ...</p>
                            </div>
                            </div>
                            </div>
                        </div>  
                  </div>
            </div>
        </>
    )
}

export default Service_for_Home;
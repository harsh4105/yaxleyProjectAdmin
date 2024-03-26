import React from 'react';
import './Footer.css';
import footerSocialMedia from '../images/footerSocialMedia.png';
const Footer = () => {
    return (
        <div className='footer mt-10 bg-gradient-to-r from-blue-500 to-green-500'>
            <div className='footer-header Raleway_Bold'>
                Stay updated with Yaxley Global
            </div>
            <div className='flex items-center w-[80%] relative mb-10 rounded-full'>
                <input
                    className='w-[100%] h-[55px]  rounded-full px-10 py-[0.5px]'
                    type="text"
                    placeholder="Please enter your email Id"
                />
                <button type="submit" className='absolute px-6 py-3 bg-[#FF6612] mr-1  right-0 rounded-full Raleway_Bold'>Subscribe Now</button>
            </div>
            <div className='hr-line'></div>

            <div className='footer-links-section mt-6'>
                <div className='section1 sections'>
                    <h1 className=' Raleway_Bold mt-10'>About YaxleYGlobal</h1>
                    <p className='Raleway_SemiBold'>We have made it easier for every student who aspires to do Overseas
                        Education. Working with around 500 Universities aro the Globe to
                        fulfil everyones Carrer goals.
                    </p>
                </div>
                <div className='section2 sections'>
                    <h1 className='mt-4'>Service</h1>
                    <ul className='list-disc px-4 Raleway_SemiBold'>
                        <li>Counselling</li>
                        <li>Admission</li>
                        <li>Scholarship's</li>
                        <li>Visa Processing</li>
                        <li>Education Loan</li>
                    </ul>
                </div>
                <div className='section3 sections'>
                    <h1>Important Links</h1>
                    <ul className='list-disc px-4 Raleway_SemiBold' >
                        <li>Country Information</li>
                        <li>Course Search</li>
                        <li>Blogs</li>
                        <li>Social Media Landing Page</li>
                        <li>Test Prep</li>
                    </ul>
                </div>
                <div className='section4 sections '>
                    <h1>Stay Connected</h1>
                    <p>if you want know more about web development, stay connected to our handles.</p>
                    <img src={footerSocialMedia}/>
                </div>
            </div>
            
            <hr className='bg-white p-[0.1px] w-[100%] mt-24 mb-10'/>
  
           <div className='flex w-[100%] justify-between'>
                <span>copyright © All Rights Reserved | Yaxley Global Pvt Ltd.</span>
                <ul className='flex gap-10'>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Cookies</li>
                    <li>Disclaimer</li>
                </ul>
           </div>
        </div>
    );
};

export default Footer;

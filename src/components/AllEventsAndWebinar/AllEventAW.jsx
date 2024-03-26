import React from "react";
import './AllEventAW.css';
import { useState,useEffect } from "react";
import UpcomingEAW from '../images/UpcomingEAW.png';
import UpcomingEventsAndWebinarImg from '../images/UpcomingEventsAndWebinarImg.png';
import webinar from "../images/webinars.jpg";

const AllEventAW = () => {


    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const response = await fetch('http://13.127.109.224:4000/dashboardEvents');
        const result = await response.json();
        setData(result);
    };


    return (
        <div className="upcoming-webinar-for-event">
            <div className="upcoming-section-headings">
                <h1>All Events & Webinars</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className="upcoming-webinar-section-context">
                <div className="btns-block">
                    <button>Events</button>
                    <button>Webinar</button>
                </div>
                <div className="upcoming-search-bar">
                    <input type="text" placeholder="Explore events" />
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <div className="upcoming-events-blocks-section">
            {
                data.map((values)=>(
                    <div className="upcoming-events-block">
                        <img src={webinar} alt="Events-img" className="upcoming-events-image" />
                        <p className="upcoming-events-date">{values.date}</p>
                        <p className="upcoming-events-eventHeading">{values.eventHeading}</p>
                        <p className="upcoming-events-description">{ values.description.slice(0, 180)}<span className="upcoming-events-description-more">...More</span></p>
                        <div className="upcoming-events-btn-container">
                                <button>See Full Event</button>
                                <button>Register Now</button>
                        </div>
                    </div>
                ))
            }
               
                {/* <div className="upcoming-events-block">
                    <img src={UpcomingEventsAndWebinarImg} alt="Events-img" />
                </div>
                <div className="upcoming-events-block">
                    <img src={UpcomingEventsAndWebinarImg} alt="Events-img" />
                </div>
                <div className="upcoming-events-block">
                    <img src={UpcomingEventsAndWebinarImg} alt="Events-img" />
                </div> */}
            </div>
        </div>
    )
}

export default AllEventAW;
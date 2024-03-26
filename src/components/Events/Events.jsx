import React from "react";
import './Events.css';
import EventImg from "../images/EventImg.png";
const Events=()=>{
    return(
        <div className="mt-10">
            <h3 className="text-center text-5xl font-semibold text-[#353535] Raleway_Bold">Events</h3>

            <p className="text-center text-[20px] w-[60%] m-auto text-[#727272] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            <div className="grid grid-cols-2 gap-6 px-10 mt-8">
                <div className="flex">
                    <div className="drop-shaow-two  flex gap-4 rounded-xl bg-white hover:bg-[#FF66121A]">
                        <img src="/home/class-room.png"/>
                        <div className="px-2">
                        <p className="text-[22px] font-semibold mt-4">Discussion Event</p>
                            <p className="text-[#727272] font-medium Raleway_Thin text-[18px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab
                        </p>
                        <button className="mt-6 bg-[#FF6612] text-white px-5 py-2 rounded-full Raleway_Bold">
                        Register Now
                        </button>
                        </div>
                    </div>
                    
                </div>

                <div className="drop-shaow-two  flex gap-4 rounded-xl bg-white hover:bg-[#FF66121A]">
                        <img src="/home/class-room.png"/>
                        <div className="px-2">
                        <p className="text-[22px] font-semibold mt-4">Discussion Event</p>
                            <p className="text-[#727272] font-medium Raleway_Thin text-[18px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab
                        </p>
                        <button className="mt-6 bg-[#FF6612] text-white px-5 py-2 rounded-full Raleway_Bold">
                        Register Now
                        </button>
                        </div>
                    </div>
                
                    <div className="flex">
                    <div className="drop-shaow-two  flex gap-4 rounded-xl bg-white hover:bg-[#FF66121A]">
                        <img src="/home/class-room.png"/>
                        <div className="px-2">
                        <p className="text-[22px] font-semibold mt-4">Discussion Event</p>
                            <p className="text-[#727272] font-medium Raleway_Thin text-[18px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab
                        </p>
                        <button className="mt-6 bg-[#FF6612] text-white px-5 py-2 rounded-full Raleway_Bold">
                        Register Now
                        </button>
                        </div>
                    </div>
                    
                </div>

                <div className="drop-shaow-two  flex gap-4 rounded-xl bg-white hover:bg-[#FF66121A]">
                        <img src="/home/class-room.png"/>
                        <div className="px-2">
                        <p className="text-[22px] font-semibold mt-4">Discussion Event</p>
                            <p className="text-[#727272] font-medium Raleway_Thin text-[18px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab
                        </p>
                        <button className="mt-6 bg-[#FF6612] text-white px-5 py-2 rounded-full Raleway_Bold">
                        Register Now
                        </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Events;
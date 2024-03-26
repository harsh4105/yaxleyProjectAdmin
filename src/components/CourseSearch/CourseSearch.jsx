import React from "react";
import './CourseSearch.css';
const CourseSearch=()=>{
    return(
        <div className=" mt-24 ">
        <div className="bg-[url('/public/home/background/curedbd.png')] bg-center  bg-[length:1300px_510px] bg-no-repeat ">
        <div className="bg-[url('/public/home/background/Ellipse 15.png')] bg-center  bg-[length:600px_310px] bg-no-repeat">

        <div className="bg-[url('/public/home-building-bg.png')] bg-center  bg-[length:1300px_510px] bg-no-repeat px-20 py-44">
            <h3 className="text-center text-5xl font-semibold text-white Raleway_Bold">Course Search</h3>
            <p className="text-center text-white mt-4 mb-10">Unveil Your Prefect University and Dream <span className="gradient-text-gradient-three gradient-text gradient-text-gradient-three" >Course</span></p>
            <div className='course-search-bar'>
                <input
                    type="text"
                    placeholder="Search Course"
                    className="w-[100%]"
                />
                <button type="submit" className="-ml-4">Search Now</button>
            </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default CourseSearch;
import Slider from "react-slick";
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ComponentName = () => {  // Updated component name to start with an uppercase letter

  const NextArrow = ({ onClick }) => {
    return (
      <div className="FaArrowRight-arrow next -right-10 top-24 absolute bg-white-600 shadow-inner  drop-shadow-lg  text-red-600 p-2 rounded-full" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  }

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="FaArrowLeft-arrow prev -left-10 top-24 absolute bg-white-600 shadow-inner  drop-shadow-lg  text-red-600 p-2 rounded-full" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  }

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [imgIndex, setImgIndex] = useState(0);

  const images = ["/home/review card.png", "/home/review card.png", "/home/review card.png"]; // Replace with your image URLs

  return (
    <>
      <div className="mt-24 max-w-[70rem] m-auto">
      <h3 className="text-center text-5xl font-semibold text-[#353535] Raleway_Bold">Testimonials</h3>
      <p className="text-center w-[30%] m-auto text-[#727272] mt-2">Explore the heartwarming and inspiring experiences shared by our valued clients.</p>
        <Slider {...settings} className="mt-4">
          {images.map((img, idx) => (
            <div key={idx} className={idx === imgIndex ? "slide activeSlide" : "slide" + " "}>
              <img src={img} alt={idx} />
              {/* <p>{img}</p> */}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default ComponentName;  // Exporting the component with an uppercase name

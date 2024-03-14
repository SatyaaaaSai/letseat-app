
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../css/Slider.css";
function Slider({ img }) {
    const [currentindex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === img.length - 1 ? 0 : prevIndex + 1));
    };

    const previousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? img.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 2500);
        return () => clearInterval(intervalId);
    }, []);
    const SliderImg = {
        width:"100%",
        height: "100%",
        position: "realtive",
    };
    const SlideImg = {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${img[currentindex].url})`,
        transition: "1s",
    };
    const Rbtn = {
        width: "50px",
        height: "25px",
        color: "Black",
        fontSize:"14px",
    };
    const Lbtn = {
        width: "70px",
        height: "25px",
        color: "Black",
        fontSize:"14px",
    };
    const btns = {
        display: "flex",
        justifyContent: "space-between",
    };
    return (
        // SliderImg
    <div style={SliderImg}>
        {/* SlideImg */}
      <div className="Slider" style={SlideImg}></div>
      <div style={btns}>
      <button style={Lbtn} onClick={previousSlide}>
          Previous
        </button>
        <button style={Rbtn} onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
}
export default Slider;

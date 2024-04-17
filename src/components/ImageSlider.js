import React, { useState, useEffect } from "react";
import "../styles/ImageSlider.css"; // Create this file for custom styling
import image1 from "../images/model_design.png";
import image2 from "../images/develop_mould.png";
import image3 from "../images/test_pro.png";
import image4 from "../images/mass_prod.png";
// import BldcAnimation_2 from "./BldcAnimation_2";

const ImageGallery = () => {
  // Sample data for the image titles and images
  const imageTitles = [
    "01 Model Design",
    "02 Test Prototype",
    "03 Develop Mould",
    "04 Mass Production",
  ];
  const images = [image1, image2, image3, image4];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateNext, setAnimateNext] = useState(true);

  useEffect(() => {
    const changeImage = () => {
      setAnimateNext(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setAnimateNext(true);
      }, 10); // Adjust the duration of the transition effect (milliseconds)
    };

    const interval = setInterval(changeImage, 3700); // Adjust the interval between image changes (milliseconds)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-gallery-container grid md:grid-col-2 items-center">
      <div className="left-div">
        {imageTitles.map((title, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={` ${
              currentIndex === index ? "active" : ""
            } our-process-text progress font-normal md:text-[30px] md:leading-[50px] tracking-[.45px] text-[#A0A0A0] md:mb-[20px] md:w-[420px] `}
          >
            {title}
            <div className="progress">
              <div className="progress-bar"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="right-div overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={imageTitles[currentIndex]}
          className={`img-animate  ${
            animateNext ? `animate-next${currentIndex}` : ""
          }`}
        />
        {/* <BldcAnimation_2 /> */}
      </div>
    </div>
  );
};

export default ImageGallery;

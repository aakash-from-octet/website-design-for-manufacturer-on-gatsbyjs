import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import CheckIcon from "../images/check.svg";
const BldcAnimationFinal = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  // const sectionRef = useRef(null);

  // const handleIntersection = (entries) => {
  const handleIntersection = () => {
    // const [entry] = entries;
    // setShowOverlay(entry.isIntersecting);
    setShowOverlay(true);
  };

  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.5, // Adjust threshold as needed
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, options);

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  const handleImageClick = () => {
    setShowOverlay(true);
  };

  return (
    <>
      {/* <div ref={sectionRef}> */}
      <div>
        {showOverlay ? (
          <div class="main-container">
            <div className="image-container-bldc">
              <StaticImage
                src="../images/main-circle.png"
                alt="main circle"
                className="mainCircle"
                width={500}
              />
              <StaticImage
                src="../images/blue.png"
                alt="main circle"
                className="blue-circle"
                width={300}
              />
              <div className="circle delay1"></div>
              <div className="circle delay2"></div>
              <div className="circle delay3"></div>
              <div className="circle delay4"></div>
              <div className="circle delay5"></div>
              <div className="circle delay6"></div>
            </div>
            <div className="content-container">
              <h3 className="text-[30px] md:text-[50px] font-medium tracking-[0.75px]">
                BLDC Labs
              </h3>
              <ul className="my-9 md:my-14">
                <li className="text-sm md:text-xl tracking-[0.3px] my-4 md:my-6 flex">
                  <img src={CheckIcon} className="me-2" />
                  Wide Speed range
                </li>
                <li className="text-sm md:text-xl tracking-[0.3px] my-4 md:my-6 flex">
                  <img src={CheckIcon} className="me-2" />
                  Compact Design
                </li>
                <li className="text-sm md:text-xl tracking-[0.3px] my-4 md:my-6 flex">
                  <img src={CheckIcon} className="me-2" />
                  Longer lifespan for better reliability
                </li>
              </ul>
              <Link
                to="/bldc"
                className="border px-3 md:px-4 py-2 md:py-3 text-[15px] tracking-[0.45px] font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
        ) : (
          <div onClick={handleImageClick} style={{ cursor: "pointer" }}>
            <StaticImage src="../images/bldc-light.png" alt="Static Image" />
          </div>
        )}
      </div>
    </>
  );
};

export default BldcAnimationFinal;

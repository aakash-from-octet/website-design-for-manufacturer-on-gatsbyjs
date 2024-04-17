import React, { useRef, useEffect } from "react";
import "../styles/animation.css";
import lottie from "lottie-web";
import animationData from "../content/animation.json";

const LottieControl = () => {
  const lottieRef = useRef(null);
  useEffect(() => {
    var animDuration = 10000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData,
    });
    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;
      const frame = (maxFrames / 200) * (scrollPosition / (duration / 400));
      anim.goToAndStop(frame, true);
    }
    const onScroll = () => {
      animatebodymovin(animDuration);
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
  <>
  {/* <BldcAnimation_2/> */}
  <div style={{ position: "fixed" }} ref={lottieRef}></div>
  
  </>
  )
};
export default LottieControl;
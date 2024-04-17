import React, { useRef, useEffect } from "react";
import "../styles/animation.css";
import lottie from "lottie-web";
import animationData from "../content/ourProcess.json";



const BldcAnimation_2 = () => {
  const lottieRef = useRef(null);
  useEffect(() => {
    var animDuration = 10000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
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
    // document.addEventListener("scroll", onScroll);
    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
  return <div className="w-[100%]" ref={lottieRef}></div>;
};
export default BldcAnimation_2;
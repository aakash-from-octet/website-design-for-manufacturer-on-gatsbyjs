import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const SectionWithScrollEffect = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imagesRef.current.classList.add('move-left');
          textRef.current.classList.add('move-right');
        } else {
          imagesRef.current.classList.remove('move-left');
          textRef.current.classList.remove('move-right');
        }
      });
    }, options);

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);


  // Mobile responsive
  const sectionRespRef = useRef(null);
  const imagesRespRef = useRef(null);
  const textRespRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imagesRespRef.current.classList.add('not-needed');
          textRespRef.current.classList.add('visible-display');
        } else {
          imagesRespRef.current.classList.remove('not-needed');
          textRespRef.current.classList.remove('visible-display');
        }
      });
    }, options);

    observer.observe(sectionRespRef.current);

    return () => observer.disconnect();
  }, []);

  

  return (
    <div className=''>
      <div className='hidden md:block'>
        <section ref={sectionRef} className="relative flex  items-center justify-center">
          <div
            ref={imagesRef}
            className=" absolute flex justify-center items-center transition-transform  duration-[1500ms]"
          >
            <StaticImage
              src="../images/winding_f.png"
              alt=""
              width={487}
              height={487}
              className=""
            />
            <StaticImage
              src="../images/blue_light.png"
              alt=""
              width={300}
              height={300}
              className=" !absolute top-50"
            />

          </div>
          <div
            ref={textRef}
            className="relative ml-64 opacity-0 transition-transform-opacity duration-[1500ms]"
          >
            <p className="md:font-bold md:text-[50px] md:leading-[72px] md:tracking-[.75px] md:mb-[40px]" >BLDC Labs</p>
            <ul className="lab_animation flex flex-col md:gap-[20px]">
              <li><span className="md:mr-[10px] text-[15px]">&#10003;</span> Wide Speed Range</li>
              <li><span className="md:mr-[10px] text-[15px]">&#10003;</span> Compact Design</li>
              <li><span className="md:mr-[10px] text-[15px]">&#10003;</span>Longer Lifespan for Better Reliability</li>
            </ul>
            <Link
              to="/contactUs"
              className="inline-block cto-btn py-[10px] w-[107px] border border-1 border-[#DFDFDF] px-[15px] rounded-[2px] text-[#ffffff] bg-[#1C1C1C] hover:bg-[#404040]  text-[15px] font-medium mt-[40px] leading-[18px]"
            >
              Learn More
            </Link>
          </div>
        </section>
      </div>

      <div ref={sectionRespRef} className='md:hidden relative flex flex-col gap-[50px] py-[150px]'>
        <div className='transition-transform  duration-[1500ms]' ref={imagesRespRef}>
          <StaticImage
            src="../images/bldc_ani_resp.png"
            alt=""
            width={274}
            height={274}
            className="h-[100%] w-[100%]"
          />
        </div>
        <div className="opacity-0 transition-transform-opacity duration-[5000ms]"  ref={textRespRef}>
          <p className="font-bold text-[30px] leading-[24px] tracking-[.75px] mb-[26px]" >BLDC Labs</p>
          <ul className="lab_animation flex flex-col gap-[20px]">
            <li><span className="mr-[10px] text-[15px]">&#10003;</span> Wide Speed Range</li>
            <li><span className="mr-[10px] text-[15px]">&#10003;</span> Compact Design</li>
            <li><span className="mr-[10px] text-[15px]">&#10003;</span>Longer Lifespan for Better Reliability</li>
          </ul>
          <Link
            to="/contactUs"
            className="inline-block cto-btn py-[10px] w-[107px] border border-1 border-[#DFDFDF] px-[15px] rounded-[2px] text-[#ffffff] bg-[#1C1C1C] hover:bg-[#404040]  text-[15px] font-medium mt-[40px] leading-[18px]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>

  );
};

export default SectionWithScrollEffect;

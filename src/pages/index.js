import * as React from "react";
import swiperItems from "../content/swiper.json";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageGallery from "../components/ImageSlider";
import "../styles/ImageSlider.css";
import { Helmet } from "react-helmet";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/bundle";
import application from "../content/application.json";
import Marquee from "react-fast-marquee";
import video_1 from "../videos/video_1.mp4";
import video_2 from "../videos/video_2.mp4";
import video_3 from "../videos/video_3.mp4";
import { StaticImage } from "gatsby-plugin-image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BldcAnimationFinal from "../components/BldcAnimationFinal";


const IndexPage = () => {
  const pageTitle = "Innovative BLDC Motor Systems | Alto";

  const swiperImage = useStaticQuery(graphql`
    query {
      swiperItems: allFile(filter: { relativePath: { regex: "/^()/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  const swiperImagesByPath = {};
  swiperImage.swiperItems.edges.forEach(({ node }) => {
    const imagePath = node.relativePath;
    const swiperImage = getImage(node.childImageSharp);
    swiperImagesByPath[imagePath] = swiperImage;
  });

  return (
    <div className="">
      <div>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content="Leading the way in custom motor solutions. Elevate efficiency across sectors with our advanced BLDC technology." />
        </Helmet>
      </div>
      <div className="home-bg md:pt-8">
        <Navbar />
        <section id="bannerSection" className="w-[90%] md:w-[85%] mx-auto pt-[100px] pb-[80px] md:pb-[150px]">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {swiperItems.map((info, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center justify-between">
                    <div className="order-2 md:order-1">
                      <h1 className="font-normal text-[50px] md:text-[90px] leading-[55px] md:leading-[99px] text-[#333333] mb-[20px] md:mb-[35px]">
                        {info.title}
                      </h1>
                      <p className="font-normal text-[16px] md:text-[18px] leading-[19.2px] md:leading-[28px] tracking-[3%] text-[#5a5a5a] md:mb-[45px]">
                        {info.description}
                      </p>
                    </div>
                    <div className="order-1 md:order-2 md:flex md:justify-end">
                      <GatsbyImage
                        className="w-[250px] h-[200px] md:w-[540px] md:h-[400px]"
                        image={swiperImagesByPath[info.image]}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
      <section id="ourExperties" className="pb-[100px] md:pb-[0px]">
        <div className="w-[90%] md:w-[auto] mx-auto grid grid-col-1 md:grid-cols-2">
          <div className=" flex flex-col justify-center items-center md:px-[80px] py-[50px] md:py-[150px]">
            <h2 className="font-normal text-[30px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[1.5%] mb-[20px] md:mb-[50px] ">
              Revolutionising Power: The Advanced Technology of BLDC Motors
            </h2>
            <p className="mb-[16px] md:mb-[25px] text-[14px] md:text-[17px] leading-[23px] md:leading-[26px] tracking-[.51px] text-[#3e3e3e]">
              Unleashing a new era in motor engineering, Brushless Direct
              Current (BLDC) motors serve as the pinnacle of performance.
            </p>
            <p className="mb-[16px] md:mb-[25px] text-[14px] md:text-[17px] leading-[23px] md:leading-[26px] tracking-[.51px] text-[#3e3e3e]">
              Fuelled by the immense power density, these motors deliver
              unmatched torque and efficiency. Incorporated with precision Hall
              sensors, they ensure seamless performance by offering real-time
              feedback for optimal control.
            </p>
            <p className="mb-[16px] md:mb-[25px] text-[14px] md:text-[17px] leading-[23px] md:leading-[26px] tracking-[.51px] text-[#3e3e3e]">
              With BLDC motors, we're not just shaping the future of motors,
              we're advancing the frontier of technology!
            </p>
          </div>
          <div className="bg-[#fafafa]">
            {/* <div className="w-[335px] h-[335px] md:w-[686px] md:h-[768px] mix-blend-darken">
              <ReactPlayer playing={true} loop={true} url={video_1} width={'686px'} height={'768px'}/>
            </div> */}

            <video
              autoPlay
              playsInline
              loop
              muted
              className="w-[335px] h-[335px] md:w-[686px] md:h-[768px] mix-blend-darken"
            >
              <source src={video_1} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="w-[90%] md:w-[auto] mx-auto grid grid-col-1 md:grid-cols-2">
          <div className="order-2 md:order-1 bg-[#fafafa]">
            <video
              autoPlay
              playsInline
              loop
              muted
              className="w-[100%] h-[100%]  md:h-[768px] mix-blend-darken"
            >
              <source src={video_2} type="video/mp4" />
            </video>
          </div>
          <div className="order-1 md:order-2 flex flex-col justify-center md:items-start md:px-[80px] py-[50px] md:py-[150px]">
            <h2 className="font-normal text-[30px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[1.5%] mb-[20px] md:mb-[50px]">
              Advanced Manufacturing for Quality Motors
            </h2>
            <p className="mb-[16px] md:mb-[25px] text-[14px] md:text-[17px] leading-[23px] md:leading-[26px] tracking-[.51px] text-[#3e3e3e]">
              We are paving the path in motor industry innovation with our
              superior manufacturing capabilities. Our production process,
              meticulously designed and impeccably executed, uses NdFeB magnets
              to create Brushless Direct Current (BLDC).
            </p>
            <p className="mb-[16px] md:mb-[25px] text-[14px] md:text-[17px] leading-[23px] md:leading-[26px] tracking-[.51px] text-[#3e3e3e]">
              Our manufacturing plant ensures precision assembly and accurate
              calibration across the production line, with a robust testing
              protocol in place to guarantee optimal performance.
            </p>
          </div>
        </div>

        <div className="w-[90%] md:w-[auto] mx-auto grid grid-col-1 md:grid-cols-2">
          <div className="flex flex-col justify-center items-start md:px-[80px] py-[50px] md:py-[150px]">
            <h2 className="font-normal text-[30px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[1.5%] mb-[20px] md:mb-[50px]">
              Rigorous Testing Ensures Motor Quality
            </h2>
            <p className="mb-[16px] md:mb-[25px] text-[14px] md:text-[17px] leading-[23px] md:leading-[26px] tracking-[.51px] text-[#3e3e3e]">
              We believe in leaving nothing to chance when it comes to the
              performance of our Brushless Direct Current (BLDC) motors.
            </p>
            <p className="mb-[16px] md:mb-[25px] text-[14px] md:text-[17px] leading-[23px] md:leading-[26px] tracking-[.51px] text-[#3e3e3e]">
              We prioritize comprehensive testing and meticulous inspection to
              ensure our motors meet the highest standards of quality,
              efficiency, and performance. With state-of-the-art equipment, we
              scrutinize every aspect of our BLDC motors for optimal power
              efficiency, torque generation, and overall performance.
            </p>
          </div>
          <div className="bg-[#fafafa]">
            <video
              autoPlay
              playsInline
              loop
              muted
              className="w-[100%] h-[100%] md:w-[686px] md:h-[768px] mix-blend-darken"
            >
              <source src={video_3} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section id="bldcLabSection" className="bg-[#111111] h-[700px] md:h-[900px] text-[#fff]">
        <div className="flex justify-center items-center h-[100%] w-[100%] overflow-hidden">

          <BldcAnimationFinal />
        </div>
      </section>


      <section id="ourProcessSection" className="mt-[60px] md:mt-[0px]">
        <div className="flex flex-col gap-[30px] w-[90%] md:w-[85%] mx-auto mb-[0px] md:py-[130px]">
          <div className="md:text-left md:mb-[30px]">
            <p className="font-normal text-[30px] leading-[36px] tracking-[1.5%] md:font-medium md:text-[40px] md:leading-[72px] md:tracking-[1.5%] mb-[20px] md:mb-[12px]">
              Our Process
            </p>
            <p className="text-[15px] leading-[18px] md:text-[20px] md:leading-[26px] md:tracking-[3%]">
              Exemplary manufacturing processes delivering exceptional quality
              and precision.
            </p>
          </div>
          <div className="hidden md:block">
            <ImageGallery />

          </div>
          <div className="md:hidden">
            <div className="mb-[30px]">
              <p>01 Model Design</p>
              <StaticImage
                src="../images/our_model_resp.png"
                alt="machine customization image"
                width={418}
                height={420}
                className="w-[100%] h-[100%]"
                placeholder="none"
              />
            </div>
            <div className="mb-[30px]">
              <p>02 Test Prototype</p>
              <StaticImage
                src="../images/test_proto_resp.png"
                alt="machine customization image"
                width={348}
                height={320}
                className="w-[100%] h-[100%]"
                placeholder="none"
              />
            </div>
            <div className="mb-[30px]">
              <p>03 Develop Mould</p>
              <StaticImage
                src="../images/develop_mould_resp.png"
                alt="machine customization image"
                width={337}
                height={258}
                className="w-[100%] h-[100%]"
                placeholder="none"
              />
            </div>
            <div className="mb-[30px]">
              <p>04 Mass production</p>
              <StaticImage
                src="../images/more_prod_resp.png"
                alt="machine customization image"
                width={375}
                height={293}
                className="w-[100%] h-[100%]"
                placeholder="none"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="whyAltoSection" className="w-[100%]  md:h-[790px]">
        <div className="why-alto  flex justify-start items-center">
          <div className="md:w-[590px] px-[20px] md:px-[0px] py-[130px] md:py-[0px]   md:ml-[100px]  text-[#ffffff]">
            <h2 className="font-normal  text-[30px] md:text-[40px] leading-[36px] md:leading-[72px] tracking-[1.5%] mb-[20px] md:mb-[30px]">
              Why Alto?
            </h2>
            <p className=" text-[14px] md:text-[20px] leading-[26px] md:leading-[26px] tracking-[3%] mb-[14px] md:mb-[20px]">
              <span className="text-[#D70000]">Alto</span> has been designing
              and producing motors for more than &nbsp;
              <span className="text-[#d70000]">
                <br /> 27+ years
              </span>
              , &nbsp; and we have established ourselves as the reliable and
              trustworthy supplier in our country.
            </p>
            <ul className="why-alto-text list-disc ml-[20px] md:ml-[36px]">
              <li className="font-normal text-[14px] leading-[28px] tracking-[2%] md:text-[18px] md:leading-[50px] md:tracking-[3%]">
                Superior performance with unmatched quality and reliability.
              </li>
              <li className="font-normal text-[14px] leading-[28px] tracking-[2%] md:text-[18px] md:leading-[50px] md:tracking-[3%]">
                Tailored solutions for your unique requirements and challenges.
              </li>
              <li className="font-normal text-[14px] leading-[28px] tracking-[2%] md:text-[18px] md:leading-[50px] md:tracking-[3%]">
                Industry-leading expertise for reliable and innovative
                solutions.{" "}
              </li>
              <li className="font-normal text-[14px] leading-[28px] tracking-[2%] md:text-[18px] md:leading-[50px] md:tracking-[3%]">
                On-time delivery to meet your project timelines.
              </li>
              <li className="font-normal text-[14px] leading-[28px] tracking-[2%] md:text-[18px] md:leading-[50px] md:tracking-[3%]">
                Dedicated support for a seamless customer experience.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="applicationSection" className="py-[90px] md:py-[130px]">
        <div className="md:text-center w-[90%] md:w-[85%] mx-auto">
          <p className="font-normal text-[30px] leading-[36px] tracking-[1.5%] md:font-medium md:text-[40px] md:leading-[72px] md:tracking-[1.5%] mb-[20px] md:mb-[12px]">
            Applications
          </p>
          <p className="text-[16px] leading-[26px] md:text-[20px] md:leading-[26px] md:tracking-[3%]">
            Discover Our Diverse Range of Applications for Our Reliable BLDC
            Motors
          </p>
        </div>
        <div className="mt-[40px] md:mt-[80px]">
          {application.map((info, index) => (
            <Marquee
              key={info.id}
              className=""
              direction={`${info.id % 2 === 0 ? "left" : "right"}`}
            >
              <ul
                className={`flex ${info.id % 2 === 0 ? "even" : "odd"} mb-[20px] md:mb-[30px] application-ul `}
              >
                {info.description.map((item, itemIndex) => (
                  <div className="flex items-center">
                    {itemIndex > 0 && (
                      <li className="text-[30px] leading-[36px] tracking-[1.5%] md:text-[50px] md:leading-[60px] md:tracking-[1.5%] font-extralight text-center text-[#6c6c6c]">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </li>
                    )}
                    <li
                      key={itemIndex}
                      className="text-[30px] leading-[36px] tracking-[1.5%] md:text-[50px] md:leading-[60px] md:tracking-[1.5%] font-extralight text-center text-[#6c6c6c]"
                    >
                      {`${item}`}
                    </li>
                    {itemIndex === info.description.length - 1 && index !== application.length - 1 && (
                      <li className="text-[30px] leading-[36px] tracking-[1.5%] md:text-[50px] md:leading-[60px] md:tracking-[1.5%] font-extralight text-center text-[#6c6c6c]">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </li>
                    )}
                  </div>
                ))}
              </ul>
            </Marquee>
          ))}
        </div>
      </section>

      <section className="py-[100px] md:py-[150px] bg-[#FAFAFA] enquire">
        <div className="grid grid-cols-1 md:grid-cols-2 md:justify-items-end md:gap-[100px] w-[90%] md:w-[85%] mx-auto">
          <div className=" pt-[40px]  md:py-[75px] order-2 md:order-1 ">
            <p className="text-[20px] leading-[36px] md:text-[30px] md:leading-[36px] text-[#1c1c1c]">
              Get in touch with us to experience the best in motor industry
              innovation and service.
            </p>
            <Link
              to="/contactUs"
              className="inline-block cto-btn py-[14px] px-[20px] rounded-[2px] text-[#ffffff] bg-[#1C1C1C] hover:bg-[#404040] transition ease-in-out duration-400 text-[16px] font-medium mt-[30px] leading-[19.2px]"
            >
              Enquire Now &nbsp; &rarr;
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <StaticImage
              src="../images/footer-new.png"
              alt="machine customization image"
              width={458}
              height={305}
              className=""
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndexPage;

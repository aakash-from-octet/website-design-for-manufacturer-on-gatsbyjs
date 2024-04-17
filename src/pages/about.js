import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

export default function About() {
  const pageTitle = "Driving Innovation with Innovative Motors | Alto";

  return (
    <Layout background="" color="#3E3E3E">
      <div>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content="Discover our mission to elevate industrial standards through optimized motor technologies. Committed to innovation, performance, and sustainability." />

        </Helmet>
      </div>
      <section className="relative mt-[90px] md:mt-[0px]">
        <div className="relative md:top-[250px] z-20">
          <div className="flex items-center justify-center gap-[24px]">
            <div className="h-[1px] w-[96px] md:w-[368px] bg-[#E3E3E3]"></div>
            <div className="md:mb-[50px]">
              <div className="hidden md:block">
                <StaticImage
                  src="../images/alto-large-icon.png"
                  alt="image of alto manufacturing plant"
                  width={150}
                  height={89}
                  className=""
                />
              </div>
              <div className="md:hidden">
                <StaticImage
                  src="../images/alto_large_Respons.png"
                  alt="image of alto manufacturing plant"
                  width={106}
                  height={65}
                />
              </div>
            </div>
            <div className="h-[1px] w-[96px] md:w-[368px] bg-[#E3E3E3]"></div>
          </div>
          <div className="md:w-[536px] mx-auto ">
            <p className="text-[20px] leading-[37px] text-center text-[#3E3E3E]">
              <span className="text-[#d70000]">27+</span> years of experience in
              designing and manufacturing high-quality motors.
            </p>
          </div>
        </div>
        <div className="mt-[200px]">
          <StaticImage
            src="../images/about-us-home.png"
            alt="image of alto manufacturing plant"

            className="z-10 w-[100%] h-[100%]"
          />
        </div>
      </section>
      <section id="aboutAltoSection" className="pt-[80px] md:py-[150px]">
        <div className="flex flex-col justify-center items-center w-[90%] md:w-[85%] mx-auto">
          <p className="mb-[40px] md:mb-[50px] font-medium text-[24px] md:text-[40px] leading-[29px] md:leading-[72px] text-[#111111] text-center">
            About <span className="text-[#d70000]">Alto</span>
          </p>
          <StaticImage
            src="../images/alto-a.png"
            alt="image of alto manufacturing plant"
            width={247}
            height={325}
            className="!hidden !md:block"
          />
          <StaticImage
            src="../images/alto_a_resp.png"
            alt="image of alto manufacturing plant"
            width={149}
            height={200}
            className="!md:hidden"
          />
          <p className="text-[#3E3E3E] text-[14px] leading-[24px] md:text-[18px] md:leading-[26px] text-center lg:w-[964px] mt-[33px]">
            <span className="text-[#d70000]">Alto</span> specialises in the
            production and customisation of Innovative Motor Systems. We're at
            the forefront of advancing Industrial Automation, Automotive, HVAC,
            Life Science, Textile Sectors and beyond. We're more than just a
            manufacturer; we're a partner dedicated to integrating
            state-of-the-art BLDC technology in various applications, maximising
            performance and value. Trust{" "}
            <span className="text-[#d70000]">Alto</span> to power your journey
            towards efficiency and sustainability.
          </p>
        </div>
      </section>

      <section id="missionStatementSection" className="pt-[150px] md:py-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[75px] md:w-[85%] md:mx-auto">
          <div className=" justify-self-start w-[90%] md:w-[auto] mx-auto">
            <p className="font-semibold text-[#e89999] text-[150px] leading-[0px] quote">
              "
            </p>
            <p className="font-normal text-[22px] leading-[32px] md:text-[30px] md:leading-[50px] tracking-[10%] italic hyphen mb-[20px]">
              At <span className="text-[#d70000]">Alto</span>, our mission is to
              elevate industrial standards by integrating and optimising
              innovative motor technologies.
            </p>
            <p className="font-light text-[14px] leading-[24px] md:text-[16px] md:leading-[30px] text-[#000000] tracking-[10%]">
              With our deep industry experience, we are committed to maximizing
              value and enhancing performance, thereby driving innovation for a
              sustainable and efficient future.
            </p>
          </div>
          <div className="justify-self-end hidden md:block">
            <StaticImage
              src="../images/at-alto.png"
              alt="image of spare parts"
              width={402}
              height={402}
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="md:hidden w-[100%]">
            <StaticImage
              src="../images/at-alto.png"
              alt="image of spare parts"
              width={374}
              height={375}
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
      </section>

      <section id="achievementSection" className="pt-[80px] md:py-[150px] w-[85%] mx-auto">
        <div className="gap-[60px] md:gap-[200px] achievements">
          <div className="md:w-[260px]">
            <h2 className="mb-[12px]">Achievements</h2>
            <p className="text-description leading-[26px]">
              20+ continuous years of continuous growth, highlighting our
              dedication to innovation and excellence in the motor industry.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[50px]">
            <div className="text-box">
              <h3 className="md:mb-[4px] text-[25px]  md:text-[40px]">94%</h3>
              <p className="text-description">On-Time Delivery Rate</p>
            </div>
            <div className="text-box">
              <h3 className="md:mb-[4px] text-[25px]  md:text-[40px]">
                500,00+
              </h3>
              <p className="text-description">Manufactured and Delivered</p>
            </div>
            <div className="text-box">
              <h3 className="md:mb-[4px] text-[25px]  md:text-[40px]">
                93.98%
              </h3>
              <p className="text-description">Customer Satisfaction rate</p>
            </div>
            <div className="text-box">
              <h3 className="md:mb-[4px] text-[25px]  md:text-[40px]">223+</h3>
              <p className="text-description">Designed and Developed </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[80px] md:py-[150px]">
        <div>
          <div className="text-center w-[90%] md:w-[818px] mx-auto items-center relativ pb-[80px]">
            <h2 className="mb-[10px]">Environment</h2>
            <p className="text-[14px] leading-[20px] md:text-xl ">
              As a responsible manufacturer, we uphold
              <span className="md:text-[22px] md:leading-[26px] tracking-[.42px] md:tracking-[3%] text-[#0aad3f]">
                &nbsp; environment &nbsp;
              </span>
              safety standards and promote sustainability through the
              installation of &nbsp;
              <span className="md:text-[22px] md:leading-[26px] md:tracking-[3%] text-[#0aad3f]">
                our rooftop solar panels.
              </span>
            </p>
          </div>
          <div className="hidden md:block">
            <StaticImage
              src="../images/solar-panal.png"
              alt="solar panal image"
              width={1366}
              height={437}
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="md:hidden">
            <StaticImage
              src="../images/environment_resp.png"
              alt="solar panal image"
              width={375}
              height={368}
              className=" w-[100%] h-[100%]"
            />
          </div>
        </div>
      </section>

      <section id="responsibilitySection" className="pt-[80px] md:py-[150px]">
        <div>
          <div className="text-center w-[90%] md:w-[818px] mx-auto items-center relativ pb-[120px] md:pb-[0]">
            <h2 className="mb-[10px]">Social Responsibility</h2>
            <p className="text-[14px] leading-[20px] md:text-xl ">
              We prioritize fair labour policies, promoting employee welfare and
              timely vendor payments to enhance productivity and ensure timely
              deliveries.
            </p>
          </div>

          <div className="hidden md:block">
            <StaticImage
              src="../images/workers.png"
              alt="image of workers climbing"
              width={1366}
              height={500}
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="md:hidden">
            <StaticImage
              src="../images/social_resp.png"
              alt="image of workers climbing"
              width={438}
              height={285}
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
      </section>

      <section className="mt-[100px] md:mt-[auto] py-[100px] md:py-[150px] bg-[#FAFAFA] enquire">
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
    </Layout>
  );
}

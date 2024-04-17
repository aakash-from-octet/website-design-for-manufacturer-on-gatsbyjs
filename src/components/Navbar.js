import React, { useState } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { StaticImage } from "gatsby-plugin-image";

export default function Navbar() {
  const location = useLocation();
  const isBldc = location.pathname === "/bldc/";
 

  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <div className="sticky md:top-[20px] z-[999999]">
      <div className="hidden md:block ">
        <nav
          className={`nav flex justify-between items-center mx-auto py-5 px-8 rounded-[10px] links 
                        ${isBldc ? "bg-[#262626]" : "bg-[#fff]"} 
                        ${isBldc ? "text-[#ffffff]" : "text-[#1c1c1c]"} 
                        ${isBldc
              ? "shadow-none"
              : "shadow-[0_0_10px_1px_#ECE3E3]"
            } `}
        >
          <div className="flex items-center gap-10">
            <Link to="/" activeClassName="active">
              {isBldc ? (
                <StaticImage
                  src="../images/altoLogoActive.png"
                  alt="alto logo"
                  width={60}
                  height={32}
                />
              ) : (
                <StaticImage
                  src="../images/alto-logo-align.png"
                  alt="alto logo"
                  width={60}
                  height={32}
                />
              )}
            </Link>
            <Link to="/bldc" activeClassName="active" className="hover:text-[#820808]">
              BLDC Labs
            </Link>
            <Link to="/manufacturing" activeClassName="active" className="hover:text-[#820808]">
              Manufacturing
            </Link>
            <Link to="/product" activeClassName="active" className="hover:text-[#820808]">
              Products
            </Link>
            <Link to="/blogs" activeClassName="active" className="hover:text-[#820808]">
              Blogs
            </Link>
            <Link to="/about" activeClassName="active" className="hover:text-[#820808]">
              About
            </Link>
          </div>
          {isBldc ? (
            <Link
              to="/contactUs"
              activeClassName="active"
              className="contact-bldc relative "
            >
              Contact Us
              <StaticImage
                src="../images/red-dot.png"
                alt="alto logo"
                width={6}
                height={6}
                className="absolute top-[-3px] right-[-11px]"
              />
            </Link>
          ) : (
            <Link to="/contactUs" activeClassName="active" className="relative hover:text-[#820808]">
              Contact Us
              <StaticImage
                src="../images/red-dot.png"
                alt="alto logo"
                width={6}
                height={6}
                className="absolute top-[-3px] right-[-11px]"
              />
            </Link>
          )}
        </nav>
      </div>

      <div className="md:hidden ">
        <div className={`px-[20px] flex justify-between items-center bg-[#262626] } 
                        ${isBldc ? "text-[#ffffff] bg-[#262626]" : "text-[#1c1c1c] bg-[#fff]"} w-[100%] h-[100px]`}>
          <div className="">
            <Link to="/">
              {isBldc ? (
                <StaticImage
                  src="../images/altoLogoActive.png"
                  alt="alto logo"
                  width={60}
                  height={33}
                />
              ) : (
                <StaticImage
                  src="../images/alto-logo-red.png"
                  alt="alto logo"
                  width={60}
                  height={33}
                />
              )}
            </Link>
          </div>
          <div className="" onClick={() => {
            setMenuOpen(!menuOpen);
          }}>

            {isBldc ? (
              <StaticImage
                src={"../images/white_ham.png"}
                alt="alto logo"
                width={40}
                height={40}
              />
            ) : (
              <StaticImage
                src="../images/dark_ham.png"
                alt="alto logo"
                width={40}
                height={40}
              />
            )}
          </div>


        </div>
        <div className={`relative mobile-nav-bg text-[white] pb-[100px] ${menuOpen ? 'open' : "close"}`}>
          <div onClick={() => {
            setMenuOpen(!menuOpen);
          }}>
            <StaticImage
              src="../images/cross_resp.png"
              alt="alto logo"
              width={40}
              height={40}
              class="!absolute top-[40px] right-[18px] cursor-pointer"

            />
          </div>
          <nav
            className={`nav flex md:justify-between gap-[25px] md:gap-[10px] md:items-center mx-auto py-5 px-8  links `}
          >

            <Link className="hidden md:block" to="/" activeClassName="active">
              {isBldc ? (
                <StaticImage
                  src="../images/altoLogoActive.png"
                  alt="alto logo"
                  width={57}
                  height={32}
                />
              ) : (
                <StaticImage
                  src="../images/alto-logo-red.png"
                  alt="alto logo"
                  width={57}
                  height={32}
                />
              )}
            </Link>
            <Link className="md:hidden" to="/" activeClassName="active">
              Home
            </Link>

            <Link to="/bldc" activeClassName="active">
              BLDC Labs
            </Link>
            <Link to="/manufacturing" activeClassName="active">
              Manufacturing
            </Link>
            <Link to="/product" activeClassName="active">
              Products
            </Link>
            <Link to="/blogs" activeClassName="active">
              Blogs
            </Link>
            <Link to="/about" activeClassName="active">
              About Us
            </Link>
            {isBldc ? (
              <Link
                to="/contactUs"
                activeClassName="active"
                className="md:contact-bldc relative"
              >
                Contact Us
                <StaticImage
                  src="../images/red-dot.png"
                  alt="alto logo"
                  width={6}
                  height={6}
                  className="absolute top-[-3px] right-[-11px] hidden md:block"
                />
              </Link>
            ) : (
              <Link to="/contactUs" activeClassName="active" className="relative">
                Contact Us
                <StaticImage
                  src="../images/red-dot.png"
                  alt="alto logo"
                  width={6}
                  height={6}
                  className="absolute top-[-3px] right-[-11px] hidden md:block"
                />
              </Link>
            )}

          </nav>
          <div className="w-[90%] mx-auto mt-[50px] p-[25px] bg-[#262626]">
            <p className="mb-[20px]">For Enquiries</p>
            <p className="mb-[30px]">Get in touch with us to experience the best in motor industry innovation and service.</p>
            <Link
              to="/contactUs"
              className="inline-block cto-btn py-[14px] px-[20px] rounded-[2px] text-[#ffffff] bg-[#1C1C1C] hover:bg-[#404040] transition ease-in-out duration-400 text-[16px] font-medium md:mt-[30px] leading-[19.2px]"
            >
              Enquiry Now &nbsp; &rarr;
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

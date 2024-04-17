import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (

        <div>

            <footer className="bg-[#1c1c1c] hidden md:block">
                <div className="flex justify-between  py-[70px] w-[85%] mx-auto ">
                    <div className="flex flex-col">

                        <ul>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a href="/#bannerSection">
                                    Banner
                                </a>
                            </li>
                            <li>
                                <a href="/#ourExperties">
                                    Our Expertise
                                </a>
                            </li>
                            <li>
                                <a href="/#bldcLabSection">
                                    BLDC Labs
                                </a>
                            </li>
                            <li>
                                <a href="/#ourProcessSection">
                                    Our Process
                                </a>
                            </li>
                            <li>
                                <a href="/#whyAltoSection">
                                    Why Alto?
                                </a>
                            </li>
                            <li>
                                <a href="/#applicationSection">
                                    Applications
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <ul>
                            <li>
                                <Link to="/bldc">
                                    BLDC Labs
                                </Link>
                            </li>
                            <li>
                                <a href="/bldc#whyBldcSection">
                                    Why BLDC?
                                </a>
                            </li>
                            <li>
                                <a href="/bldc#altoForBldcSection">
                                    Alto for BLDC
                                </a>
                            </li>
                            <li>
                                <a href="/bldc#ourControllerLabsSection">
                                    Our Controller Labs
                                </a>
                            </li>
                            <li>
                                <a href="/bldc#researchSection">
                                    Our Research
                                </a>
                            </li>
                           

                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <ul>
                            <li>
                                <Link to="/manufacturing">
                                    Manufacturing
                                </Link>
                            </li>
                            <li>
                                <a href="/manufacturing#howWeHelpSection">
                                    How We Help
                                </a>
                            </li>
                            <li>
                                <a href="/manufacturing#supportAllScaleSection">
                                    Support
                                </a>
                            </li>
                            <li>
                                <a href="/manufacturing#capabilitiesSection">
                                    Capabilities
                                </a>
                            </li>
                            <li>
                                <a href="/manufacturing#customizationSection">
                                    Customizations
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <ul>
                            <li>
                                <Link to="/product">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <a href="/product#allProductSection">
                                    All Products
                                </a>
                            </li>
                            <li>
                                <a href="/product/?category=BLDC+Motors">
                                    BLDC Motors
                                </a>
                            </li>
                            <li>
                                <a href="/product/?category=Induction+Motors">
                                    Induction Motors
                                </a>
                            </li>
                            <li>
                                <a href="/product/?category=BLDC+Driver">
                                    Drivers
                                </a>
                            </li>
                            <li>
                                <a href="/product/?category=Accessories">
                                    Accessories
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <ul>
                            <li>
                                <Link to="/about">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <a href="/about#aboutAltoSection">
                                    About Alto
                                </a>
                            </li>
                            <li>
                                <a href="/about#missionStatementSection">
                                    Mission Statement
                                </a>
                            </li>
                            <li>
                                <a href="/about#achievementSection">
                                    Achievements
                                </a>
                            </li>
                            <li>
                                <a href="/about#responsibilitySection">
                                    Responsibilities
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center">
                        <ul>
                            <li>
                                <Link to="/contactUs">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="flex gap-5 ml-[10px]">
                                <div>
                                    <a href="mailto:sales@altomotors.in">
                                        <StaticImage
                                            src="../images/ic_sharp-email.png"
                                            alt="mail-icon"
                                            width={24}
                                            height={24}
                                        />
                                    </a>


                                </div>
                                <div>
                                    <a href="https://in.linkedin.com/company/mototechnika"  target="_blank" >
                                        <StaticImage
                                            src="../images/mdi_linkedin.png"
                                            alt="linkedin-icon"
                                            width={24}
                                            height={24}
                                        />
                                    </a>

                                </div>

                            </li>

                        </ul>
                    </div>
                </div>
                <div className="  bg-[#171717] py-2.5">
                    <div className="flex justify-between items-center w-[85%] mx-auto ">
                        <p className="text-xs text-[#929292] ">{`${currentYear} Alto. All Rights Reserved`}</p>
                        <div className="invisible text-xs text-[#ffffff] flex gap-5">
                            <span>
                                <a href="#" className="footer-link">Terms of Service</a>
                            </span>
                            <span>
                                |
                            </span>
                            <span>
                                <a href="#" className="footer-link">Privacy Policy</a>
                            </span>
                        </div>
                    </div>
                </div>



            </footer>

            <footer className="bg-[#1c1c1c] md:hidden">
                <div className="flex justify-between py-[50px] w-[90%] md:w-[85%] mx-auto">
                    <div className="flex flex-col">
                        <ul>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/bldc">
                                    Intelligence Labs
                                </Link>
                            </li>
                            <li>
                                <Link to="/product">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/manufacturing">
                                    Manufacturing
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contactUs">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <ul className="text-right">
                            <li className="text-[#FFFFFF99] text-left mb-[10px]">
                                Connect With Us
                            </li>

                            <li>
                                <a href="mailto:sales@altomotors.in">Email</a>

                            </li>
                            <li>
                                <a href="https://in.linkedin.com/company/mototechnika"  target="_blank" >LinkedIn</a>

                            </li>


                        </ul>
                    </div>


                </div>
                <div className="  bg-[#171717] py-[20px]">
                    <div className=" flex justify-between items-center w-[90%] md:w-[85%] mx-auto ">
                        <div className=" text-xs text-[#929292] flex flex-col gap-[3px]">
                            <p className="">{`${currentYear} Alto.`}</p>
                            <p className="">All Rights Reserved</p>
                        </div>

                        <div className="invisible text-xs text-[#ffffff] flex flex-col gap-[3px] ">
                            <span>
                                <a href="#" className="footer-link">Terms of Service</a>
                            </span>
                            <span>
                                <a href="#" className="footer-link">Privacy Policy</a>
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
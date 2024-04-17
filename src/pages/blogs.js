import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import {navigate, Link} from "gatsby";
import { Helmet } from "react-helmet";
 

export default function Blogs() {
    const pageTitle = "Advancing BLDC Tech Across Industries | Alto";
    
    const navigateTo = (path) => {
      navigate(path);
    };

    return (
        <Layout background="#F5F5F5" color="#3E3E3E">
            <div>
                <Helmet>
                    <title>{pageTitle}</title>
                    <meta name="description" content="Explore insightful articles on BLDC technology in Industrial Automation, Automotive, HVAC, and more. Stay informed with Alto." />
                </Helmet>
            </div>

            <section>
                <div className="text-center w-[85%] mx-auto my-[80px] md:mt-[140px] md:mb-[60px]">
                    <h2 className="mb-[20px] md:mb-[10px] ">Blogs</h2>
                    <p className="text-[15px] leading-[20px] tracking-[3%] md:text-xl ">
                        Read about the latest industry developments from our R&D team.
                    </p>

                </div>   
                <Link to="/bldcMadeSimple" className="w-[85%] mb-[40px] mx-auto hidden md:block relative overflow-hidden cursor-pointer">
                    <StaticImage
                        src="../images/blog-hero.png"
                        alt="image of bldc motor"
                        width={1200}
                        height={598}
                        className="w-[100%] h-[100%] hover:scale-105 duration-500"
                    />
                    <div className="absolute bottom-[30px] left-[40px]">
                        <div className="flex  gap-[8px] mb-[10px]">
                            <p className="  font-medium text-[14px] leading-[36px] text-white">May 3, 23</p>
                            <span className="text-[20px] text-white mt-[2px]">&#8226;</span>
                            <p className="   font-medium text-[14px] leading-[36px] text-white">Keshank Parmar</p>
                        </div>
                        <p className="mb-[4px] font-medium text-[28px] text-white leading-[30.8px]">BLDC Motors Made Simple.</p>
                        <p className="font-normal text-[17px] leading-[36px] text-white">The Easy Guide to Understanding Them.</p>
                    </div>

                </Link>

            </section>
            <section>
                <div className="blog-items-container grid grid-cols-1 md:grid-cols-3 gap-y-[20px] md:gap-[40px] w-[90%] md:w-[85%] mx-auto mb-[150px]">
                <Link to="/bldcMadeSimple" className="cursor-pointer blog-item group md:hidden">
                        <div className="blog-item-img overflow-hidden mb-[40px]">
                            <StaticImage
                                src="../images/bldcMadeSimple.png"
                                alt="image of bldc motor"
                                width={332}
                                height={267}
                                className="w-[100%] h-[100%] group-hover:scale-105 duration-500"
                            />
                        </div>
                        <div className="blog-item-info max-w-[266px]">
                            <div className="flex gap-[8px] mb-[10px]">
                                <p className="flex items-center font-medium text-[14px] leading-[14px] text-[#1C1C1C]">May 3, 23</p>
                                <span className="text-[20px] text-[#1C1C1C] mt-[2px]">&#8226;</span>
                                <p className="flex items-center  font-medium text-[14px] leading-[26px] text-[#1C1C1C]">Keshank Parmar</p>
                            </div>
                            <p className="mb-[10px] font-medium text-[22px] leading-[24.2px] text-[#1C1C1C]">
                            BLDC Motors Made Simple.
                            </p>
                            <p className="mb-[10px] font-normal text-[14px] leading-[17px]  text-[#1c1c1c]">
                            The Easy Guide to Understanding Them.
                            </p>
                        </div>

                    </Link>
                    <Link to="/beyondTraditional" className="cursor-pointer blog-item group">
                        <div className="blog-item-img overflow-hidden mb-[40px]">
                            <StaticImage
                                src="../images/induction-servo.png"
                                alt="image of bldc motor"
                                width={332}
                                height={267}
                                className="w-[100%] h-[100%] group-hover:scale-105 duration-500"
                            />
                        </div>
                        <div className="blog-item-info max-w-[266px]">
                            <div className="flex gap-[8px] mb-[10px]">
                                <p className="flex items-center font-medium text-[14px] leading-[14px] text-[#1C1C1C]">May 16, 23</p>
                                <span className="text-[20px] text-[#1C1C1C] mt-[2px]">&#8226;</span>
                                <p className="flex items-center  font-medium text-[14px] leading-[26px] text-[#1C1C1C]">Keshank Parmar</p>
                            </div>
                            <p className="mb-[10px] font-medium text-[22px] leading-[24.2px] text-[#1C1C1C]">
                                Beyond Traditional Induction & Servo
                            </p>
                            <p className="mb-[10px] font-normal text-[14px] leading-[17px]  text-[#1c1c1c]">
                                The Unbeatable Advantages of BLDC Motors.
                            </p>
                        </div>

                    </Link>
                    <Link to="/brushedMotors" className="cursor-pointer blog-item group">
                        <div className="blog-item-img overflow-hidden mb-[40px]">
                            <StaticImage
                                src="../images/brush-dc.png"
                                alt="image of brushed and brushless motor"
                                width={332}
                                height={267}
                                className="w-[100%] h-[100%] group-hover:scale-105 duration-500"
                            />
                        </div>
                        <div className="blog-item-info max-w-[266px]">
                            <div className="flex  gap-[8px] mb-[10px]">
                                <p className="flex items-center font-medium text-[14px] leading-[14px] text-[#1C1C1C]">Sept 19, 23</p>
                                <span className="text-[20px] text-[#1C1C1C] mt-[2px]">&#8226;</span>
                                <p className="flex items-center  font-medium text-[14px] leading-[26px] text-[#1C1C1C]">Keshank Parmar</p>
                            </div>
                            <p className="mb-[10px] font-medium text-[22px] leading-[24.2px] text-[#1C1C1C]">
                                Brushed vs. Brushless DC Motors
                            </p>
                            <p className="mb-[10px] font-normal text-[14px] leading-[17px]  text-[#1c1c1c]">
                                An Overview.
                            </p>
                        </div>

                    </Link>
                    <Link to="/sensorBldc" className="blog-item cursor-pointer group">
                        <div className="blog-item-img overflow-hidden mb-[40px]">
                            <StaticImage
                                src="../images/sensor-motor.png"
                                alt="image of brushed and brushless motor"
                                width={332}
                                height={267}
                                className="w-[100%] h-[100%] group-hover:scale-105 duration-500"
                            />
                        </div>
                        <div className="blog-item-info max-w-[266px]">
                            <div className="flex  gap-[8px] mb-[10px]">
                                <p className="flex items-center font-medium text-[14px] leading-[14px] text-[#1C1C1C]">Sept 19, 23</p>
                                <span className="text-[20px] text-[#1C1C1C] mt-[2px]">&#8226;</span>
                                <p className="flex items-center  font-medium text-[14px] leading-[26px] text-[#1C1C1C]">Keshank Parmar</p>
                            </div>
                            <p className="mb-[10px] font-medium text-[22px] leading-[24.2px] text-[#1C1C1C]">
                                Sensored vs. Sensorless BLDC Motors
                            </p>
                            <p className="mb-[10px] font-normal text-[14px] leading-[17px]  text-[#1c1c1c]">
                                A Comparative Analysis.
                            </p>
                        </div>

                    </Link>
                    <Link to="/preciseSynch" className="blog-item cursor-pointer group">
                        <div className="blog-item-img overflow-hidden mb-[40px]">
                            <StaticImage
                                src="../images/precise-synch.png"
                                alt="image of brushed and brushless motor"
                                width={332}
                                height={267}
                                className="w-[100%] h-[100%] group-hover:scale-105 duration-500"
                            />
                        </div>
                        <div className="blog-item-info max-w-[266px]">
                            <div className="flex  gap-[8px] mb-[10px]">
                                <p className="flex items-center font-medium text-[14px] leading-[14px] text-[#1C1C1C]">Sept 19, 23</p>
                                <span className="text-[20px] text-[#1C1C1C] mt-[2px]">&#8226;</span>
                                <p className="flex items-center  font-medium text-[14px] leading-[26px] text-[#1C1C1C]">Keshank Parmar</p>
                            </div>
                            <p className="mb-[10px] font-medium text-[22px] leading-[24.2px] text-[#1C1C1C]">
                            Achieving Precise Synchronization
                            </p>
                            <p className="mb-[10px] font-normal text-[14px] leading-[17px]  text-[#1c1c1c]">
                            In Multiple Motor Systems.
                            </p>
                        </div>

                    </Link>
                    <Link to="/superiorityBldc" className="blog-item cursor-pointer group">
                        <div className="blog-item-img overflow-hidden mb-[40px]">
                            <StaticImage
                                src="../images/superior-motor.png"
                                alt="image of brushed and brushless motor"
                                width={332}
                                height={267}
                                className="w-[100%] h-[100%] group-hover:scale-105 duration-500"
                            />
                        </div>
                        <div className="blog-item-info max-w-[266px]">
                            <div className="flex  gap-[8px] mb-[10px]">
                                <p className="flex items-center font-medium text-[14px] leading-[14px] text-[#1C1C1C]">Sept 19, 23</p>
                                <span className="text-[20px] text-[#1C1C1C] mt-[2px]">&#8226;</span>
                                <p className="flex items-center  font-medium text-[14px] leading-[26px] text-[#1C1C1C]">Keshank Parmar</p>
                            </div>
                            <p className="mb-[10px] font-medium text-[22px] leading-[24.2px] text-[#1C1C1C]">
                            The Superiority of BLDC Motors For Variable Speed Pumps.
                            </p>
                            <p className="mb-[10px] font-normal text-[14px] leading-[17px]  text-[#1c1c1c]">
                          
                            </p>
                        </div>

                    </Link>

                </div>
            </section>
            




        </Layout>
    )
}
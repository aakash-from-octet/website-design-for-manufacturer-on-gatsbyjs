import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

export default function BldcMadeSimple() {
    const pageTitle = "Understand BLDC Motors Easily with Our Comprehensive Guide";
    return (
        <Layout background="#ffffff" color="#3E3E3E">
            <div>
                <Helmet>
                    <title>{pageTitle}</title>
                    <meta name="description" content="Discover the basics of BLDC motors in our easy-to-follow guide. Learn how they work and their applications." />
                </Helmet>
            </div>
            <section>
                <div className="blog-content-container w-[100%] md:w-[85%] mx-auto">
                    <div className="blog-info">
                        <h1 className="mb-[10px] font-medium text-[28px] leading-[33.6px] tracking-[.42px] md:text-[32px] md:leading-[35px] text-[#222222]">BLDC Motors Made Simple</h1>
                        <p className="mb-[9px] font-normal text-[14px] leading-[23px] tracking-[.42px] md:text-[17px] md:leading-[36px] text-[#3e3e3e]">The Easy Guide to Understanding Them</p>
                        <div className="flex items-center gap-[10px]">
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:font-medium md:leading-[36px] md:text-[#222222]">May 3, 23</p>
                            <span className="divider"></span>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:font-medium md:leading-[36px] md:text-[#222222]">Keshank Parmar</p>
                            <span className="divider"></span>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:font-medium md:leading-[36px] md:text-[#222222]">12 Minutes Read</p>
                        </div>
                    </div>
                    <div className="mt-[40px] md:mt-[50px]">
                        <StaticImage
                            src="../images/blog-hero.png"
                            alt="image of bldc motor"
                            width={940}
                            height={466}
                            className="w-[100%] h-[100%]"
                        />
                    </div>
                    <div className="mt-[40px] md:mt-[50px]">
                        <div className="content-box mb-[40px] md:mb-[50px]">
                            <p className="mb-[14px] md:mb[10px] font-medium text-[18px] leading-[21.6px] tracking-[.27px] text-[#111111] md:text-[20px] md:leading-[36px] md:text-[#3e3e3e]">Introduction</p>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">A lot of times we get overwhelmed to understand the concepts of BLDC motor, terms such as in runner, outer runner, mid type, hub type, sensored, sensor less often confuse us, we will look in to all these and help you get a better understanding of BLDC motor weather you are a student, business manager or technical professional. This guide will help you get better understanding of BLDC motor if you want to use BLDC motor to upgrade your application or are even currently using BLDC motor but needs more clarity. </p>
                        </div>
                        <div className="content-box mb-[40px] md:mb-[50px]">
                            <p className="mb-[14px] md:mb[10px] font-medium text-[18px] leading-[21.6px] tracking-[.27px] text-[#111111] md:text-[20px] md:leading-[36px] md:text-[#3e3e3e]">What is BLDC Motor?</p>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">BLDC motor stands for Brushless DC motor, it is a type of Synchronous motor which operates on DC Power and do not require Carbon brushes for commutation unlike conventional DC motors, the commutation is done with help of an electronic driver. </p>
                        </div>
                        <div className="content-box mb-[40px] md:mb-[50px]">
                            <p className="mb-[14px] md:mb[10px] font-medium text-[18px] leading-[21.6px] tracking-[.27px] text-[#111111] md:text-[20px] md:leading-[36px] md:text-[#3e3e3e]">Types of BLDC Motor</p>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">There are various type of BLDC motor which is categorised as per its different configuration such as :</p>
                            <div className="table-container overflow-scroll md:overflow-visible  mt-[14px] md:mt-[20px]">
                                <div className="type-of-bldc-table">
                                    <div className="table-row-custom">
                                        <div className="table-td-custom head">Phase</div>
                                        <div className="table-td-custom head">Position Of Magnet</div>
                                        <div className="table-td-custom head">Rotor Feedback</div>
                                    </div>
                                    <div className="table-row-custom">
                                        <div className="table-td-custom">Single Phase</div>
                                        <div className="table-td-custom">In- Runner</div>
                                        <div className="table-td-custom">Sensored</div>
                                    </div>
                                    <div className="table-row-custom">
                                        <div className="table-td-custom">Three Phase</div>
                                        <div className="table-td-custom">Out Runner</div>
                                        <div className="table-td-custom">Sensorless</div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-pointers mt-[14px] md:mt-[20px]">
                                <div className="mb-[14px] md:mb-[20px]">
                                    <div className="flex items-center gap-[6px] mb-[12px] md:mb-[10px]">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#3e3e3e]"></div>
                                        <p className=" font-normal text-[16px] leading-[36px] text-[#3e3e3e] md:text-[18px] md:leading-[36px]">Phase</p>
                                    </div>
                                    <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">BLDC motor are categorised as either single phase or three phase, these depends on the type of power that you can input to the motor. It is determined by the manufacturer and cannot be altered once manufactured. the choice between the two depends upon the application and the use case of the motor.</p>
                                </div>
                                <div className="mb-[14px] md:mb-[20px]">
                                    <div className="flex items-center gap-[6px] mb-[12px] md:mb-[10px]">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#3e3e3e]"></div>
                                        <p className=" font-normal text-[16px] leading-[36px] text-[#3e3e3e] md:text-[18px] md:leading-[36px]">Position of Magnet</p>
                                    </div>
                                    <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">For in runner type the stator and winding are on the outside of the motor while the rotor is in the inside of the motor so the outer body in these motor is stationary and the inner rotor is rotating, while as inrunner the stator and windings are on the inside or the motor and the rotor is on the outside of the motor in this case the outer body rotates while the inner components are steady.</p>
                                    <p className="mt-[12px] md:mt[10px] font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">The selection between the motor needs to consider few factor, the outer rotor type has high power density ( high torque compared to the volume ) but the in runner type offer better mechanical stability, better heat transfer, easily adaptable to wide variety of application.</p>
                                    <p className="mt-[12px] md:mt[10px] font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">For the most part one should consider an in-runner BLDC motor as default, while in case where the the weight or volume of the motor is very important ( such as Drones and Electrical Two wheeler ) you should consider out runner type.</p>
                                </div>
                                <div className="mb-[14px] md:mb-[20px]">
                                    <div className="flex items-center gap-[6px] mb-[12px] md:mb-[10px]">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#3e3e3e]"></div>
                                        <p className=" font-normal text-[16px] leading-[36px] text-[#3e3e3e] md:text-[18px] md:leading-[36px]">Rotor Feedback</p>
                                    </div>
                                    <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">In order to run BLDC motor efficiently the motor driver need to know the rotor position to start electronic commutation, these can be done in one of two ways which is sensored or sensor less. In case of sensored the position of the rotor is sensed with help of Hall sensor and an accurate position feedback is send to the driver. In case of sensor less a phenomena that occurs in BLDC motor which is Back-EMF, this is used to determine the position of the rotor.</p>
                                    <p className="mt-[12px] md:mt[10px] font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">The choice between the two depends depends on various factor, such as sensored motor are costly than sensorless but the advantage is that sensored motor can be used efficiently in lower RPM as well as higher RPM but in case of Sensor less these motor cannot operate under certain speed. Also for using sensorless motor the driver needs to be tuned according to the motor, while in case of sensored any compatible driver that supports sensored operation can be used without requirement of tuning.</p>

                                </div>

                            </div>

                        </div>
                        <div className="content-box mb-[40px] md:mb-[50px]">
                            <p className="mb-[14px] md:mb[10px] font-medium text-[18px] leading-[21.6px] tracking-[.27px] text-[#111111]  md:text-[20px] md:leading-[36px] md:text-[#3e3e3e]">Construction</p>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">Most kind of BLDC motor is constructed using these basic components, Stator, Windings, Permanent magnet rotor, Shaft , Bearing, Hall sensor and motor housing, there are few type of BLDC motor where there is slightly different components but we will not look into it for the sake of simplicity. </p>
                        </div>
                        <div className="content-box mb-[40px] md:mb-[50px]">
                            <p className="mb-[14px] md:mb[10px] font-medium text-[18px] leading-[21.6px] tracking-[.27px] text-[#111111]  md:text-[20px] md:leading-[36px] md:text-[#3e3e3e]">Working</p>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">We will try and understand working of sensored type BLDC motor. These motors are connected to a driver and the driver is supplied a DC voltage as per rated on motor, the driver will sense the position of the magnet in the motor using hall sensor, and it will look up the commutation table, the commutation table which is inbuilt in the driver provides the information on which coils of the motor to excite depending on the rotor position, the driver then excited a particular set of coil which will turn to rotor to the next slot position where this cycle repeats and the motor will start rotating.</p>
                        </div>

                        <div className="content-box mb-[40px] md:mb-[50px]">
                            <p className="mb-[14px] md:mb[10px] font-medium text-[18px] leading-[21.6px] tracking-[.27px] text-[#111111]  md:text-[20px] md:leading-[36px] md:text-[#3e3e3e]">Why Should you use BLDC motor?</p>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">If you are developing a new application or are currently using Induction motor or Brushed DC motor for your application below table will help you compare all the motors and state the advantage of BLDC motor.</p>
                            <div className="table-container overflow-scroll md:overflow-visible  mt-[14px] md:mt-[20px]">
                                <table className="table">
                                    <tr>
                                        <th className="w-170 text-[12px] font-normal leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px] ">Feature</th>
                                        <th className="w-120  text-[12px] font-normal leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px] ">BLDC</th>
                                        <th className="w-170  text-[12px] font-normal leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px] ">AC Induction Motor</th>
                                        <th className="w-170  text-[12px] font-normal leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px] ">Brushed DC</th>
                                        <th className="w-310  text-[12px] font-normal leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px] ">Advantage</th>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Commutation</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Electronic</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Not Required</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Carbon Brushes</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">In case of BLDC and IM no requirement mechanical commutation is required</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Efficiency</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">High</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Poor</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Moderate</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Higher efficiency results in better power saving and faster ROI</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Operating Speed Range</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Wide</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Narrow</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Moderate</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Wider operating speed is advantageous as the operatable speed of the motor becomes very wide</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Speed Torque Curve</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Flat</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Non-linear</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Moderately Flat</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Flat speed torque curve give you the same torque across the entire operating speed range so that your application can run smoothly across all speed</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Electrical Noise</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Low</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Moderate</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">High</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Lower electrical noise is better since is gives a quitter operation and less noise pollution for your application</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Heating</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Low</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">High</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">High</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Lower Heating results in better performance and you can use it in application where heat generated is a concern</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Maintenance</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Almost none</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Little</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Periodic</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Lower maintenance translates to better ROI and lower downtime</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Dynamic Response</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Fast</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Slow</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Slow</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Dynamic response states that how fast can a motor react to demand of speed and torque of your application</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Power Density (Output Power / Size)</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">High</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Low</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Low</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Higher power density means your need smaller size motor for same amount of output power</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Life Expectancy</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">High</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Moderate</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Low</td>
                                        <td className="font-medium text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Higher life expectancy helps your application last longer and generate better ROI</td>
                                    </tr>
                                </table>
                            </div>
                            <p className="mt-[14px] md:mt-[20px] font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">From the above table it is evident that BLDC motors are much better suited than Induction motor or Brushed DC motor in wide number of features, due to this it can perform better than both motors in almost all application and help your application, and if taken advantage rightly it can help your application modernise completely, it can help add more features, reduce size and save overall cost.</p>

                        </div>

                        <div className="content-box">
                            <p className="mb-[14px] md:mb[10px] font-medium text-[18px] leading-[21.6px] tracking-[.27px] text-[#111111]  md:text-[20px] md:leading-[36px] md:text-[#3e3e3e]">Need Help with Selection?</p>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">
                                With this guide we have tried to help you choose the right kind of motor for your application but you can also look up&nbsp;<Link to="/product" className="font-medium text-[14px] leading-[23px] text-[#3e3e3e] md:text-[16px] md:leading-[36px] underline">Our Products</Link>
                                &nbsp;page for better understanding.
                            </p>
                            <p><Link to="/contactUs" className="font-medium text-[14px] leading-[23px] text-[#3e3e3e] md:text-[16px] md:leading-[36px] underline">Contact us</Link>&nbsp;and we can help you with selecting the motor for your application and guide on how to use BLDC motor for your application</p>

                        </div>



                    </div>

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


        </Layout>
    )
}
import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

export default function BeyondTraditional() {
    const pageTitle = "Unleash the Power of BLDC Motors: Unbeatable Advantages Revealed";
    return (
        <Layout background="#ffffff" color="#3E3E3E">
            <div>
                <Helmet>
                    <title>{pageTitle}</title>
                    <meta name="description" content="Explore the remarkable advantages of BLDC motors over traditional options. Efficiency, precision, and more await!" />
                </Helmet>
            </div>
            <section>
                <div className="blog-content-container w-[100%] md:w-[85%] mx-auto">
                    <div className="blog-info">
                        <h1 className="mb-[10px] font-medium text-[28px] leading-[33.6px] tracking-[.42px] md:text-[32px] md:leading-[35px] text-[#222222]">Beyond Traditional Induction & Servo</h1>
                        <p className="mb-[9px] font-normal text-[14px] leading-[23px] tracking-[.42px] md:text-[17px] md:leading-[36px] text-[#3e3e3e]">The Unbeatable Advantages of BLDC Motors</p>
                        <div className="flex items-center gap-[10px]">
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:font-medium md:leading-[36px] md:text-[#222222]">May 16, 23</p>
                            <span className="divider"></span>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:font-medium md:leading-[36px] md:text-[#222222]">Keshank Parmar</p>
                            <span className="divider"></span>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:font-medium md:leading-[36px] md:text-[#222222]">12 Minutes Read</p>
                        </div>
                    </div>
                    <div className="mt-[40px] md:mt-[50px]">
                        <StaticImage
                            src="../images/beyond-traditional.png"
                            alt="image of induction motor"
                            width={940}
                            height={466}
                            className="w-[100%] h-[100%]"
                        />
                    </div>
                    <div className="mt-[40px] md:mt-[50px]">
                        <div className="content-box mb-[40px] md:mb-[50px]">
                            <p className="mb-[14px] md:mb[10px] font-medium text-[18px] leading-[21.6px] tracking-[.27px] text-[#111111] md:text-[20px] md:leading-[36px] md:text-[#3e3e3e] capitalize">Super Power of BLDC motor unparalled to any other</p>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">For a lot of application today speed control has become a norm, for this most engineers use Induction motor with inverter and for application that demands better performance we need to switch to Servo motors, this increases applications cost and complexity significantly.
                            </p>
                            <p className="mt-[12px] md:mt[10px] font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">But do you know that Brushless DC motor offer advantages at a cost that is unparalleled to any motor in today's.</p>
                            <p className="mt-[12px] md:mt[10px] font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">These motors offers much better performance at a lower cost than servo motors and also offers much more features compared to AC induction motor for a small price increase ( in lot of application it even reduces the overall cost of the entire application).</p>
                            <p className="mt-[12px] md:mt[10px] font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">Today we will look into these Pro's and Con's and look into how you can use BLDC motor to get the best out of it.</p>

                        </div>
                        <div className="content-box mb-[40px] md:mb-[50px]">
                            <p className="mb-[14px] md:mb[10px] font-medium text-[18px] leading-[21.6px] tracking-[.27px] text-[#111111] md:text-[20px] md:leading-[36px] md:text-[#3e3e3e] capitalize">Why should you avoid AC Induction motor</p>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">AC induction motor is a very old technology, it is bulky, inefficient, has a lower power density, it is asynchronous, generate slip ( it does not run at a fixed speed, keeps changing with change in load) and was designed to be operated at a fixed rated speed,  to mitigate the challenge of speed control a VFD drive is used to to help these motor perform at variable speed. </p>
                            <p className="mt-[12px] md:mt[10px] font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">But it can only operate across wide speed without creating additional limitation, such as reducing the speed of motor will also reduce it fan speed and eventually heat up the motor and degrade its performance there are many such limitation faced, Another issue is that this system is an Open-Loop System ( there is no feedback of actual speed of motor to VFD ), this will create deviation of speed from our desired speed.  One more important limitation we need to look at is its impossible synchronise multiple motor without upgrading to additional and costly hardware.</p>

                        </div>
                        <div className="content-box mb-[40px] md:mb-[50px]">
                            <p className="mb-[14px] md:mb[10px] font-medium text-[18px] leading-[21.6px] tracking-[.27px] text-[#111111] md:text-[20px] md:leading-[36px] md:text-[#3e3e3e] capitalize">How Servo motor becomes default choice and when you should avoid them</p>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">Due to the above limitation when an application  demands one the above stated feature a natural inclination towards servo motor are seen.
                            </p>
                            <p className="mt-[12px] md:mt[10px] font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">But now you ask what is the problem with Servo and why should one bother to use BLDC or another motor instead of servo? Let me answer you. Although Servo motor are highly feature packed but they are very costly and complex to setup and use, the maintenance cost is very high as well. In most cases customer ends up spending 5x-15x more cost than AC induction motor. this is where BLDC becomes the holy grail and gives best of both worlds, let us dive more into it.</p>

                        </div>
                        <div className="content-box mb-[40px] md:mb-[50px]">
                            <p className="mb-[14px] md:mb[10px] font-medium text-[18px] leading-[21.6px] tracking-[.27px] text-[#111111] md:text-[20px] md:leading-[36px] md:text-[#3e3e3e] capitalize">Why BLDC?</p>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">BLDC is relatively new technology, you can read more about it <Link to="/bldcMadeSimple" className="underline font-medium">here</Link>. BLDC motor are compact, highly efficient, high power density, flat torque speed curve, it is synchronous ( it can operate at fixed speed), does not generate slip, can be operated at wide speed ranges and there is much more to it. And it cost much lower than servo motor. </p>
                            <p className="mt-[12px] md:mt[10px] font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">One thing we need to make note is like servo motor BLDC motor need a BLDC motor controller to operate, this controllers not only drives the motor but also provide additional features such as motor lock detect, Over Current protection, Over and under voltage protection and many more.</p>
                        </div>
                        <div className="content-box mb-[40px] md:mb-[50px]">
                            <p className="mb-[14px] md:mb[10px] font-medium text-[18px] leading-[21.6px] tracking-[.27px] text-[#111111] md:text-[20px] md:leading-[36px] md:text-[#3e3e3e] capitalize">When should you upgrade to BLDC from AC induction motor.</p>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">If you are using an AC induction motor with a VFD, we straight up recommend you to upgrade to BLDC motor because the Benefits outweighs the cost, even though we do not factor in any other benefits and we only consider the increased efficiency of motor provided by BLDC just the payback of period can  be as low as one year, also for certain application if the selection is done rightly the BLDC motor can become cheaper that combination of induction motor and VFD.</p>
                            <p className="mt-[12px] md:mt[10px] font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">In case you are using AC induction motor as standalone, there are many benefits that you can harvest from BLDC motor  which can help you with better feature and overall cost saving of your application. You can use take benefit of its compact size and reduce the overall size of your application, better efficiency can help save operating cost of motor in the long run also for battery operated application it can give a longer battery life, by using safety features of BLDC controllers, you can remove additional safety equipment used with induction motor such as overload protection or thermal overload circuits. </p>
                        </div>
                        <div className="content-box mb-[40px] md:mb-[50px]">
                            <p className="mb-[14px] md:mb[10px] font-medium text-[18px] leading-[21.6px] tracking-[.27px] text-[#111111]  md:text-[20px] md:leading-[36px] md:text-[#3e3e3e]">Working </p>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">We will try and understand working of sensored type BLDC motor. These motors are connected to a driver and the driver is supplied a DC voltage as per rated on motor, the driver will sense the position of the magnet in the motor using hall sensor, and it will look up the commutation table, the commutation table which is inbuilt in the driver provides the information on which coils of the motor to excite depending on the rotor position, the driver then excited a particular set of coil which will turn to rotor to the next slot position where this cycle repeats and the motor will start rotating.</p>

                        </div>
                        <div className="content-box mb-[40px] md:mb-[50px]">
                            <p className="mb-[14px] md:mb[10px] font-medium text-[18px] leading-[21.6px] tracking-[.27px] text-[#111111]  md:text-[20px] md:leading-[36px] md:text-[#3e3e3e]">Why Should you use BLDC motor?</p>
                            <p className="font-normal text-[14px] leading-[23px] tracking-[.42px] text-[#3e3e3e] md:text-[16px] md:leading-[36px]">If you are developing a new application or are currently using Induction motor or Brushed DC motor for your application below table will help you compare all the motors and state the advantage of BLDC motor.</p>
                            <div className="table-container overflow-scroll md:overflow-visible  mt-[14px] md:mt-[20px]">
                                <table className="table">
                                    <tr>
                                        <th className="w-170 text-[12px] font-bold leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px] ">Feature</th>
                                        <th className="w-120  text-[12px] font-bold leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px] ">BLDC</th>
                                        <th className="w-170  text-[12px] font-bold leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px] ">AC Induction Motor</th>
                                        <th className="w-170  text-[12px] font-bold leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px] ">Brushed DC</th>
                                        <th className="w-310  text-[12px] font-bold leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px] ">Advantage</th>
                                    </tr>
                                    <tr>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Commutation</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Electronic</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Not Required</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Carbon Brushes</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">In case of BLDC and IM no requirement mechanical commutation is required</td>
                                    </tr>
                                    <tr>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Efficiency</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">High</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Poor</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Moderate</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Higher efficiency results in better power saving and faster ROI</td>
                                    </tr>
                                    <tr>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Operating Speed Range</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Wide</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Narrow</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Moderate</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Wider operating speed is advantageous as the operatable speed of the motor becomes very wide</td>
                                    </tr>
                                    <tr>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Speed Torque Curve</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Flat</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Non-linear</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Moderately Flat</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Flat speed torque curve give you the same torque across the entire operating speed range so that your application can run smoothly across all speed</td>
                                    </tr>
                                    <tr>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Electrical Noise</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Low</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Moderate</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">High</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Lower electrical noise is better since is gives a quitter operation and less noise pollution for your application</td>
                                    </tr>
                                    <tr>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Heating</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Low</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">High</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">High</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Lower Heating results in better performance and you can use it in application where heat generated is a concern</td>
                                    </tr>
                                    <tr>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Maintenance</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Almost none</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Little</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Periodic</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Lower maintenance translates to better ROI and lower downtime</td>
                                    </tr>
                                    <tr>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Dynamic Response</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Fast</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Slow</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Slow</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Dynamic response states that how fast can a motor react to demand of speed and torque of your application</td>
                                    </tr>
                                    <tr>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Power Density (Output Power / Size)</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">High</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Low</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Low</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Higher power density means your need smaller size motor for same amount of output power</td>
                                    </tr>
                                    <tr>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Life Expectancy</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">High</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Moderate</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Low</td>
                                        <td className="font-normal text-[12px] leading-[23px] text-[#3e3e3e] md:text-[14px] md:leading-[32px]">Higher life expectancy helps your application last longer and generate better ROI</td>
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
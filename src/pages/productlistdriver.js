import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

export default function productlistdriver() {
    return (
        <Layout background=''>
            <section className='md:py-[100px]'>
                <div className='grid  md:grid-cols-2 md:gap-[80px] w-[90%] md:w-[85%] mx-auto'>
                    <div className='mb-[40px]'>
                        <div className='mt-[70px] mb-[20px] md:hidden'>
                            <p className='text-[26px] font-normal leading-[35px] tracking-[1.2px] '>BLDC300</p>
                            <p className='font-normal text-[16px] leading-[21px] tracking-[.66px]'>BLDC Driver</p>
                        </div>
                        <StaticImage
                            src="../images/product_driver_bldc.png"
                            alt="alto logo"
                            width={520}
                            height={669}
                            className=""
                        />
                    </div>
                    <div className=''>
                        <div className='mb-[30px] hidden md:block'>
                            <p className='text-[40px] font-bold leading-[54px] tracking-[1.2px] '>BLDC300</p>
                            <p className='font-normal text-[22px] leading-[30px] tracking-[.66px]'>BLDC Driver</p>
                        </div>
                        <div>
                            <div className='md:w-[389px]'>
                                <div className='pb-[22px] border-b border-[#E9E9E9]'>
                                    <p className='md:text-[16px] md:leading-[22px] tracking-[.48px] md:mb-[20px]'>Technical Data</p>
                                    <div className='flex flex-col md:gap-[15px]'>
                                        <div className='flex justify-between'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] '>Output Current</p>
                                            <p className=''>0-35 A</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] '>Speed Range</p>
                                            <p className=''>0-20000 RPM</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] '>Control Signal Voltage</p>
                                            <p className=''>5 V</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] '>Hall Sensor Voltage</p>
                                            <p className=''>4.5-5.5 V</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] '>Weight</p>
                                            <p className=''>24 V</p>
                                        </div>

                                    </div>
                                </div>

                                <div className='py-[22px]  border-b border-[#E9E9E9]'>
                                    <p className='md:text-[16px] md:leading-[22px] tracking-[.48px] md:mb-[20px]'>Driver Control Functions</p>
                                    <div className='flex flex-col md:gap-[20px]'>
                                        <div className='flex justify-between'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] '>F/R</p>
                                            <p className=''>Direction</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] '>EN</p>
                                            <p className=''>Enable</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] '>BRK</p>
                                            <p className=''>Brake</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] '>SV</p>
                                            <p className=''>External Speed Control</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] '>RV</p>
                                            <p className=''>Speed Control (Inbuilt)</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] '>SPEED</p>
                                            <p className=''>Speed Feedback</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] '>ALARM</p>
                                            <p className=''>Alarm Feedback</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] '>CP-IN</p>
                                            <p className=''>RS232 Communication</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] '>LED's</p>
                                            <p className=''>Driver Status</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='product-btn-grp gap-[20px] md:gap-[30px]'>
                                <Link
                                    to=""
                                    className="inline-block cto-btn py-[14px] px-[20px] w-fit  rounded-[2px] text-[#1C1C1C] bg-[#F5F5F5] hover:bg-[#D9D9D9] transition ease-in-out duration-400 text-[16px] font-medium mt-[30px] leading-[19.2px]"
                                >
                                    Download Specs Sheet
                                </Link>
                                <Link
                                    to="/contactUs"
                                    className="inline-block cto-btn py-[14px] px-[20px] w-fit rounded-[2px] text-[#ffffff] bg-[#1C1C1C] hover:bg-[#404040] transition ease-in-out duration-400 text-[16px] font-medium md:mt-[30px] leading-[19.2px]"
                                >
                                    Place an enquiry on BLDC 300
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className='w-[90%] md:w-[85%] mx-auto mt-[50px]'>
                <div className='features gap-[40px] md:gap-[60px] p-[30px] md:p-[40px] border border-1 border-[#f0f0f0]'>
                    <div>
                        <p className='text-[20px] leading-[24px] tracking-[.3px] md:text-[24px] md:leading-[29px] text-[#111111] mb-[20px] md:mb-[20px]'>Top Features</p>
                        <ul className='flex flex-col gap-[14px]'>
                            <li>Supports Sensored BLDC motor for better response at lower speed</li>
                            <li>Supports both open and closed loop function</li>
                            <li>PID Speed control</li>
                            <li>Over Current, Over Voltage, Over heat Protection</li>
                            <li>Motor Stall Detection</li>
                            <li>Supports RS-232 Communication Protocol</li>
                            <li>Motor Speed Feedback </li>
                            <li>Adjustable Acceleation and Deacceleration</li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-[20px] leading-[24px] tracking-[.3px] md:text-[24px] md:leading-[29px] text-[#111111] mb-[20px] md:mb-[20px] '>Speed Control Option</p>
                        <ul className='flex flex-col gap-[14px]'>
                            <li>Inbuilt Potentiometer</li>
                            <li>External Potentiometer</li>
                            <li>PWM Speed control</li>
                            <li>External Analog Input</li>
                        </ul>
                    </div>
                </div>
            </section>


            <section className="mt-[100px] py-[100px] md:py-[150px] bg-[#FAFAFA] enquire">
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
                            Enquiry Now &nbsp; &rarr;
                        </Link>
                    </div>
                    <div className="order-1 md:order-2">
                        <StaticImage
                            src="../images/get-in-touch.png"
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

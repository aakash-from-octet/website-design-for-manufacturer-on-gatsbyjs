import React, { useState } from 'react';
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import atltoPDF from '../content/alto-brochure.pdf'

export default function Aec40() {

    const [is2D, setIs2D] = useState(true);
    const [show3D, setShow3D] = useState(false);

    const toggleImages = () => {
        setIs2D((prevState) => !prevState);
        setShow3D((prevState) => !prevState);
    };

    return (
        <Layout background=''>
            <section className='md:py-[100px]'>
                <div className='grid  md:grid-cols-2 md:gap-[80px] w-[90%] md:w-[85%] mx-auto'>
                    <div className='mb-[40px] md:flex md:justify-center min-w-[300px]'>
                        <div className='mt-[70px] mb-[20px] md:hidden  flex justify-between relative'>
                            <div>
                                <p className='text-[26px] font-normal leading-[35px] tracking-[1.2px] '>AEC40</p>
                                <p className='font-normal text-[16px] leading-[21px] tracking-[.66px]'>Encoder Accesories</p>
                            </div>
                            <button
                                className="threeD-btn absolute right-0 md:hidden"
                                onClick={toggleImages}
                            >
                                {show3D ? (
                                    <StaticImage
                                        src="../images/2d-icon.png"
                                        alt="2d logo"
                                        width={24}
                                        height={24}
                                        className="2d-icon"
                                    />
                                ) : (
                                    <StaticImage
                                        src="../images/3d-icon.png"
                                        alt="3d logo"
                                        width={24}
                                        height={24}
                                        className="3d-icon"
                                    />
                                )}
                            </button>
                        </div>

                        <div className="relative w-full flex justify-center">
                            <button
                                className="threeD-btn absolute right-0 hidden md:block md:top-[10px]"
                                onClick={toggleImages}
                            >
                                {show3D ? (
                                    <StaticImage
                                        src="../images/2d-icon.png"
                                        alt="2d logo"
                                        width={24}
                                        height={24}
                                        className="2d-icon"
                                    />
                                ) : (
                                    <StaticImage
                                        src="../images/3d-icon.png"
                                        alt="3d logo"
                                        width={24}
                                        height={24}
                                        className="3d-icon"
                                    />
                                )}
                            </button>
                            {is2D ? (

                                <StaticImage
                                    src="../images/AEC40.png"
                                    alt="alto logo"
                                    width={350}
                                    height={300}
                                    className="2d-image"
                                />
                            ) : (
                                <iframe title='AEC40' className={show3D ? "3d-modal mt-[100px] min-w:[300px] md:min-w-[399px]" : "3d-modal hidden"} scrolling='no' frameborder='0' allowfullscreen='true' src='https://www.3dcontentcentral.com/external-site-embed.aspx?format=3D&catalogid=14959&modelid=2276909&width=250&height=250&edraw=true' name='PreviewFrame3D' id='PreviewFrame3D' height='355'></iframe>

                            )}
                        </div>
                    </div>
                    <div className=''>
                        <div className='mb-[30px] hidden md:block'>
                            <p className='text-[40px] font-bold leading-[54px] tracking-[1.2px] '>AEC40</p>
                            <p className='font-normal text-[22px] leading-[30px] tracking-[.66px]'>Encoder Accesories</p>
                        </div>
                        <div>
                            <div className='md:w-[380px]'>
                                <div className='pb-[22px] border-b border-[#E9E9E9]'>
                                    <p className='md:text-[16px] font-semibold md:leading-[22px] tracking-[.48px] md:mb-[20px] text-[#333333]'>Technical Data</p>
                                    <div className='flex flex-col md:gap-[15px]'>
                                        <div className='flex'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] w-[150px] '>+V</p>
                                            <p className='text-start'>Supply voltage encoder +V DC</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] w-[150px] '>0V</p>
                                            <p className=''>Supply voltage ground GND (0 V)</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] w-[150px] '>A, &#256;</p>
                                            <p className=''>Incremental output channel A</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888] w-[150px] '>B,B&#x0305;</p>
                                            <p className=''>Incremental output channel B</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='md:text-[16px] leading-[20px] tracking-[.48px] text-[#888888]  w-[150px]'>0, 0</p>
                                            <p className=''>Reference signal</p>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div className='mt-[22px] max-w-full'>
                                <p className='font-semibold text-[16px] leading-[21.82px] tracking-[.48px] text-[#333333] mb-[20px] '>Pulse per revoltion (PPR)</p>
                                <div>
                                    <p className='font-Nunito font-normal text-[16px] leading-[19.09px] tracking-[.48px] text-[#333333] break-words'>10&nbsp; &nbsp;,&nbsp; &nbsp;25&nbsp; &nbsp;,&nbsp; &nbsp;50&nbsp; &nbsp;,&nbsp; &nbsp;60&nbsp; &nbsp;,&nbsp; &nbsp;88&nbsp; &nbsp;,&nbsp; &nbsp;100&nbsp; &nbsp;,&nbsp; &nbsp;120&nbsp; &nbsp;,&nbsp; &nbsp;150&nbsp; &nbsp;,&nbsp; &nbsp;200&nbsp; &nbsp;,&nbsp; &nbsp;250&nbsp; &nbsp;,&nbsp; &nbsp;314&nbsp; &nbsp;,&nbsp; &nbsp;360&nbsp; &nbsp;,&nbsp; &nbsp;500&nbsp; &nbsp;,&nbsp; &nbsp;512&nbsp; &nbsp;,&nbsp; &nbsp;600&nbsp; &nbsp;,&nbsp; &nbsp;1000&nbsp; &nbsp;,&nbsp; &nbsp;1024&nbsp; &nbsp;,&nbsp; &nbsp;1500&nbsp; &nbsp;,&nbsp; &nbsp;1800&nbsp; &nbsp;,&nbsp; &nbsp;2000&nbsp; &nbsp;,&nbsp; &nbsp;2048&nbsp; &nbsp;,&nbsp; &nbsp;2500&nbsp; &nbsp;,&nbsp; &nbsp;2560&nbsp; &nbsp;</p>

                                </div>
                            </div>

                            <div className='product-btn-grp gap-[20px] md:gap-[30px] '>
                                <a

                                    href={atltoPDF} target="_blank" download="alto-PDF-document" rel="noreferrer"
                                    className="inline-block cto-btn py-[14px] px-[20px] w-fit rounded-[2px] text-[#1C1C1C] bg-[#d9d9d9] hover:bg-[#bfbfbf] transition ease-in-out duration-400 text-[16px] font-medium mt-[30px] leading-[19.2px]"
                                >
                                    Download Specs Sheet
                                </a>
                                <Link
                                    to="/contactUs"
                                    className="inline-block cto-btn py-[14px] px-[20px] w-fit rounded-[2px] text-[#ffffff] bg-[#1C1C1C] hover:bg-[#404040] transition ease-in-out duration-400 text-[16px] font-medium md:mt-[30px] leading-[19.2px]"
                                >
                                    Place an enquiry on IEC Motor
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className='w-[90%] md:w-[85%] mx-auto mt-[50px]'>
                <div className='features gap-[40px] md:gap-[60px] p-[30px] md:p-[40px] border border-1 border-[#f0f0f0]'>
                    <div className='w-[100%]'>
                        <p className='text-[20px] leading-[24px] tracking-[.3px] md:text-[24px] md:leading-[29px] text-[#111111] mb-[20px] md:mb-[20px]'>Top Features</p>
                        <div className='flex flex-col md:flex-row gap-[14px]'>

                            <ul className='flex flex-col gap-[14px]  w-[100%] max-w-md-[553px]'>
                                <li>Versatile output circuits: Push-pull, RS422, or open collector.</li>
                                <li>Capable of speeds up to 4500 RPM.</li>
                                <li>Offers a range from 10 to 2560 pulses per revolution (PPR).</li>
                            </ul>
                            <ul className='flex flex-col gap-[14px]  w-[100%] max-w-md-[553px]'>
                                <li>Flexible supply voltage options: 5 V DC, 10-30 V DC, or 5-30 V DC.</li>
                                <li>Designed to operate within a temperature range of -20° C to 40° C.</li>
                                <li>Equipped with reverse polarity and short circuit protection for enhanced safety.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <section className="mt-[150px] py-[100px] md:py-[150px] bg-[#FAFAFA] enquire">
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

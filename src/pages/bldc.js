
import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { getImage } from "gatsby-plugin-image";
import { Link, graphql, useStaticQuery } from "gatsby";
import data from "../content/data.json"
import Card from '../components/Card'
import Steps from '../components/Steps'
import { Helmet } from 'react-helmet';
// import controller from "../content/controller.json"




export default function Bldc() {
  const pageTitle = 'BLDC Solutions for Enhanced Efficiency | Alto'
  const imageData = useStaticQuery(graphql`
        query {
            data: allFile(
            filter: {
              relativePath: { regex: "/^()/" }
            }
          ) {
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

  const imagesByPath = {};
  imageData.data.edges.forEach(({ node }) => {
    const imagePath = node.relativePath;
    const imageData = getImage(node.childImageSharp);
    imagesByPath[imagePath] = imageData;
  });
  return (
    <Layout background='#1C1C1C' color='#ffffff'>
      <div >
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content="Explore custom BLDC motor options at Alto. Choose, customize, and optimize your motor and controller for maximum efficiency and value." />
        </Helmet>

      </div>

      <section   className='flex justify-center items-center py-[60px] md:py-[70px]'>
        <div className='px-[20px] md:px-[0px]'>
          <StaticImage
            src="../images/bldc-lab-wheel.png"
            alt='rotator logo'
            width={685}
            height={625}
            className='bldc-cog-image shadow-[-2px_0_18px_0_rgba(67, 67, 67, 0.25)]' />
        </div>
      </section>
      <section id='whyBldcSection' className='relative md:py-16'>
        <div className='flex justify-end relative right-0 overflow-hidden'>
          <StaticImage
            src="../images/dc-motor-flow.png"
            alt='dc moter flow logo'
            width={823}
            height={273}
            className=' right-[-89px]' />
        </div>
        <div className='text-center items-center relative'>
          <h2 className='mb-[12px] md:mb-[30px]'>Why BLDC?</h2>
          <p className='text-[14px] leading-[26px] tracking-[3%] md:text-xl '>If you have an old machine, chances are high that you'd need to update it's motor.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 mx-auto gap-8 mt-10 justify-center w-[90%] md:w-[85%] mb-[100px] md:mb-[0px]'>
          {

            data.map((info, index) => (
              <Card cardData={info} key={index} imagesByPath={imagesByPath} />
            ))
          }
        </div>
      </section>

      <section id='bldcxAltoSection' className='py-[100px] md:py-[70px] '>
        <div className='cog-section justify-between items-center'>
          <div className='hidden md:block'>
            <StaticImage
              src="../images/cog-left.png"
              alt='cog image'
              width={243}
              height={611}
              className='' />
          </div>
          <div className='md:hidden '>
            <StaticImage
              src="../images/cog-top.png"
              alt='cog image'
              width={330}
              height={150}
              className='' />
          </div>
          <div className=''>
            <div className='mb-[12px] md:mb-[30px] flex justify-center items-center text-[#ffffff] gap-[10px] md:gap-[20px]'>
              <h2 className='md:text-[46px]'>BLDC</h2>
              <span className='text-[20px] leading-[24px] tracking-[1.5%]  md:text-[33px] md:leading-[36px]'>X</span>
              <div className='hidden md:block w-auto h-auto'>
                <StaticImage
                class=''
                  src="../images/altoLogoActive.png"
                  alt='cog image'
                  width={79}
                  height={40}
                />
              </div>
              <div className='block md:hidden'>

                <StaticImage
                  src="../images/alto_responsive.png"
                  alt='cog image'
                  width={44}
                  height={25}
                />
              </div>
            </div>
            <p className='text-center text-[14px] leading-[26px] tracking-[3%] md:text-xl text-[#ffffff] md:leading-8 w-[260px] md:w-[auto]'>We are exactly who you need your BLDC motors from, and here's why.</p>
          </div>
          <div className='md:hidden'>
            <StaticImage
              src="../images/cog-bottom.png"
              alt='cog image'
              width={330}
              height={150}
              className='' />
          </div>
          <div className='hidden md:block'>
            <StaticImage
              src="../images/cog-right.png"
              alt='cog image'
              width={196}
              height={611}
              className='' />

          </div>


        </div>

      </section>

      <section id='altoForBldcSection' className='pt-[70px] pb-[90px] w-[90%] md:w-[85%] mx-auto'>
        <div className='alto-for-bldc gap-[60px] md:gap-[200px] justify-center'>
          <div className='md:w-[260px]'>
            <h2 className='font-normal'>Alto For BLDC</h2>
            <p className='text-description mt-[12px] '>Alto offers a wide range of customisable options help you select right motor and controller to bring a significant change for your product. </p>
          </div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-[35px] md:gap-[100px]'>
            <div className='text-box'>
              <h3 className='mb-[4px] md:mb-[20px]'>
                1. Choice
              </h3>
              <p className='text-description'>BLDC is relatively new technology in market but a powerful one. We help you to select right motor. </p>
            </div>
            <div className='text-box'>
              <h3 className='mb-[4px] md:mb-[20px]'>
                2. Custom
              </h3>
              <p className='text-description'>If none of our product meet your requirement, we can help you build custom motor.</p>
            </div>
            <div className='text-box'>
              <h3 className='mb-[4px] md:mb-[20px]'>
                3. Controllers
              </h3>
              <p className='text-description'>Controllers are an important part of BLDC motor, controller decides what can be harnessed from BLDC motor. </p>
            </div>
            <div className='text-box'>
              <h3 className='mb-[4px] md:mb-[20px]'>
                4. Efficiency
              </h3>
              <p className='text-description'>Alto will optimise to harness its full potential for your application and does deliver value for your customer. </p>
            </div>
          </div>

        </div>
      </section>

      <section id='ourControllerLabsSection' className='bg-[#141414] py-[100px] md:py-[150px]'>
        <div className='md:text-center items-center relativ pb-[50px] md:pb-[150px]  w-[90%] md:w-[auto] mx-auto'>
          <h2 className='mb-[12px] md:mb-[30px]'>Our Controller Labs</h2>
          <p className='text-[14px] leading-[26px] tracking-[3%] md:text-xl '>Empowering Motor Control Solutions:<br className='md:hidden' /> Journey into Our Pioneering Controller Labs. </p>

        </div>
        <div>
          <Steps />
        </div>
      </section>

      <section id='researchSection' className='pt-[100px] md:pt-[150px]'>
        <div className='text-center items-center relative '>
          <h2 className='mb-[6px] md:mb-[30px]'>Research</h2>
          <p className='text-[14px] leading-[26px] tracking-[3%] md:text-xl'>Advancing the industry with cutting-edge research and development.</p>
          <Link to='/contactUs' className='cto-btn inline-block py-[14px] px-[20px] rounded-[2px] bg-white text-[#1C1C1C] hover:bg-[#D9D9D9] transition ease-in-out duration-400 text-[16px] font-medium mt-[40px] md:mt-[30px] leading-[19.2px]'>
            Join Our Team
          </Link>
        </div>
        <div className='w-[100%] mx-auto hidden md:block' >
          <StaticImage
            src="../images/research-v3.png"
            alt='cog image'

            className='w-[100%] h-[100%]' />
        </div>

        <div className='md:w-[100%] md:mx-auto  md:hidden' >
          <StaticImage
            src="../images/cog_bldc_resp.png"
            alt='cog image'
            width={375}
            height={180}
            className='w-[100%] h-[100%]' />
        </div>


      </section>

      <section className='bldc-enquirey py-[140px] hidden md:block bg-[#242424]'>
        <div className='grid grid-cols-2 w-[85%] mx-auto'>
          <div className=' py-[75px] '>
            <p className='text-[30px] leading-[36px]'>
              Get in touch with us to experience the best in motor industry innovation and service.
            </p>
            <Link to='/contactUs' className='cursor-pointer inline-block cto-btn py-[14px] px-[20px] rounded-[2px] bg-[#d9d9d9] text-[#1C1C1C] hover:bg-[#bfbfbf] transition ease-in-out duration-400 text-[16px] font-medium mt-[50px] leading-[19.2px]'>
              Enquire Now &rarr;
            </Link>
          </div>
          <div className='pl-[100px]'>
            <StaticImage
              src="../images/footer-img-bw.png"
              alt='cog image'
              width={475}
              height={325}
              className='' />
          </div>

        </div>
      </section>

      <section className="enquire py-[100px] md:py-[150px] bg-[#FAFAFA] md:hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 md:justify-items-end w-[90%] md:w-[85%] mx-auto">
          <div className=" pt-[40px]  md:py-[75px] order-2">
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
          <div className=" order-1">
            <StaticImage
              src="../images/footer-img-bw.png"
              alt="machine customization image"
              width={458}
              height={305}
              className=""
            />
          </div>
        </div>
      </section>




    </Layout >
  )
}

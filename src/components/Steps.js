import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Steps() {
  return (
    <div className='w-[90%] md:w-[auto] mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div className='md:pl-[92px] md:py-[150px]'>
          <p className='text-[22px] leading-[26.4px] tracking-[1.5%] md:text-[40px] md:leading-[48px] mb-[20px] md:mb-[50px] '>Design</p>
          <p className='text-[14px] leading-[23px] tracking-[3%] md:text-[17px]  md:leading-[26px]'>Employing advanced design methodologies and precision
            engineering to create highly efficient and reliable
            BLDC controllers, tailored to meet your specific motor control requirements and optimise system performance.</p>
        </div>
        <div className='mt-[34px] md:mt-[auto]'>
          <StaticImage
            src="../images/design.png"
            alt='cog image'
            width={683}
            height={518}
            className='w-[100%] h-[100%]' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div className='order-2 md:order-1'>
          <StaticImage
            src="../images/develop.png"
            alt='cog image'
            width={683}
            height={518}
            className='w-[100%] h-[100%]' />
        </div>
        <div className='md:px-[92px] pt-[50px] pb-[34px] md:py-[150px] order-1 md:order-2'>
          <p className='text-[22px] leading-[26.4px] tracking-[1.5%] md:text-[40px] md:leading-[48px] mb-[20px] md:mb-[50px]'>Develop</p>
          <p className='text-[14px] leading-[23px] tracking-[3%] md:text-[17px]  md:leading-[26px]'>Precisely manufactured controllers
            tailored to match your design specifications for seamless integration and optimal performance.</p>
        </div>

      </div>
      <div className='grid grid-col-1 md:grid-cols-2'>
        <div className='md:px-[92px] pt-[50px] pb-[34px] md:py-[150px]'>
          <p className='text-[22px] leading-[26.4px] tracking-[1.5%] md:text-[40px] md:leading-[48px] mb-[20px] md:mb-[50px]'>Deliver</p>
          <p className='text-[14px] leading-[23px] tracking-[3%] md:text-[17px]  md:leading-[26px]'>Streamlined delivery process ensures prompt access
            to controllers for optimised motor systems.</p>
        </div>
        <div>
          <StaticImage
            src="../images/deliver.png"
            alt='cog image'
            width={683}
            height={518}
            className='w-[100%] h-[100%]' />
        </div>
      </div>

    </div>
  )
}

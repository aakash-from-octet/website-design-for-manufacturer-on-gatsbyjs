import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { navigate } from "gatsby";
// import { GatsbyImage } from 'gatsby-plugin-image'

export default function ProductCard({ productInfo, productImagesByPath }) {

  

  const handleClick = () => {
    if (productInfo.category === 'BLDC Motors' && productInfo.title === 'AL57BL01') {
      navigate("/bldctype1");
    } else if (productInfo.category === 'BLDC Motors' && productInfo.title === 'AL57BL02') {
      navigate("/bldctype2");
    } else if (productInfo.category === 'BLDC Motors' && productInfo.title === 'AL57BL03') {
      navigate("/bldctype3");
    } else if (productInfo.category === 'BLDC Motors' && productInfo.title === 'AL57BL04') {
      navigate("/bldctype4");
    } else if (productInfo.category === 'Induction Motors' && productInfo.title === 'IEC Induction motor') {
      navigate("/iecinduction");
    } else if (productInfo.category === 'Accessories' && productInfo.title === 'AEC40') {
      navigate("/aec40");
    } else if (productInfo.category === 'Accessories' && productInfo.title === 'Worm Gearbox') {
      navigate("/wormgear");
    } else if (productInfo.category === 'BLDC Driver' && productInfo.title === 'DRV-BL300') {
      navigate("/bldc300");
    }else if(productInfo.category === 'BLDC Driver' && productInfo.title === 'DRV-BL120'){
      navigate("/bldc10");
    }
  };


  return (
    <div className="">
      <div onClick={handleClick} className="border-hover p-[20px] md:flex md:flex-col items-center group border border-[#DFDFDF]  md:border-[#FAFAFA]  cursor-pointer">
        <div className="image-container py-[40px] w-full">
          <GatsbyImage
            className="w-full h-full self-center"
            image={productImagesByPath[productInfo.image]}
            alt="" 
          />
        </div>
        <div className="details-container w-[95%] self-start">
          <div>
            <p className="text-[20px] leading-[24px] tracking-[3%] mb-[22px]">
              {productInfo.title}
            </p>
            <p className="text-[16px] leading-[20px] tracking-[3%] mb-[18px]">
              {productInfo.heading}
            </p>
            <div className="grid product-details-list gap-[16px]">
              {Object.keys(productInfo.details).map((key) => (
                <div key={key}>
                  <span className="text-[14px] leading-[16.71px] tracking-[3%] text-[#888888]">{key}</span>
                  <span className="text-[#444444]">&nbsp;&nbsp;{productInfo.details[key]}</span>
                </div>
              ))}
            </div>
            {/* category */}
            <Link to={productInfo.category === 'BLDC Motors' ? `/productlist` : `/productlistdriver`} className="w-fit text-center hidden md:block opacity-0 group-hover:opacity-100 mt-[30px] py-[12px] px-[20px] rounded-[2px] bg-[#1c1c1c] text-[#fff]">
              View Details
            </Link>

            <Link to={productInfo.category === 'BLDC Motors' ? `/productlist` : `/productlistdriver`} className="block md:hidden mt-[20px] font-semibold text-[13px] leading-[15.6px] tracking-[3%] text-[#a0a0a0]">
              Tap for more details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Items({ itemsInfo, itmesImagesByPath }) {
 
  return (
    <div
      className={`grid grid-col-1 md:grid-cols-2 grid-flow-dense item-container ${
        itemsInfo.id % 2 === 0 ? "even" : "odd"
      } items-center md:justify-items-center `}
    >
      <div className="text-info flex flex-col justify-center md:pl-[80px] ">
        <p className="mb-[20px] font-normal text-[40px] leading-[48px] tracking-[1.5%] text-[#111111] md:w-[400px]">
          {itemsInfo.title}
        </p>
        <p className="mb-[25px] font-normal text-[17px] leading-[26px] tracking-[3%] text-[#3e3e3e]">
          {itemsInfo.description}
        </p>
        <p className="font-normal text-[17px] leading-[26px] tracking-[3%] text-[#3e3e3e]">
          {itemsInfo.sub_description}
        </p>
      </div>
      <div className="image-info md:w-[100%] md:h-[100%]">
        <GatsbyImage
          className="md:w-[100%] md:h-[100%]"
          image={itmesImagesByPath[itemsInfo.image]}
          alt=""
        />
      </div>
    </div>
  );
}

import Image, { StaticImageData } from "next/image";
import React from "react";

interface props {
    title: string,
    desc : string,
    img : StaticImageData 
}

const WSWUCard = ({title, desc, img}: props) => {
  return (
    <div className="bg-white border border-solid border-white rounded-2xl w-[400px] md:h-[341px] h-auto">
      <div className="p-6">
        <Image src={img} alt={"Pict"} className="mx-auto mb-4"/>
        <h3 className="text-main text-xl md:text-2xl font-semibold text-center mb-2">{title}</h3>
        <h3 className="text-[#4C4C50] md:text-base font-normal text-center">{desc}</h3>
      </div>
    </div>
  );
};

export default WSWUCard;

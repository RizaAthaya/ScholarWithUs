import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  mentor: StaticImageData;
  name: string;
  scholar_history: string;
  study_track: string;
}

const MentorCard = ({ mentor, name, scholar_history, study_track }: Props) => {
  return (
    <div className="w-fit h-fit">
      <div className="relative z-1 mx-auto rounded-[16px] xl:w-[418px] md:w-[350px] w-[85vw] h-auto sm:h-[421px] border-2 border-solid border-[#A9B1F4] shadow-lg text-center items-center p-[24px]">
        <div className="flex justify-center mx-auto w-[240px] h-[240px] mb-[24px] items-center relative z-0">
          <Image
            src={mentor}
            alt={"Mentor Pict"}
            width={100}
            height={100}
          ></Image>
        </div>
        <h3 className="font-[700] text-[24px] text-[#121216]">{name}</h3>
        <div className="flex justify-center mx-auto">
          <h3 className="mt-[16px] mb-[10px] font-[400] text-[12px] text-[#080E41] px-[9px] py-[3px] text-center w-auto h-[24px] bg-[#A9B1F4] rounded-[16px]">
            {scholar_history}
          </h3>
        </div>
        <h3 className="mb-[24px] font-[400] text-[15px] text-[#4C4C50]">
          {study_track}
        </h3>
      </div>
    </div>
  );
};

export default MentorCard;

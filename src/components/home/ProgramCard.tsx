import React from "react";

const ProgramCard = () => {
  return (
    <div>
      <div className="mx-auto flex justify-center sm:mb-0 mb-8">
        <div className="m-[15px] py-[15px] px-[20px] sm:p-[24px] rounded-[16px] w-[75vw] sm:w-[400px] h-[180px] sm:h-[264px] font-[inter] border border-solid border-[#A9B1F4] mb-[10px] sm:mb-[48px] ml-[24px]">
          <div className="sm:flex hidden">
            <h3 className="bg-[#A9B1F4] text-black-400 px-[9px] py-[3px] text-[12px] rounded-[16px] mr-[8px] text-[#111D81]">
              S2
            </h3>
            <h3 className="bg-[#A9B1F4] text-black-400 px-[9px] py-[3px] text-[12px] rounded-[16px] mr-[8px] text-[#111D81]">
              Sidoarjo
            </h3>
            <h3 className="bg-[#A9B1F4] text-black-400 px-[9px] py-[3px] text-[12px] rounded-[16px] text-[#111D81]">
              Full 
            </h3>
          </div>
          <div className="my-[16px] sm:p-[0] px-[10px]">
            <div className="text-left mb-[8px] text-[16px] text-black font-[400]">
              Dari YUBE
            </div>
            <div className="text-left mb-[8px] text-[20px] text-black font-[700] h-[48px]">
              Nama Satu
            </div>
          </div>
          <div className="hidden sm:block px-[16px] py-[8px] rounded-[8px] bg-[#A9B1F4] w-[352px] h-[72px] mx-auto">
            <div className="text-black-400 text-[16px] mb-[8px]">
              <h3 className="text-[16px] float-left font-[400]">
                Open Registration
              </h3>
              <h3 className="text-[16px] text float-right font-[400]">
                01-02-2023
              </h3>
            </div>
            <div className="text-[#ED1C24]">
              <h3 className="text-[16px] float-left font-[400]">
                Close Registration
              </h3>
              <h3 className="text-[16px] text float-right font-[400]">
                20-30-2021
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;

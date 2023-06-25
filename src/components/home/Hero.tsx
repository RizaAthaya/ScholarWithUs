import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-screen md:px-[100px] px-7 md:py-0 py-8">
      <div className="md:flex block justify-between items-center min-h-[80vh]">
        <div className="md:max-w-[60%] md:min-h-0 min-h-[85vh] mt-6 flex items-center">
          <div>
            <h3 className="text-main md:text-[64px] text-5xl font-bold mb-6">
              Buka Potensimu, <br /> Taklukkan Dunia
            </h3>
            <h3 className="text-[#4C4C50] text-xl md:text-2xl font-normal mb-8 md:mb-12">
              Biarkan mentor kami membimbing kamu mempersiapkan diri <br />{" "}
              meraih beasiswa ke perguruan tinggi terbaik di seluruh dunia.
            </h3>
            <button className="bg-main text-white rounded-lg px-6 py-3 text-base font-semibold hover:bg-sec1">
              Daftar Sekarang
            </button>
          </div>
        </div>
        <div className="md:flex hidden mr-5">
          <Image
            src={"/images/Hero.png"}
            alt={"Hero Image"}
            width={500}
            height={500}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

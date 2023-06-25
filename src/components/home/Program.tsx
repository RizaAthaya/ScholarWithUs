import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import ProgramCard from "./ProgramCard";

export default function Program() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1400px)" });
  const isSmallScreen2 = useMediaQuery({ query: "(max-width: 900px)" });
  return (
    <>
      <Swiper
        slidesPerView={isSmallScreen ? (isSmallScreen2 ? 1 : 2) : 3}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper text-black"
      >
        <SwiperSlide>
          <div className="min-h-[150px]">
            <ProgramCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[150px]">
            <ProgramCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[150px]">
            <ProgramCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[150px]">
            <ProgramCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[150px]">
            <ProgramCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[150px]">
            <ProgramCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[150px]">
            <ProgramCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[150px]">
            <ProgramCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[150px]">
            <ProgramCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[150px]">
            <ProgramCard />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import React, { useCallback, useRef } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

//icons
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

//utils
import { data } from "./datas";
import MentorCard from "./MentorCard";

const Mentor = () => {
  const sliderRef = useRef<SwiperRef>();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="my-8">
      <h3 className="my-8 text-black text-center font-bold text-3xl  ">Kami Hadir Bersama Mentor-Mentor yang Berpengalaman</h3>
      <button onClick={handlePrev}>
        <HiChevronLeft />
      </button>
      <Swiper
        // ref={sliderRef}
        effect="coverflow"
        initialSlide={3}
        grabCursor
        centeredSlides
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        spaceBetween={20}
        modules={[EffectCoverflow, Pagination, Navigation]}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="swiper_container"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index} className="w-[50%] h-fit" style={{width: 'fit-content'}}>
              <MentorCard
                mentor={item.mentor}
                name={item.name}
                scholar_history={item.scholar_history}
                study_track={item.study_track}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button onClick={handleNext}>
        <HiChevronRight />
      </button>
    </div>
  );
};

export default Mentor;

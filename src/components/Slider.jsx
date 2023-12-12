import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SliderImg } from "../data/data";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mb-5">
      {SliderImg?.map((e) => {
        return (
          <SwiperSlide key={e.id}>
            <img src={e.img} alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;

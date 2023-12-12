import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProductSwiper = (props) => {
  console.log(props);
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
      <SwiperSlide>
        {props?.map((e) => {
          return <img className="w-56" src={""} alt="" />;
        })}
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductSwiper;

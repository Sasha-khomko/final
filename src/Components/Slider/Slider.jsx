import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as Photo } from "../../assets/img/photo_1.svg";

import  Photo1 from "../../assets/img/collection1.jpg";
import  Photo2  from "../../assets/img/collection3.jpg";
import  Photo3  from "../../assets/img/photo1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { CatalogButton } from "../Catalog/CatalogButton";

export default function App() {
  return (
    <>
      <div className="block_title">
        <div className="wrapper_title">
          <h1>на этот сезон</h1>
          <h2>на этот сезон</h2>
        </div>
      </div>
      <div className="slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="wrapper">
            <p>
              Текст описания конкретной коллекции с возможным дополнением
              уникальности
            </p>
            <CatalogButton className="button" />
          </div>
          <SwiperSlide className="block">
            <Photo />
          </SwiperSlide>
          <SwiperSlide>
            <Photo />
          </SwiperSlide>
          <SwiperSlide>
            <Photo />
          </SwiperSlide>
          <SwiperSlide>
            <Photo />
          </SwiperSlide>
          <SwiperSlide>
            <Photo />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

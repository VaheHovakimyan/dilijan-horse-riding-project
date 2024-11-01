'use client'


import React from "react";
import style from "./PartnerHome.module.scss";
import mediaStyle from './PartnerHomeMedia.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

const sliderParams = {
  slidesPerView: 5,
  spaceBetween: 40,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    560: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    990: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
}

export const PartnerHome = ({ }: {}) => {

  return (
    <div className={`${style.partner_home_main_flex} ${mediaStyle.partner_home_main_flex}`}>
      <div className={`${style.partner_home_main} ${mediaStyle.partner_home_main}`}>
        <Swiper
          modules={[Autoplay, Pagination]}
          {...sliderParams}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
          }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img src={'https://www.doublecoconut.com/assets/images/Logo.webp'} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={'https://www.digitain.com/wp-content/uploads/2024/06/cropped-Digitain_Horizontal_Header-1.png'} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={'https://www.doublecoconut.com/assets/images/Logo.webp'} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={'https://www.digitain.com/wp-content/uploads/2024/06/cropped-Digitain_Horizontal_Header-1.png'} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={'https://www.doublecoconut.com/assets/images/Logo.webp'} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={'https://www.doublecoconut.com/assets/images/Logo.webp'} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={'https://static.springbuilder.site/fs/userFiles-v2/softconstruct-18748504/images/logo.svg?v=1699961894'} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={'https://www.doublecoconut.com/assets/images/Logo.webp'} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={'https://static.springbuilder.site/fs/userFiles-v2/softconstruct-18748504/images/logo.svg?v=1699961894'} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
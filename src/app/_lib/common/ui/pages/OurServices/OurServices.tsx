'use client'

import React from "react";
import PageTitleComponent from "../../shared/PageTitleComponent/PageTitleComponent";
import style from './OurServices.module.scss';
import mediaStyle from './OurServicesMedia.module.scss';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import horse_image from '../../assets/images/horse_image.jpg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


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

export const OurServicesPage = ({ }: {}) => {

  const swiper = useSwiper();

  return (
    <section className={`${style.our_services} ${mediaStyle.our_services}`}>
      <PageTitleComponent title={"Our Services"} />
      <div className={`${style.our_services_description_div} ${mediaStyle.our_services_description_div}`}>
        <p  className={`${style.our_services_description} ${mediaStyle.our_services_description}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laborum perferendis provident esse dolor temporibus similique nostrum id, corrupti, numquam odit illo? Omnis voluptatem, perspiciatis delectus quam voluptatibus quo magnam.
          Tenetur magnam sed velit corporis. Vel placeat quas dolor aliquam vero deserunt cupiditate ut minima earum modi! Sit, expedita vero quia nulla, dolores dolorem quod quis veritatis pariatur, odit provident.
          Placeat laboriosam unde nobis dolores officia! Facilis voluptatum eum perspiciatis est, consequuntur, culpa libero ipsum voluptas similique qui sit corporis non repellendus aliquid in sapiente tempora vero, ullam accusantium maxime?
          Eos neque veniam quod similique placeat minima ex, dicta harum iusto, ullam consequatur maxime incidunt! Harum fuga omnis unde minima explicabo saepe cupiditate, ea quidem fugiat. Aspernatur doloremque eos cum?
          Corrupti animi numquam magni atque illo ipsum ratione odio repudiandae eaque aperiam sit temporibus eum veniam obcaecati doloribus dicta, esse, voluptatibus harum. Esse dicta saepe, nesciunt voluptatum reiciendis asperiores exercitationem.
          Dolores optio natus odit velit labore maxime tempore, temporibus doloremque! Itaque ab iste similique recusandae, voluptas, consequatur minima provident quidem iure cum aliquam alias eligendi assumenda. Incidunt eos laborum magni?
          Illo perferendis laudantium quos aperiam maxime quaerat est sequi, incidunt repellat nesciunt nihil, rem quisquam officiis unde exercitationem porro atque eaque? Ipsam earum sit ex velit iusto inventore amet officia?
        </p>
      </div>
      <div className={`${style.our_services_slider} ${mediaStyle.our_services_slider}`}>
        <Swiper
          navigation={{
            nextEl: '#swiper-button-next',
            prevEl: '#swiper-button-prev',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          {...sliderParams}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
          }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <div className={`${style.our_services_slider_btns} ${mediaStyle.our_services_slider_btns}`}>
            <div id="swiper-button-prev" className={`${style.swiper_navigation_button} ${mediaStyle.swiper_navigation_button}`}>
              <ArrowForwardIosIcon style={{ transform: 'rotate(180deg)', color: "white" }} />
            </div>
            <div id="swiper-button-next" className={`${style.swiper_navigation_button} ${mediaStyle.swiper_navigation_button}`}>
              <ArrowForwardIosIcon style={{ color: "white" }} />
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default OurServicesPage;

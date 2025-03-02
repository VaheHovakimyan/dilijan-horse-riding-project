'use client';

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

interface IPartner {
  src: string;
  alt: string;
}

const partners: IPartner[] = [
  {
    src: 'https://www.digitain.com/wp-content/uploads/2024/06/cropped-Digitain_Horizontal_Header-1.png',
    alt: 'Digitain'
  },
  {
    src: 'https://static.springbuilder.site/fs/userFiles-v2/softconstruct-18748504/images/logo.svg?v=1699961894',
    alt: 'Softconstract'
  },
  {
    src: 'https://i.ibb.co/tb4Nw95/evoca-logo.png',
    alt: 'Evoca bank'
  },
  {
    src: 'https://static.ucraft.net/fs/ucraft/userFiles/fastbank/images/logo.svg?v=1667973119',
    alt: 'Fast bank'
  },
  {
    src: 'https://hover.am/img/316966433504f5e1.webp',
    alt: 'Hover hotel'
  },
  {
    src: 'https://www.acba.am/pics/acba_b_logo.png',
    alt: 'Acba bank'
  },
  {
    src: 'https://i.ibb.co/cxQd4rd/logo-new-3747198b.webp',
    alt: 'Ingo Armenia'
  }
];

export const PartnerHome = () => {

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
          style={{ height: '50px', alignItems: 'center' }}
        >
          {partners.map((item: IPartner, index: number) => {
            return (
              <SwiperSlide
                style={{height: '100%'}}
                key={index}
              >
                <img src={item.src} alt={item.alt} className={style.swiper_item_image} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  );
};
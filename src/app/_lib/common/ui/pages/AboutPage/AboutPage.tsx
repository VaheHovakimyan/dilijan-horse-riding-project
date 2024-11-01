'use client'

import React, { FC } from "react";
import style from "./AboutPage.module.scss";
import mediaStyle from './AboutPageMedia.module.scss';
import PageTitleComponent from "../../shared/PageTitleComponent/PageTitleComponent";
import { description } from "../../../../../../app/constants";
import about_image_1 from '../../assets/images/about/about_main.webp';


interface IAboutPage {
  data: any
}

const AboutPage: FC<IAboutPage> = ({ data }) => {

  // console.log(data);


  return (
    <div className={`${style.about_page} ${mediaStyle.about_page}`}>
      <PageTitleComponent title={"About us"} />

      <section className={`${style.about_page_content} ${mediaStyle.about_page_content}`}>
        <div className={`${style.about_page_image_text_div} ${mediaStyle.about_page_image_text_div}`}>
          <img src={about_image_1.src} alt="about_image" className={`${style.about_page_image} ${mediaStyle.about_page_image}`} />
          <div className={`${style.about_page_image_text} ${mediaStyle.about_page_image_text}`}>
            {description}
          </div>
        </div>

        <div className={`${style.about_page_image_text_div_second} ${mediaStyle.about_page_image_text_div_second}`}>
          <img src={about_image_1.src} alt="about_image" className={`${style.about_page_image} ${mediaStyle.about_page_image}`} />
          <div className={`${style.about_page_image_text} ${mediaStyle.about_page_image_text}`}>
            {description}
          </div>
        </div>

        <div className={`${style.about_page_video_div} ${mediaStyle.about_page_video_div}`}>
          <iframe
            width={"100%"}
            height={"500px"}
            src="https://www.youtube.com/embed/gJuOzCeEpy0?si=Ug07XE_X3YFCWCSo&amp;start=195"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className={`${style.about_page_video} ${mediaStyle.about_page_video}`}>
          </iframe>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;

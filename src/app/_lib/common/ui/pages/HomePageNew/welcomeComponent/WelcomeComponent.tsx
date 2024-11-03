
import React from "react";
import style from "./WelcomeComponent.module.scss";
import mediaStyle from './WelcomeComponentMedia.module.scss';
import NavigationLink from "@/app/_components/NavigationLink";

// const getData = async () => {
//   try {
//     const users = await fetch("http://localhost:5000/api/welcome");
//     const data = await users.json();
//     return data.welcome_data_am.welcome;
//   } catch (error) {
//     throw error;
//   }
// };


const WelcomeComponent = () => {


  return (
    <div className={`${style.welcome_main} ${mediaStyle.welcome_main}`}>
      <video
        loop
        autoPlay
        muted
        className={`${style.welcome_main_video} ${mediaStyle.welcome_main_video}`}
        width={200}
        height={1200}
        >
        <source src="/horse_video.mp4" />
      </video>
      <div className={`${style.welcome_main_opacity} ${mediaStyle.welcome_main_opacity}`}>
        <div className={`${style.welcome_content} ${mediaStyle.welcome_content}`}>
          <h1 className={`${style.welcome_content_title} ${mediaStyle.welcome_content_title}`}>Dilijan Horse Riding</h1>
          <p className={`${style.welcome_content_description} ${mediaStyle.welcome_content_description}`}>
            ՍԱՐԵՐ, ՁՈՐԵՐ ՈՒ ԼԻ՜ՔԸ ՍԵՐ
          </p>
          <NavigationLink href={"/#services"} className={`${style.welcome_content_btn_link} ${mediaStyle.welcome_content_btn_link}`}>
            <button className={`${style.welcome_content_btn} ${mediaStyle.welcome_content_btn}`}>Our services</button>
          </NavigationLink>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;

'use client'

import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";
import style from "./SloganHome.module.scss";
import mediaStyle from './SloganHomeMedia.module.scss';
// import {video} from 'public/horse_video.mp4';

export const SloganHome = () => {
  return (
    <div className={`${style.slogan_home_main} ${mediaStyle.slogan_home_main}`} style={{ paddingBottom: "700px" }}>
      <div className={`${style.slogan_home_opacity} ${mediaStyle.slogan_home_opacity}`}>
        
        <div className={`${style.slogan_home_slogan_laptop} ${mediaStyle.slogan_home_slogan_laptop}`}>
          <p className={`${style.slogan_home_slogan_laptop_p} ${mediaStyle.slogan_home_slogan_laptop_p}`}>text</p>
          <p className={`${style.slogan_home_slogan_laptop_p} ${mediaStyle.slogan_home_slogan_laptop_p}`}>text</p>
          <p className={`${style.slogan_home_slogan_laptop_p} ${mediaStyle.slogan_home_slogan_laptop_p}`}>text</p>
        </div>

        <h3 className={`${style.slogan_home_slogan} ${mediaStyle.slogan_home_slogan}`}>text text</h3>
      </div>

      {/* <video
        src={video}
        loop
        autoPlay
        muted
        className={`${style.slogan_home_video} ${mediaStyle.slogan_home_video}`}
      >
      </video> */}

      <video
        loop
        autoPlay
        muted
        className={`${style.slogan_home_video} ${mediaStyle.slogan_home_video}`}>
        <source src="/horse_video.mp4" />
      </video>
    </div>
  );
};

export default SloganHome;
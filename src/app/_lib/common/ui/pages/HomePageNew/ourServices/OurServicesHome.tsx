'use client'

import style from "./OurServicesHome.module.scss";
import mediaStyle from './OurServicesHomeMedia.module.scss';
import servicesImage from "../../../assets/images/home_main_background.jpg";

const ourServices = [
  {
    id: Math.random(),
    image: servicesImage.src,
    title: "Horse Riding",
  },
  {
    id: Math.random(),
    image: servicesImage.src,
    title: "Jeeping",
  },
  {
    id: Math.random(),
    image: servicesImage.src,
    title: "Teambuilding",
  },
  {
    id: Math.random(),
    image: servicesImage.src,
    title: "Photoshoot",
  },
  {
    id: Math.random(),
    image: servicesImage.src,
    title: "Camping",
  },
  {
    id: Math.random(),
    image: servicesImage.src,
    title: "Quadro tours",
  },
];

export const OurServicesHome = () => {



  return (
    <div className={`${style.our_services_home_main} ${mediaStyle.our_services_home_main}`} id="services">
      <h3 className={`${style.our_services_home_title} ${mediaStyle.our_services_home_title}`}>Our Services</h3>
      <div className={`${style.our_services_home_flex} ${mediaStyle.our_services_home_flex}`}>
        {ourServices?.map((item: any, index:number) => {
          
          return (
            <div key={index} className={`${style.our_services_home_item} ${mediaStyle.our_services_home_item}`}>
              <div className={`${style.our_services_home_item_opacity} ${mediaStyle.our_services_home_item_opacity}`} style={{ backgroundImage: `url(${item.image})` }} >
                <div className={`${style.our_services_home_item_p_center} ${mediaStyle.our_services_home_item_p_center}`}>
                  <p className={`${style.our_services_home_item_p} ${mediaStyle.our_services_home_item_p}`}>{item.name}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default OurServicesHome;
import style from "./OurServicesHome.module.scss";
import mediaStyle from './OurServicesHomeMedia.module.scss';
import { useTranslations } from "next-intl";


const ourServices: string[] = [
  "services.horseriding",
  "services.jeeping",
  "services.teambuilding",
  "services.photoshoot",
  "services.camping",
  "services.quadricycle",
];

const OurServicesHome = () => {
  const t = useTranslations("OurServices");

  return (
    <div className={`${style.our_services_home_main} ${mediaStyle.our_services_home_main}`} id="services">
      <h3 className={`${style.our_services_home_title} ${mediaStyle.our_services_home_title}`}>{t('title')}</h3>
      <div className={`${style.our_services_home_flex} ${mediaStyle.our_services_home_flex}`}>
        {ourServices?.map((item: any, index: number) => {
          
          return (
            <div key={index} className={`${style.our_services_home_item} ${mediaStyle.our_services_home_item}`}>
              <div className={`${style.our_services_home_item_opacity} ${mediaStyle.our_services_home_item_opacity}`} style={{ backgroundImage: `url(${t(`${item}.image`)})` }} >
                <div className={`${style.our_services_home_item_p_center} ${mediaStyle.our_services_home_item_p_center}`}>
                  <p className={`${style.our_services_home_item_p} ${mediaStyle.our_services_home_item_p}`}>{t(`${item}.name`)}</p>
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
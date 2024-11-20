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
      <p className={`${style.our_services_home_title} ${mediaStyle.our_services_home_title}`}>{t('title')}</p>
      <div className={`${style.our_services_home_flex} ${mediaStyle.our_services_home_flex}`}>
        {ourServices?.map((item: any, index: number) => {

          return (
            <div
              className={`${style.our_services_home_item} ${mediaStyle.our_services_home_item}`}
              style={{ flexDirection: index % 2 === 0 ? 'row' : "row-reverse" }}
              key={index}
            >
              <div className={`${style.our_services_home_item_opacity} ${mediaStyle.our_services_home_item_opacity}`} style={{ backgroundImage: `url(${t(`${item}.image`)})` }} >
                <div className={`${style.our_services_home_item_p_center} ${mediaStyle.our_services_home_item_p_center}`}></div>
              </div>
              <div className={`${style.our_services_home_item_description_div} ${mediaStyle.our_services_home_item_description_div}`}>
                <h2 className={`${style.our_services_home_item_description_title} ${mediaStyle.our_services_home_item_description_title}`}>{t(`${item}.name`)}</h2>
                <p className={`${style.our_services_home_item_description_p} ${mediaStyle.our_services_home_item_description_p}`}>{t(`${item}.description`)}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default OurServicesHome;
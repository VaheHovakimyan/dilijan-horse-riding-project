import React from "react";
import Image from "next/image";

import style from "./Footer.module.scss";
import mediaStyle from './FooterMedia.module.scss';

import footer_logo from '../../assets/images/header_logo_footer.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useTranslations } from "next-intl";

export const Footer = ({ }: {}) => {

  const t = useTranslations("Footer");


  return (
    <div className={`${style.footer_main} ${mediaStyle.footer_main}`}>
      <div className={`${style.footer_main_flex} ${mediaStyle.footer_main_flex}`}>
        <div className={`${style.footer_logo_social_flex} ${mediaStyle.footer_logo_social_flex}`}>
          <Image
            src={footer_logo}
            width={165}
            height={70}
            alt="header logo"
            className={style.footer_logo}
          />
          <div className={`${style.footer_social_div} ${mediaStyle.footer_social_div}`}>
            <div className={`${style.footer_social_contacts_div} ${mediaStyle.footer_social_contacts_div}`}>
              <p className={`${style.footer_social_contact} ${mediaStyle.footer_social_contact}`}>{t('contacts.telephone')}</p>
              <p className={`${style.footer_social_contact} ${mediaStyle.footer_social_contact}`}>{t('contacts.address')}</p>
              <p className={`${style.footer_social_contact} ${mediaStyle.footer_social_contact}`}>{t('contacts.email')}</p>
            </div>
            <div className={`${style.footer_social_icons_div} ${mediaStyle.footer_social_icons_div}`}>
              <a
                href="https://www.facebook.com/dilijanhorseriding/"
                className={style.footer_social_icon_link}
                aria-label="Facebook"
                target="_blank"
              >
                <FacebookIcon className={`${style.footer_social_icon} ${mediaStyle.footer_social_icon}`} />
              </a>
              <a
                href="https://www.instagram.com/dilijan_horseriding/"
                className={style.footer_social_icon_link}
                aria-label="Instagram"
                target="_blank"
              >
                <InstagramIcon className={`${style.footer_social_icon} ${mediaStyle.footer_social_icon}`} />
              </a>
              <a
                href="#"
                className={style.footer_social_icon_link}
                aria-label="Telegram"
                target="_blank"
              >
                <TelegramIcon className={`${style.footer_social_icon} ${mediaStyle.footer_social_icon}`} />
              </a>
            </div>
          </div>
        </div>
        <div className={`${style.footer_mid_div_flex} ${mediaStyle.footer_mid_div_flex}`}>
          <h3 className={`${style.footer_mid_div_title} ${mediaStyle.footer_mid_div_title}`}>{t('FooterDescription.title')}</h3>
          <div>
            <p className={`${style.footer_mid_div_text} ${mediaStyle.footer_mid_div_text}`}>
              {t('FooterDescription.description')}
            </p>
            <p className={`${style.footer_slogan} ${mediaStyle.footer_slogan}`}>
              {t('FooterDescription.slogan')}
            </p>
          </div>
        </div>
        <div className={`${style.footer_map_div} ${mediaStyle.footer_map_div}`}>
          <p className={`${style.footer_map_title} ${mediaStyle.footer_map_title}`}>
            {t('mapTitle')}
          </p>
          <div className={`${style.footer_map} ${mediaStyle.footer_map}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.415777499316!2d44.97570177550167!3d40.77487263376502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404055567b9935e5%3A0x17606dbcb9a0e871!2sDilijan%20Horse%20riding!5e0!3m2!1sru!2sam!4v1720170929648!5m2!1sru!2sam"
              title="Footer map"
              width={'100%'}
              height={'100%'}
              style={{ border: 0 }}
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
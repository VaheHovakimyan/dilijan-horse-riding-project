import NavigationLink from "@/app/_components/NavigationLink";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/app/_components/LocaleSwitcher";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import header_logo from '../../assets/images/header_logo.png';

import style from "./Header.module.scss";
import mediaStyle from './HeaderMedia.module.scss';
import Image from "next/image";


const Header = () => {

  const t = useTranslations("PathnamesPage");

  return (
    <div className={`${style.header} ${mediaStyle.header}`}>
      <header>

        <div className={`${style.header_flex} ${mediaStyle.header_flex}`}>
          <div className={`${style.header_content} ${mediaStyle.header_content}`}>

            <NavigationLink href={"/"}>
              <Image
                src={header_logo}
                width={205}
                height={90}
                alt="header logo"
                className={`${style.header_logo} ${mediaStyle.header_logo}`}
              />
            </NavigationLink>

            <div className={`${style.routes_accordion} ${mediaStyle.routes_accordion}`}>
              <nav>
                <div className={`${style.routes_div_accordion} ${mediaStyle.routes_div_accordion}`}>
                  <NavigationLink href={"/"} className={style.header_nav_link}>
                    <p className={style.header_nav_link_text}>{t("home")}</p>
                  </NavigationLink>
                  <NavigationLink href={"/#services"} className={style.header_nav_link}>
                    <p className={style.header_nav_link_text}>{t("services")}</p>
                  </NavigationLink>
                  <NavigationLink href={"/gallery"} className={style.header_nav_link}>
                    <p className={style.header_nav_link_text}>{t("gallery")}</p>
                  </NavigationLink>
                  <NavigationLink href={"/about"} className={style.header_nav_link}>
                    <p className={style.header_nav_link_text}>{t("about")}</p>
                  </NavigationLink>
                </div>
              </nav>
            </div>

            <div className={`${style.header_contact_lang} ${mediaStyle.header_contact_lang}`}>
              <LocaleSwitcher />
              <div className={`${style.header_contact} ${mediaStyle.header_contact}`}>
                <a href="https://www.facebook.com/dilijanhorseriding/" target="_blank" className={style.header_social_icon_link}>
                  <FacebookIcon className={`${style.header_social_icon} ${mediaStyle.header_social_icon}`} />
                </a>
                <a href="https://www.instagram.com/dilijan_horseriding/" target="_blank" className={style.header_social_icon_link}>
                  <InstagramIcon className={`${style.header_social_icon} ${mediaStyle.header_social_icon}`} />
                </a>
                <a href="#" target="_blank" className={style.header_social_icon_link}>
                  <TelegramIcon className={`${style.header_social_icon} ${mediaStyle.header_social_icon}`} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;
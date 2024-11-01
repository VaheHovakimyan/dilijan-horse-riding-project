// 'use client';
import NavigationLink from "@/app/_components/NavigationLink";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/app/_components/LocaleSwitcher";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import header_logo from '../../_lib/common/ui/assets/images/header_logo.png';

import style from "./Header.module.scss";
import mediaStyle from './HeaderMedia.module.scss';
import Link from "next/link";
import Image from "next/image";
import Burger from "@/app/_lib/common/ui/shared/Burger/Burger";
import Sidebar from "@/app/_lib/common/ui/shared/Sidebar/Sidebar";



const Header = () => {
  // const [burgerBool, setBurgerBool] = useState<boolean>(false);


  const t = useTranslations("PathnamesPage");

  return (
    <div className={`${style.header} ${mediaStyle.header}`}>
      <header>

        <Sidebar />

        <div className={`${style.header_flex} ${mediaStyle.header_flex}`}>
          <div className={`${style.header_content} ${mediaStyle.header_content}`}>

            <NavigationLink href={"/"} className={style.header_nav_link}>
              <Image
                src={header_logo}
                width={205}
                height={90}
                alt="header logo"
              />
            </NavigationLink>

            <nav>
              <div className={`${style.routes_div} ${mediaStyle.routes_div}`}>
                <NavigationLink href={"/"} className={style.header_nav_link}><p>{t("home")}</p></NavigationLink>
                <a href={"#services"} className={style.header_nav_link}><p>{t("services")}</p></a>
                <NavigationLink href={"/gallery"} className={style.header_nav_link}><p>{t("gallery")}</p></NavigationLink>
                <NavigationLink href={"/about"} className={style.header_nav_link}><p>{t("about")}</p></NavigationLink>
              </div>
            </nav>

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

            <Burger />

          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// import style from "./Header.module.scss";
// import mediaStyle from './HeaderMedia.module.scss';

import header_logo from '../../assets/images/header_logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import Link from "next/link";



export const Header = ({ }: {}) => {

  // const [burgerBool, setBurgerBool] = useState<boolean>(false);

  // useEffect(() => {
  //   if (burgerBool) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }

  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [burgerBool]);

  return (
    <>
    {/* <div className={`${style.header} ${mediaStyle.header}`}> */}
      {/* <header> */}

        {/* <div
          className={style.header_sidebar_opacity}
          style={{
            transform: `translateX(${burgerBool ? '0%' : '100%'})`,
            display: `${burgerBool ? 'block' : 'none'}`,
          }}
          onClick={() => setBurgerBool(!burgerBool)}
        ></div>

        <div
          className={style.header_sidebar}
          style={{ transform: `translateX(${burgerBool ? '0%' : '100%'})` }}
        >
          <div className={style.header_sidebar_logo_routes}>
            <div className={style.header_sidebar_logo_close}>
              <Image
                src={header_logo}
                width={182}
                height={80}
                style={{ scale: 1.1 }}
                alt="header logo"
              />
              <CloseIcon onClick={() => setBurgerBool(!burgerBool)} />
            </div>
            <nav>
              <div className={`${style.header_sidebar_routes_div} ${mediaStyle.header_sidebar_routes_div}`}>
                <Link href={"/"} className={style.header_nav_link} onClick={() => setBurgerBool(!burgerBool)}>
                  <span className={style.header_nav_link_text}>Home</span>
                </Link>
                <a href="#services" className={style.header_nav_link} onClick={() => setBurgerBool(!burgerBool)}>
                  <span className={style.header_nav_link_text}>Our Services</span>
                </a>
                <Link href={"/gallery"} className={style.header_nav_link} onClick={() => setBurgerBool(!burgerBool)}>
                  <span className={style.header_nav_link_text}>Gallery</span>
                </Link>
                <Link href={"/about"} className={style.header_nav_link} onClick={() => setBurgerBool(!burgerBool)}>
                  <span className={style.header_nav_link_text}>About us</span>
                </Link>
                <select name="lang" id="lang" onChange={(event) => {
                   console.log(+event.target.value);
                }} className={`${style.header_lang} ${mediaStyle.header_lang}`}>
                  <option value={1} className={style.header_lang_option}>🇦🇲&emsp;AM</option>
                  <option value={2} className={style.header_lang_option}>🇷🇺&emsp;RU</option>
                  <option value={3} className={style.header_lang_option}>🇬🇧&emsp;EN</option>
                </select>
              </div>
            </nav>
          </div>

           <div className={`${style.header_contact_lang} ${mediaStyle.header_contact_lang}`}>
            <select value={lang} name="lang" id="lang" onChange={(event) => {
              setLang(+event.target.value);
            }} className={`${style.header_lang} ${mediaStyle.header_lang}`}>
              <option value={1} className={style.header_lang_option}>🇦🇲&emsp;AM</option>
              <option value={2} className={style.header_lang_option}>🇷🇺&emsp;RU</option>
              <option value={3} className={style.header_lang_option}>🇬🇧&emsp;EN</option>
            </select>
          </div>

          <div className={`${style.header_contact_lang} ${mediaStyle.header_contact_lang}`}>
            <div className={style.header_contact}>
              <a href="https://www.facebook.com/dilijanhorseriding/" target="_blank" className={style.header_contact_link}>
                <FacebookIcon className={style.header_social_icon} />
              </a>
              <a href="https://www.instagram.com/dilijan_horseriding/" target="_blank" className={style.header_contact_link}>
                <InstagramIcon className={style.header_social_icon} />
              </a>
              <a href="#" target="_blank" className={style.header_contact_link}>
                <TelegramIcon className={style.header_social_icon} />
              </a>
            </div>
          </div>
        </div> */}


        {/* <div className={`${style.header_flex} ${mediaStyle.header_flex}`}>
          <div className={`${style.header_content} ${mediaStyle.header_content}`}>
            <Link href={"/"} className={style.header_nav_link}>
              <Image
                src={header_logo}
                width={205}
                height={90}
                alt="header logo"
              />
            </Link> */}
            {/* <nav>
              <div className={`${style.routes_div} ${mediaStyle.routes_div}`}>
                <Link href={"/"} className={style.header_nav_link}><p>Home</p></Link>
                <Link href={"/en#services"} className={style.header_nav_link}><p>Our Services</p></Link>
                <Link href={"/gallery"} className={style.header_nav_link}><p>Gallery</p></Link>
                <Link href={"/about"} className={style.header_nav_link}><p>About us</p></Link>
              </div>
            </nav> */}

            {/* <div className={`${style.header_contact_lang} ${mediaStyle.header_contact_lang}`}> */}
              {/* <select name="lang" id="lang" onChange={(event) => {
               console.log(+event.target.value);
              }} className={`${style.header_lang} ${mediaStyle.header_lang}`}>
                <option value={1} className={style.header_lang_option}>🇦🇲&emsp;AM</option>
                <option value={2} className={style.header_lang_option}>🇷🇺&emsp;RU</option>
                <option value={3} className={style.header_lang_option}>🇬🇧&emsp;EN</option>
              </select> */}

              {/* <div className={`${style.header_contact} ${mediaStyle.header_contact}`}>
                <a href="https://www.facebook.com/dilijanhorseriding/" target="_blank" className={style.header_social_icon_link}>
                  <FacebookIcon className={`${style.header_social_icon} ${mediaStyle.header_social_icon}`} />
                </a>
                <a href="https://www.instagram.com/dilijan_horseriding/" target="_blank" className={style.header_social_icon_link}>
                  <InstagramIcon className={`${style.header_social_icon} ${mediaStyle.header_social_icon}`} />
                </a>
                <a href="#" target="_blank" className={style.header_social_icon_link}>
                  <TelegramIcon className={`${style.header_social_icon} ${mediaStyle.header_social_icon}`} />
                </a>
              </div> */}
            {/* </div> */}


            {/* <MenuIcon
              className={`${style.header_burger_icon} ${mediaStyle.header_burger_icon}`}
              onClick={() => setBurgerBool(!burgerBool)}
            /> */}
          {/* </div>
        </div> */}
      {/* </header > */}
    {/* </div> */}
    </>
  );
};

export default Header;
'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

import header_logo from '../../assets/images/header_logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import Link from "next/link";

import style from "./Header.module.scss";
import mediaStyle from './HeaderMedia.module.scss';
import LocaleSwitcher from "@/app/_components/LocaleSwitcher";
import NavigationLink from "@/app/_components/NavigationLink";

const Sidebar = ({ }: {}) => {

  const [burgerBool, setBurgerBool] = useState<boolean | string | null>(!!window.localStorage.getItem("burgerBool"));

  // useEffect(() => {
  //   if(window.localStorage.getItem("burgerBool")){
  //     window.localStorage.setItem("burgerBool", `${true}`);
  //     console.log("useEffect");
  //   }
  // }, []);

  const setBurgerBoolFunc = () => {
    setBurgerBool(burgerBool);
    console.log("burgerBool in Func", burgerBool);

    window.localStorage.setItem("burgerBool", `${burgerBool}`);
  }

  // const burgerBool = !window.localStorage.getItem("burgerBool");

  useEffect(() => {
    if (burgerBool) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = 'auto';
    }

    console.log('Sidebar locale', !!window.localStorage.getItem("burgerBool"));
    console.log("useEffect burgerBool", burgerBool);


    // if(!window.localStorage.getItem("burgerBool")){
    //   window.localStorage.setItem("burgerBool", `false`);
    // }

    return () => {
      window.document.body.style.overflow = 'auto';
    };
  }, [burgerBool, setBurgerBool, window.localStorage]);

  // console.log("Sidebar", burgerBool);

  return (
    <>
      <div
        className={style.header_sidebar_opacity}
        style={{
          transform: `translateX(${burgerBool ? '0%' : '100%'})`,
          display: `${burgerBool ? 'block' : 'none'}`,
        }}
        onClick={() => setBurgerBoolFunc()}
      ></div>

      {burgerBool === true ? <h1 style={{ fontSize: "30px" }}>true</h1> : <h1 style={{ fontSize: "30px" }}>false</h1>}


      <div
        className={style.header_sidebar}
        style={{
          transform: `translateX(${burgerBool ? '0%' : '100%'})`,
          display: `${burgerBool ? 'block' : 'none'}`,
        }}
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
            <CloseIcon onClick={() => setBurgerBool(false)} />
          </div>
          <nav>
            <div className={`${style.header_sidebar_routes_div} ${mediaStyle.header_sidebar_routes_div}`}>
              <NavigationLink href={"/"} className={style.header_nav_link} onClick={() => setBurgerBool(!burgerBool)}>
                <span className={style.header_nav_link_text}>Home</span>
              </NavigationLink>
              <a href="#services" className={style.header_nav_link} onClick={() => setBurgerBool(!burgerBool)}>
                <span className={style.header_nav_link_text}>Our Services</span>
              </a>
              <NavigationLink href={"/gallery"} className={style.header_nav_link} onClick={() => setBurgerBool(!burgerBool)}>
                <span className={style.header_nav_link_text}>Gallery</span>
              </NavigationLink>
              <NavigationLink href={"/about"} className={style.header_nav_link} onClick={() => setBurgerBool(!burgerBool)}>
                <span className={style.header_nav_link_text}>About us</span>
              </NavigationLink>
              {/* <select name="lang" id="lang" onChange={(event) => {
                console.log(+event.target.value);
              }} className={`${style.header_lang} ${mediaStyle.header_lang}`}>
                <option value={1} className={style.header_lang_option}>🇦🇲&emsp;AM</option>
                <option value={2} className={style.header_lang_option}>🇷🇺&emsp;RU</option>
                <option value={3} className={style.header_lang_option}>🇬🇧&emsp;EN</option>
              </select> */}
            </div>
          </nav>
        </div>

        {/* <LocaleSwitcher /> */}


        {/* <div className={`${style.header_contact_lang} ${mediaStyle.header_contact_lang}`}> */}
        {/* <select value={lang} name="lang" id="lang" onChange={(event) => {
              setLang(+event.target.value);
            }} className={`${style.header_lang} ${mediaStyle.header_lang}`}>
              <option value={1} className={style.header_lang_option}>🇦🇲&emsp;AM</option>
              <option value={2} className={style.header_lang_option}>🇷🇺&emsp;RU</option>
              <option value={3} className={style.header_lang_option}>🇬🇧&emsp;EN</option>
            </select> */}
        {/* </div> */}

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
      </div>
    </>
  )
}

export default Sidebar;
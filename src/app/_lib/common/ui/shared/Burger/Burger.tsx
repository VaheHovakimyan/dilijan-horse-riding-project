'use client';

import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

import style from "./Header.module.scss";
import mediaStyle from './HeaderMedia.module.scss';

const Burger = ({ }: {}) => {

  const [burgerBool, setBurgerBool] = useState<boolean | string | null>(!!window.localStorage.getItem("burgerBool"));

  useEffect(() => {
    if (window.localStorage.getItem("burgerBool") == null) {
      console.log("LocalStorage is null")
      window.localStorage.setItem("burgerBool", `${true}`);
    } else {
      window.localStorage.setItem("burgerBool", `${burgerBool}`);
    }

    setBurgerBool(window.localStorage.getItem("burgerBool"));
    console.log("BurgerComp locale", window.localStorage.getItem("burgerBool"));


  }, [window.localStorage, burgerBool, setBurgerBool]);

  const setBurgerBoolFunc = () => {
    window.localStorage.setItem("burgerBool", `${burgerBool}`);
  }

  return (
    <MenuIcon
      className={`${style.header_burger_icon} ${mediaStyle.header_burger_icon}`}
      onClick={() => setBurgerBoolFunc()}
    />
  )
}


export default Burger;
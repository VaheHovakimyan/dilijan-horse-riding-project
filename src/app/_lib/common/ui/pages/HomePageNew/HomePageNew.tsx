"use client";

import React, { FC, useContext } from "react";
import "../../scss/index.scss";
import WelcomeComponent from "./welcomeComponent/WelcomeComponent";
import OurServicesHome from "./ourServices/OurServicesHome";
import SloganHome from "./sloganHome/SloganHome";
import GalleryHome from "./galleryHome/GalleryHome";
import { PartnerHome } from "./partnerHome/PartnerHome";

interface IHomePageNew {
  data: any
}

const welcome_data_en = {
  welcome: {
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repellendus non culpa perspiciatis ad id ab. Sint error
    inventore possimus? Enim ducimus fugit ratione eius a
    facilis totam voluptas sint esse?`,
    services: "Our Services"
  },
  services: {
    title: "Our Services",
    serviceItems: [
      {
        name: "Horse Riding",
        image: "https://i.ibb.co/PDh6Zh0/IMG-6693-2-2.webp",
      },
      {
        name: "Jeeping",
        image: "https://i.ibb.co/mTrTBpT/IMG-6899-2.webp",
      },
      {
        name: "Teambuilding",
        image: "https://i.ibb.co/mC7xk33/IMG-2154-2.webp",
      },
      {
        name: "Photoshoot",
        image: "https://i.ibb.co/qM2bxDS/Screenshot-254.webp",
      },
      {
        name: "Camping",
        image: "https://i.ibb.co/j30VSmk/IMG-5685-1.webp",
      },
      {
        name: "Quadro tours",
        image: "https://i.ibb.co/dMjjQx8/Screenshot-255.webp",
      },
    ]
  },
  sloganHome:{
    title: "MOUNTAINS, VALLEYS AND LOTS OF LOVE!",
    sloganLaptop: {
      first: "MOUNTAINS,",
      second: " VALLEYS",
      third: " AND LOTS OF LOVE!",
    }
  }
}

const welcome_data_ru = {
  welcome: {
    description: `Русский Русский Русский Русский Русский Русский Русский
   Русский Русский Русский Русский Русский Русский Русский Русский 
   Русский Русский Русский Русский Русский `,
    services: "Наши услуги"
  },
  services: {
    title: "Наши услуги",
    serviceItems: [
      {
        name: "Верховая езда",
        image: "https://i.ibb.co/PDh6Zh0/IMG-6693-2-2.webp",
      },
      {
        name: "Джиппинг",
        image: "https://i.ibb.co/mTrTBpT/IMG-6899-2.webp",
      },
      {
        name: "Тимбилдинг",
        image: "https://i.ibb.co/mC7xk33/IMG-2154-2.webp",
      },
      {
        name: "Фотосессия",
        image: "https://i.ibb.co/qM2bxDS/Screenshot-254.webp",
      },
      {
        name: "Кемпинг",
        image: "https://i.ibb.co/j30VSmk/IMG-5685-1.webp",
      },
      {
        name: "Квадротуры",
        image: "https://i.ibb.co/dMjjQx8/Screenshot-255.webp",
      },
    ]
  },
  sloganHome:{
    title: "ГОРЫ, ДОЛИНЫ И МНОГО ЛЮБВИ!",
    sloganLaptop: {
      first: "ГОРЫ,",
      second: " ДОЛИНЫ",
      third: " И МНОГО ЛЮБВИ!",
    }
  }
}

const welcome_data_am = {
  welcome: {
    description: `Հայերեն Հայերեն Հայերեն Հայերեն Հայերեն Հայերեն Հայերեն
   Հայերեն Հայերեն Հայերեն Հայերեն Հայերեն Հայերեն Հայերեն Հայերեն 
   Հայերեն Հայերեն Հայերեն Հայերեն Հայերեն`,
    services: "Մեր ծառայությունները"
  },
  services: {
    title: "Մեր ծառայությունները",
    serviceItems: [
      {
        name: "Ձիավարություն",
        image: "https://i.ibb.co/PDh6Zh0/IMG-6693-2-2.webp",
      },
      {
        name: "Ջիփինգ",
        image: "https://i.ibb.co/mTrTBpT/IMG-6899-2.webp",
      },
      {
        name: "Թիմբիլդինգ",
        image: "https://i.ibb.co/mC7xk33/IMG-2154-2.webp",
      },
      {
        name: "Ֆոտոշարք",
        image: "https://i.ibb.co/qM2bxDS/Screenshot-254.webp",
      },
      {
        name: "Արշավ",
        image: "https://i.ibb.co/j30VSmk/IMG-5685-1.webp",
      },
      {
        name: "Quadro տուրեր",
        image: "https://i.ibb.co/dMjjQx8/Screenshot-255.webp",
      },
    ]
  },
  sloganHome:{
    title: "ՍԱՐԵՐ, ՁՈՐԵՐ ՈՒ ԼԻ՜ՔԸ ՍԵՐ",
    sloganLaptop: {
      first: "ՍԱՐԵՐ,",
      second: " ՁՈՐԵՐ",
      third: " ՈՒ ԼԻ՜ՔԸ ՍԵՐ",
    }
  }
}

// export const LangContext = createContext({lang: 1});

const HomePageNew: FC<IHomePageNew> = ({ data }) => {

  // let data_lang;

  // switch (lang) {
  //   case 1:
  //     data_lang = welcome_data_am;
  //     break;
  //   case 2:
  //     data_lang = welcome_data_ru;
  //     break;
  //   case 3:
  //     data_lang = welcome_data_en;
  //     break;
  //   default:
  //     console.error("Error with language");
  //     break;
  // }


  return (
    <>
      <WelcomeComponent />

      <OurServicesHome />

      <SloganHome />

      <GalleryHome />

      <PartnerHome />
    </>
  );
};

export default HomePageNew;

'use client'

import React from "react";
import style from "./GalleryHome.module.scss";
import mediaStyle from './GalleryHomeMedia.module.scss';
import Link from "next/link";

const arr: number[] = [0, 1, 2];

export const GalleryHome = ({ }: {}) => {

  return (
    <Link href={"/gallery"}>
    <div className={`${style.gallery_home_main} ${mediaStyle.gallery_home_main}`}>
      <div className={`${style.gallery_home} ${mediaStyle.gallery_home}`}>

        <div className={`${style.gallery_home_main_1} ${mediaStyle.gallery_home_main_1}`}>
          {arr.map((item: number) => {
            return (
              <div className={`${style.gallery_home_main_item} ${mediaStyle.gallery_home_main_item}`} key={item}>
                <div className={style.gallery_home_main_item_opacity}></div>
              </div>
            )
          })}
        </div>

        <div className={`${style.gallery_home_main_2} ${mediaStyle.gallery_home_main_2}`}>
          {arr.map((item: number) => {
            return (
              <div className={`${style.gallery_home_main_item} ${mediaStyle.gallery_home_main_item}`} key={item}>
                <div className={`${style.gallery_home_main_item_opacity} ${mediaStyle.gallery_home_main_item_opacity}`}>
                  {item === arr.length - 1 && <p className={`${style.gallery_home_main_item_opacity_last} ${mediaStyle.gallery_home_main_item_opacity_last}`}>+ 343</p>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default GalleryHome;

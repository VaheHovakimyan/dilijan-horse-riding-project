'use client'

import React from "react";
import style from "./AllRights.module.scss";

export const AllRights = ({ }: {}) => {

  return (
    <div className={style.allrights_main}>
      <div className={style.allrights_flex}>
        <div>
          Created by &nbsp;
          <a
            href="https://linkedin.com/in/vahe-hovakimyan-a0368a22a"
            target="_blank"
          >
            <span className={style.allrights_author}>Vahe Hovakimyan</span>
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://linkedin.com/in/mayis-martirosyan-0394b0182"
            target="_blank"
          >
            <span className={style.allrights_author}>
              Mayis Martirosyan
            </span>
          </a> with love 😊
        </div>
      </div>
    </div>
  );
};

export default AllRights;

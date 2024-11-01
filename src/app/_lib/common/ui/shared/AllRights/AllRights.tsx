'use client'

import React from "react";
import style from "./AllRights.module.scss";

export const AllRights = ({

}: {}) => {

  return (
    <div className={style.allrights_main}>
      <div className={style.allrights_flex}>
        <div>
          Created by Vahe Hovakimyan and Mayis Martirosyan with love
        </div>
      </div>
    </div>
  );
};

export default AllRights;

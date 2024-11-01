import React, { useEffect } from "react";
import style from "./LoadingSpinner.module.scss";

export default function LoadingSpinner() {
  useEffect(() => {
    let body = document.getElementsByTagName("body")[0];
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className={style["spinner-wrapper"]}>
      <div className={style["spinner-wrapper__container"]}>
        <div className={style["loading-spinner"]}></div>
      </div>
    </div>
  );
}

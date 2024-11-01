import React from "react";
import style from './PageTitleComponent.module.scss';
import mediaStyle from './PageTitleComponentMedia.module.scss';

export default function PageTitleComponent({ title }: { title: string }) {


  return (
    <div className={`${style.page_title_div_flex} ${mediaStyle.page_title_div_flex}`}>
      <div className={`${style.page_title_div_flex_opacity} ${mediaStyle.page_title_div_flex_opacity}`}>
        <h1 className={`${style.page_title} ${mediaStyle.page_title}`}>{title}</h1>
      </div>
    </div>
  );
}
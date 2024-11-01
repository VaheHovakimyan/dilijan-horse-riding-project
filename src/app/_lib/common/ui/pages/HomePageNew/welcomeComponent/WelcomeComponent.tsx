
import React from "react";
import style from "./WelcomeComponent.module.scss";
import mediaStyle from './WelcomeComponentMedia.module.scss';
import Link from "next/link";

// const getData = async () => {
//   try {
//     const users = await fetch("http://localhost:5000/api/welcome");
//     const data = await users.json();
//     return data.welcome_data_am.welcome;
//   } catch (error) {
//     throw error;
//   }
// };


const WelcomeComponent = () => {
  // const data = await getData();

  // console.log("welcome data:", data);


  return (
    <div className={`${style.welcome_main} ${mediaStyle.welcome_main}`}>
      <div className={`${style.welcome_main_opacity} ${mediaStyle.welcome_main_opacity}`}>
        <div className={`${style.welcome_content} ${mediaStyle.welcome_content}`}>
          <h1 className={`${style.welcome_content_title} ${mediaStyle.welcome_content_title}`}>Dilijan Horse Riding</h1>
          <p className={`${style.welcome_content_description} ${mediaStyle.welcome_content_description}`}>
            Hello world!
          </p>
          <Link href={"#services"}>
            <button className={`${style.welcome_content_btn} ${mediaStyle.welcome_content_btn}`}>Our services</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;

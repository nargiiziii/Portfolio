import React from "react";
import style from "./MainHead.module.css";
import ButtonMainFirst from "../buttonMainFirst/ButtonMainFirst";
import ButtonMainSecond from "../buttonMainSecond/ButtonMainSecond";

const MainHead = () => {
  let buttonTextFirst = "Get Started";
  let buttonTextSecond = "Learn More";

  return (
    <div className={style.main_head}>
      <div className={style.main_text}>
        <h1>Present your business in a whole new way</h1>
        <p>
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world s most popular front-end open source toolkit!
        </p>
      </div>
      <div className={style.buttons}>
        <ButtonMainFirst name={buttonTextFirst} />
        <ButtonMainSecond name={buttonTextSecond}/>
      </div>
    </div>
  );
};

export default MainHead;

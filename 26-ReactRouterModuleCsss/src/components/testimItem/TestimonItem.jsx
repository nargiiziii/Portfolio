import React from "react";
import style from "./TestimonItem.module.css";

const TestimonItem = ({ comment, location, icon }) => {
  return (
    <div className={style.testimon_item}>
      <div className={style.icon}>{icon}</div>
      <div className={style.div_com}>
        <h2 className={style.comment}>{comment}</h2>
        <p className={style.location}>{location}</p>
      </div>
    </div>
  );
};

export default TestimonItem;

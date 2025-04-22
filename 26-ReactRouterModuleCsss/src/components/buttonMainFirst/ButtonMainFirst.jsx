import React from "react";
import style from "./ButtonMainFirst.module.css";

const Button = ({ name }) => {
  return (
    <>
      <button className={style.button}>{name}</button>
    </>
  );
};

export default Button;

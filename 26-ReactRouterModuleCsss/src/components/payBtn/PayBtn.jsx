import React from "react";
import style from "./PayBtn.module.css";

const PayBtn = ({ plan }) => {  
  return (
    <button className={style.button}>{plan}</button>
  );
};

export default PayBtn;

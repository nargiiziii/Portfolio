import React from "react";
import style from "./InputArea.module.css";

const InputArea = () => {
  return (
    <div className={style.inputs_area}>
      <input type="text" placeholder="Full name" />
      <input type="text" placeholder="Email adress" />
      <input type="text" placeholder="Phone number" />
      <input
        type="message"
        placeholder="Message"
        style={{ height: "200px", paddingBottom: "200px" }}
      />
    </div>
  );
};

export default InputArea;

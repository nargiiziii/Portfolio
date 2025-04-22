import React from 'react'
import style from './Contact.module.css'
import { CgMail } from "react-icons/cg";
import InputArea from '../inputArea/InputArea';
import ContactBtn from '../contactBtn/ContactBtn';

const Contact = () => {
  return (
    <div className={style.contact_area}>
        <div className={style.contact_head}>
            <div className={style.icon}><CgMail /></div>
            <h1>Get in touch</h1>
            <p>We'd love to hear from you</p>
        </div>
        <InputArea/>
        <ContactBtn/>

    </div>
  )
}

export default Contact
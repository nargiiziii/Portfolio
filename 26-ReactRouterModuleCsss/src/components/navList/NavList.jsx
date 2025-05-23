import React from 'react'
import style from './NavList.module.css'
import { Link } from 'react-router-dom'


const NavList = () => {

  return (
    <div>
        <ul className={style.list}>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/services"}>Services</Link></li>
        </ul>
    </div>
  )
}

export default NavList
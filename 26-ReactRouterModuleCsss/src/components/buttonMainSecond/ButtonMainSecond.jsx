import React from 'react'
import style from "./ButtonMainSecond.module.css"

const ButtonMainSecond = ({name}) => {
  return (
       <>
         <button className={style.button}>{name}</button>
       </>
  )
}

export default ButtonMainSecond
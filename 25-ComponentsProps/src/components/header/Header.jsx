import React from 'react'
import './Header.css'
import Navbar from '../navbar/Navbar'
import MainText from '../mainText/MainText'

const Header = () => {
  return (
    <div className='header'>
    <Navbar/>
    <MainText/>
    </div>
  )
}

export default Header
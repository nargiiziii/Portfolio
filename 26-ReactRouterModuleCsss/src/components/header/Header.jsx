import React from 'react'
import Navbar from '../navbar/Navbar'
import MainHead from '../mainHead/MainHead'
import Features from '../features/Features'

const Header = () => {
  return (
    <div style={{backgroundColor:"#212529", paddingBottom:"20px"}}>
    <Navbar/>
    <MainHead/>
    <Features/>
    </div>
  )
}

export default Header
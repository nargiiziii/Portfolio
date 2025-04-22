import React from 'react'
import NavList from '../navList/NavList'
import Logo from '../logo/Logo'

const Navbar = () => {
    let style = {
       
        display:"flex",
        justifyContent: "space-between",
        padding: "30px 0",
        color: "white"
    }
  return (
    <>
    <div className="container" style={style} >
    <Logo/>
    <NavList/>
    </div>
    </>
  )
}

export default Navbar
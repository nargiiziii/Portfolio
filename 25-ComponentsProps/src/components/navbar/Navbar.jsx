import React from "react";
import "./Navbar.css";
import NavList from "../navList/NavList";
import Logo from "../logo/Logo";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
          <Logo />
          <NavList />
      </div>
    </>
  );
};

export default Navbar;

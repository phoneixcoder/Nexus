import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-logo-div">
          <a href="/">
            <img src="./Resources/Logo2.svg" alt="Nexus" className="nav-logo" />
          </a>
        </div>
        <div className="nav-menu">
          <i className="uil uil-estate nav-icons"></i>
          <i className="uil uil-capture nav-icons"></i>
          <i className="uil uil-newspaper nav-icons"></i>
        </div>
        <div className="nav-button-div">
          <a href="/login" className="nav-button">
            Sign In
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;

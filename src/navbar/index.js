import React, { useState } from "react";
import logo from "./../images/logo-bookmark.svg";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css";
const Navbar = () => {
  const [display, setdisplay] = useState(true);
  const getDisplay = () => {
    display ? setdisplay(false) : setdisplay(true);
  };
  return (
    <div className="navbar">
      <a href="/" className="bnav">
        <img src={logo} alt="logo" className={display ? "" : "w"} />
      </a>
      <nav className={display ? "" : "open"}>
        <ul>
          <li>
            <a href="/">FEATURES</a>
          </li>
          <li>
            <a href="/">PRICING</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
          <li>
            <a href="/" className="lbtn">
              LOGIN
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={display ? "menu aClose" : "menu aBars"}
        onClick={() => {
          getDisplay();
        }}
      >
        {display ? (
          <i className="fa fa-bars fa-2x"></i>
        ) : (
          <i className="fa fa-close fa-2x"></i>
        )}
      </div>
      <div className={display ? "dn " : "Msocial"}>
        <a href="/">
          <i className="fa fa-facebook fa-2x"></i>
        </a>
        <a href="/">
          <i className="fa fa-twitter fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
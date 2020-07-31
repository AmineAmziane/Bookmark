import React from "react";
import hero from "./../images/illustration-hero.svg";
import "./index.css";
const Header = () => {
  return (
    <div className="header">
      <div className="description">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites .Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <button className="g">Get it on Chrome</button>
        <button className="f">Get it on Firefox</button>
      </div>
      <div className="hero">
        <img src={hero} alt="" />
      </div>
      <div className="bluebox"></div>
    </div>
  );
};

export default Header;

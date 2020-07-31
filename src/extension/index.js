import React from "react";
import chrome from "./../images/logo-chrome.svg";
import firefox from "./../images/logo-firefox.svg";
import opera from "./../images/logo-opera.svg";
import dots from "./../images/bg-dots.svg";
import "./index.css";
const Extension = () => {
  return (
    <div className="extension">
      <div className="f-1">
        <h1>Download the extension</h1>
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className="ext">
        <div className="card">
          <img src={chrome} alt="" />
          <h3>Add to Chrome</h3>
          <p>Minimum version 62</p>
          <img src={dots} alt="" />
          <button>Add & Install Extension</button>
        </div>
        <div className="card">
          <img src={firefox} alt="" />
          <h3>Add to Firefox</h3>
          <p>Minimum version 55</p>
          <img src={dots} alt="" />
          <button>Add & Install Extension</button>
        </div>
        <div className="card">
          <img src={opera} alt="" />
          <h3>Add to Opera</h3>
          <p>Minimum version 46</p>
          <img src={dots} alt="" />
          <button>Add & Install Extension</button>
        </div>
      </div>
    </div>
  );
};

export default Extension;

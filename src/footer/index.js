import React, { Component } from "react";
import logo from "./../images/logo-bookmark.svg";
import fb from "./../images/icon-facebook.svg";
import tw from "./../images/icon-twitter.svg";
import ir from "./../images/icon-error.svg";
import "./index.css";
class Footer extends Component {
  state = {
    er: "",
    input: "",
  };
  getEmail = () => {
    let er;
    if (/\S+@\S+\.\S+/.test(this.state.input)) er = true;
    else er = false;
    this.setState({ er });
  };
  getChange = (e) => {
    let a = e.target.value;
    this.setState({ input: a });
  };
  render() {
    return (
      <div className="footer">
        <div className="infoF">
          <h4>35,000+ ALREADY JOINED</h4>
          <h1>Stay up-to-date with what</h1>
          <h1>we're doing</h1>
          <div className="EmailError">
            <input
              type="text"
              placeholder="Enter your email address"
              onChange={this.getChange}
              className={this.state.er === false ? "err" : "crr"}
            />
            {this.state.er === false ? (
              <span className="errorE">Whoops,make sure it's an email</span>
            ) : (
              ""
            )}
            <img
              src={ir}
              alt=""
              className={this.state.er === false ? "icD" : "ic"}
            />
          </div>
          <button onClick={this.getEmail}>Contact us</button>
        </div>
        <div className="footerB">
          <div className="flg">
            <img src={logo} alt="" />
          </div>
          <div className="fnv">
            <ul>
              <li>FEATURES</li>
              <li>PRICING</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div className="Rsociaux">
            <img src={fb} alt="" />
            <img src={tw} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

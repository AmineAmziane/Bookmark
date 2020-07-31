import React, { Component } from "react";
import arrow from "./../images/icon-arrow.svg";
import "./index.css";
class Acc extends Component {
  state = {
    myref: React.createRef(),
    active: true,
  };
  getRef = () => {
    let a = !this.state.active;
    let b = this.state.myref;
    b.current.style.maxHeight = a
      ? "0px"
      : `${this.state.myref.current.scrollHeight}px`;
    this.setState({ active: a });
  };
  render() {
    return (
      <div className="acc">
        <button onClick={() => this.getRef()}>
          <p>{this.props.titre}</p>
          <img
            src={arrow}
            alt=""
            className={this.state.active ? "" : "rotateArrow"}
          />
        </button>
        <div ref={this.state.myref} className={this.state.active ? "" : "divF"}>
          <p className="acc_body">{this.props.children}</p>
        </div>
      </div>
    );
  }
}

export default Acc;

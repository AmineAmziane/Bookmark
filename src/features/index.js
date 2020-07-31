import React, { useState } from "react";
import a from "./../images/illustration-features-tab-1.svg";
import b from "./../images/illustration-features-tab-2.svg";
import c from "./../images/illustration-features-tab-3.svg";
import "./index.css";
const Feature = () => {
  const [list, setlist] = useState(0);
  const [aa, setaa] = useState("br");
  const [bb, setbb] = useState(0);
  const [cc, setcc] = useState(0);
  return (
    <div className="feature">
      <div className="f-1">
        <h1>Features</h1>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="list">
        <div className="tp-1">
          <ul>
            <li
              onClick={() => {
                setlist(0);
                setaa("br");
                setbb("");
                setcc("");
              }}
              className={aa}
            >
              Simple Bookmarking
            </li>
            <li
              onClick={() => {
                setlist(1);
                setaa("");
                setbb("br");
                setcc("");
              }}
              className={bb}
            >
              Speedy Searching
            </li>
            <li
              onClick={() => {
                setlist(2);
                setaa("");
                setbb("");
                setcc("br");
              }}
              className={cc}
            >
              Easy Sharing
            </li>
          </ul>
        </div>
        <div className="glb">
          {list === 0 ? (
            <div className="tab">
              <div className="imgL">
                <img src={a} alt="" />
              </div>
              <div className="aL">
                <h1>Bookmark in one click</h1>
                <p>
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <button>More Info</button>
              </div>
            </div>
          ) : list === 1 ? (
            <div className="tab">
              <div className="imgL">
                <img src={b} alt="" />
              </div>
              <div className="aL">
                <h1>Simple Bookmarking</h1>
                <p>
                  Speedy Searching Easy Sharing Intelligent search Our powerful
                  search feature will help you find saved sites in no time at
                  all. No need to trawl through all of your bookmarks.
                </p>
                <button>More Info</button>
              </div>
            </div>
          ) : list === 2 ? (
            <div className="tab">
              <div className="imgL">
                <img src={c} alt="" />
              </div>
              <div className="aL">
                <h1>Simple Bookmarking</h1>
                <p>
                  {" "}
                  Speedy Searching Easy Sharing Share your bookmarks Easily
                  share your bookmarks and collections with others. Create a
                  shareable link that you can send at the click of a button.
                </p>
                <button>More Info</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="bluebox2"></div>
    </div>
  );
};

export default Feature;

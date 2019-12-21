import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class mainHead extends Component {
  switchNav = () => {
    document.getElementById("maincnt").classList.remove("noAnimation");
    const nav = document.getElementById("navSlider");
    const mainCont = document.getElementById("maincnt");
    nav.classList.toggle("transform-x-100");
    mainCont.classList.toggle("noMargin");
  };
  minNav = () => {
    document.getElementById("maincnt").classList.add("noAnimation");
    document.getElementById("navdrawer").classList.toggle("w-drawer-min");
    document.getElementById("maincnt").classList.toggle("main-min-cnt");
    const minnav = document.getElementsByClassName("nav-list");
    for (let i = 0; i < minnav.length; i++) {
      minnav[i].classList.toggle("min-nav");
    }
  };
  render() {
    return (
      <div>
        <div className=" bg-white shadow-md py-5 flex justify-center">
          <button
            onClick={this.switchNav}
            className="text-white font-semibold text-lg px-3 py-2 bg-gray-700 focus:outline-none"
          >
            Switch nav
          </button>
          <button
            onClick={this.minNav}
            className="ml-3 text-white font-semibold text-lg px-3 py-2 bg-gray-700 focus:outline-none"
          >
            Minimize nav
          </button>
        </div>
        <div
          id="navSlider"
          className="h-screen border border-gray-400 absolute top-0 z-1 transition-small"
        >
          <div id="navdrawer" className="pt-20 h-full w-drawer">
            <div className="mt-5">
              {/* home */}
              <NavLink to="/" exact activeClassName="activelink">
                <div className="pl-10 py-2 flex items-center nav-list">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30px"
                    height="30px"
                    viewBox="0 0 64 64"
                  >
                    <g>
                      <g>
                        <g>
                          <g>
                            <polygon points="32,0 0,10 32,21 64,10 				" />
                          </g>
                        </g>
                      </g>
                      <g>
                        <g>
                          <g>
                            <polygon points="0,50 29,62 29,26 0,15 				" />
                          </g>
                        </g>
                      </g>
                      <g>
                        <g>
                          <g>
                            <polygon points="35,62 64,50 64,15 35,26 				" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>

                  <span className="text-md font-semibold pl-5">Home</span>
                </div>
              </NavLink>
              {/* About */}
              <NavLink to="/about" exact activeClassName="activelink">
                <div className="pl-10 py-2 flex items-center nav-list">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30px"
                    height="30px"
                    viewBox="0 0 64 64"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            fill="#A3A9BD"
                            d="M62,25H16.3c-0.8,0-1.6,0.7-1.9,1.5L3,55h48.5c0.8,0,1.5-0.5,1.8-1.2l10.5-25.6C64.3,26.9,63.3,25,62,25z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M13.3,21H57v-7c0-1.1-0.9-2.4-2-2.4H33.3c-0.5,0-1-0.2-1.4-0.6l-3.4-5.4C28.1,5.2,27.6,5,27.1,5H2C0.9,5,0,5.9,0,7v44
				l11.4-28.5C11.7,21.7,12.5,21,13.3,21z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span className="text-md font-semibold pl-5">About</span>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default mainHead;

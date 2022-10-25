import React from "react";
import "../App.css";
// import { useEffect } from "react";
// import {Link}  from "react-scroll";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  
  // useEffect(() => {
  //   window.onscroll = () => {
  //     if (
  //       document.body.scrollTop > 50 ||
  //       document.documentElement.scrollTop > 50
  //     ) {
  //       document.getElementById("main").style.backgroundColor = "transparent";
  //       document.getElementById("main").style.paddingTop = "10px";
  //       document.getElementById("main").style.opacity = "1";
  //     } else {
  //       document.getElementById("main").style.backgroundColor = "#00101b";
  //       document.getElementById("main").style.paddingTop = "3";
  //       document.getElementById("main").style.opacity = "0.8";
  //       document.getElementById("main").style.borderRadius = "50px";
  //     }
  //   };
  // }, []);

  return (
    <>
      <div className="navbar" id="main">
        <div className="container">
          <div className="navbar__container">
            <ul className="navbar__left">
              <div className="navbar__left-logo">
                <img src={logo} alt="logo" />
              </div>
            </ul>
            <ul className="navbar__right">

              <li>
                <Link to="/" id="banner"
                  smooth={true}
                  offset={-60}
                  duration={500}>HOME</Link>
              </li>

              <li>
                <Link
                  to=" About"
                  id="about"
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  ABOUT
                </Link>
              </li>

              <li>
                <Link
                  to="/Contact"
                  id="contact"
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  CONTACT
                </Link>
              </li>

              <li>
                <Link to="/Skill" 
                 id="Skill"
                  smooth={true}
                  offset={-60}
                  duration={500}>SKILL</Link>
              </li>

              <li>
                <Link to="/Service" 
                 id="Service"
                 smooth={true}
                 offset={-60}
                 duration={500}>SERVICE</Link>
              </li>

              <li>
                <Link to="/Project"
                 id="Project"
                 smooth={true}
                 offset={-60}
                 duration={500}
                 >PROJECT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;


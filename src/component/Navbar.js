import React from "react";
import "../App.css";
import {Link}  from "react-scroll";
// import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  
  

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar__container">
            <ul className="navbar__left">
              <div className="navbar__left-logo">
                <img src={logo} alt="logo" />
                
              </div>
            </ul>
            <ul className="navbar__right">

              <li>
                <Link to="bgimg" id="banner"
                  smooth={true}
                  offset={-60}
                  duration={500}>HOME</Link>
              </li>

              <li>
                <Link
                  to=" about"
                  id="about12"
                  smooth={true}
                  offset={40}
                  duration={500}
                >
                  ABOUT
                </Link>
              </li>

              <li>
                <Link
                  to="contact"
                  id="contact12"
                  smooth={true}
                  offset={-66}
                  duration={500}
                >
                  CONTACT
                </Link>
              </li>

              <li>
                <Link to="skill" 
                 id="skill12"
                  smooth={true}
                  offset={40}
                  duration={500}>SKILL</Link>
              </li>

              <li>
                <Link to="service" 
                 id="service12"
                 smooth={true}
                 offset={190}
                 duration={500}>SERVICE</Link>
              </li>

              <li>
                <Link to="project"
                 id="project12"
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


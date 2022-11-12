import React from "react";
import "../App.css";
import { Link } from "react-scroll";
// import { Dropdown } from "bootstrap";
// import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <div className="navbar ">
        <div className="container-fluid">
          <div className="navbar__container">
            <ul className="navbar__left">
              <div className="navbar__left-logo">
                <img src={logo} alt="logo" />
              </div>
            </ul>
            <ul className="navbar__right">
              <li>
                <Link
                  to="bgimg"
                  id="banner"
                  smooth={true}
                  offset={-60}
                  duration={100}
                >
                  HOME
                </Link>
              </li>

              <li>
                <Link
                  to=" about"
                  id="about12"
                  smooth={true}
                  offset={40}
                  duration={100}
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
                  duration={100}
                >
                  CONTACT
                </Link>
              </li>

              <li>
                <Link
                  to="skill"
                  id="skill12"
                  smooth={true}
                  offset={40}
                  duration={100}
                >
                  SKILL
                </Link>
              </li>

              <li>
                <Link
                  to="service"
                  id="service12"
                  smooth={true}
                  offset={-80}
                  duration={100}
                >
                  SERVICE
                </Link>
              </li>

              <li>
                <Link
                  to="blog"
                  id="blog12"
                  smooth={true}
                  offset={-60}
                  duration={100}
                >
                  BLOG
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* dropdown */}
        {/* <nav className="NavbarDrop">
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu variant="light" className="Dropdown">
              <li>
                <Link
                  to="bgimg"
                  id="banner"
                  smooth={true}
                  offset={-60}
                  duration={100}
                >
                  HOME
                </Link>
              </li>

              <li>
                <Link
                  to=" about"
                  id="about12"
                  smooth={true}
                  offset={40}
                  duration={100}
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
                  duration={100}
                >
                  CONTACT
                </Link>
              </li>

              <li>
                <Link
                  to="skill"
                  id="skill12"
                  smooth={true}
                  offset={40}
                  duration={100}
                >
                  SKILL
                </Link>
              </li>

              <li>
                <Link
                  to="service"
                  id="service12"
                  smooth={true}
                  offset={-80}
                  duration={100}
                >
                  SERVICE
                </Link>
              </li>

              <li>
                <Link
                  to="blog"
                  id="blog12"
                  smooth={true}
                  offset={-60}
                  duration={100}
                >
                  BLOG
                </Link>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </nav> */}
      </div>
    </>
  );
}

export default Navbar;

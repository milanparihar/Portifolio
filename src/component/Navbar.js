import React from "react";
import "../App.css";
import { Link } from "react-scroll";
// import { Dropdown } from "bootstrap";
// import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar top-fixed navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="https://milanparihar.vercel.app/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              
              <li className="nav-item  ">
                <Link
                className="nav-link "
                  to="bgimg"
                  id="banner"
                  smooth={true}
                  offset={-60}
                  duration={100}
                >
                  HOME
                </Link>
              </li>

              <li className="nav-item">
                <Link
                className="nav-link "
                  to=" about"
                  id="about12"
                  smooth={true}
                  offset={40}
                  duration={100}
                >
                  ABOUT
                </Link>
              </li>

              <li className="nav-item">
                <Link
                className="nav-link"
                  to="contact"
                  id="contact12"
                  smooth={true}
                  offset={-66}
                  duration={100}
                >
                  CONTACT
                </Link>
              </li>

              <li className="nav-item">
                <Link
                className="nav-link"
                  to="skill"
                  id="skill12"
                  smooth={true}
                  offset={40}
                  duration={100}
                >
                  SKILL
                </Link>
              </li>

              <li className="nav-item">
                <Link
                className="nav-link"
                  to="service"
                  id="service12"
                  smooth={true}
                  offset={-80}
                  duration={100}
                >
                  SERVICE
                </Link>
              </li>

              <li className="nav-item">
                <Link
                className="nav-link"
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
      </nav>

      {/* 

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
      </div> */}
    </>
  );
}

export default Navbar;

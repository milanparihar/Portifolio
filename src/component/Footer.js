import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import {FaFacebookF, FaGitAlt, FaInstagram, FaLinkedinIn,  FaHeart,} from "react-icons/fa";
import "../App.css";



function Footer() {
  return (
    <div className="footer__area">
      <div className="footer__containe-fluidr">
        <div className="header">
          <img src={logo} alt="logo" />
          <span className="highlight" >MiLAN</span>
        </div>
        <div className="nav">
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

        
        </div>

        <div className="connect">
          <li>
            <a
              href="https://www.facebook.com/milan.parihar.568"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/milanparihar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGitAlt />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/milan-parihar-6a964b201/"
              target="_blank"
              rel="noopener noreferrer "
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/milan._.parihar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
        </div>
          <div className="copyRight">
            Copyright © All rights reserved | This template is made with{" "}
            <FaHeart /> by <span>MiLAN PARiHAR</span> {" "}
          </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import "../App.css";
import Typewriter from "typewriter-effect";
import {
  FaFacebookF,
  FaGitAlt,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Banner() {
  const [state] = React.useState({
    title: "I`m Milan Parihar,",
    text: "When using elements that are used to trigger in-page functionality like collapsing content, rather than linking",
  });
  return (
    <div className="bgimg" id="banner" alt="banner">
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="header__content">
                <div className="header__section">
                    <div className="welcomeMsg">
                        <h2>Hi,</h2>
                        <h2>{state.title}</h2>
                    </div>
                  <h3 className="col-9">
                   <Typewriter className='typewriter'
                      options={{
                        strings: [
                          "Full-Stack Developer.",
                          "Student.",
                          "Front-End Developer.",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h3>
                  <p>{state.text}</p>
                  <ul className="header__ul">
                    <li>
                      <a
                        href="https://www.facebook.com/milan.parihar.568"
                        target="_blank"
                        rel="noopener "
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/milanparihar"
                        target="_blank"
                        rel="noopener "
                      >
                        <FaGitAlt />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/milan-parihar-6a964b201/"
                        target="_blank"
                        rel="noopener "
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/milan._.parihar/"
                        target="_blank"
                        rel="noopener"
                      >
                        <FaInstagram />
                      </a>
                    </li> 
                  </ul>
                  <div className="header__button">
                    <a href="/" type="button" className="btn">
                      MY RESUME
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Banner;

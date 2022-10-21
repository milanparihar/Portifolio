import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            Milan
          </Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="item">
                <Link className="nav-link  " aria-current="page" to="/Banner">
                  HOME
                </Link>
              </li>

              <li className="item">
                <Link className="nav-link" to="/Service">
                  SERVICE
                </Link>
              </li>

              <li className="item">
                <Link className="nav-link" to="/Contact">
                  CONTACT US
                </Link>
              </li>

              <li className="item">
                <Link className="nav-link" to="/About">
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

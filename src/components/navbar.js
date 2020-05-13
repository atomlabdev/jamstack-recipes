import React from "react";
import { FaGithub } from "react-icons/fa";

import "./style.scss";
import gatsbyLogo from "../images/gatsby-icon.png";
import bulmaLogo from "../images/bulma-logo.png";

const Navbar = () => (
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a
            className="navbar-item logo"
            href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
          >
            JAMstack Recipes
          </a>
        </div>
        {/* <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <span className="navbar-item">
              <a
                className="button is-danger is-inverted"
                href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
              >
                <span className="icon">
                  <FaGithub size="fa-2x" />
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div> */}
      </div>
    </nav>
  </div>
);

export default Navbar;

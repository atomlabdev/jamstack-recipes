import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "gatsby";
import "./style.scss";

import gatsbyLogo from "../images/gatsby-icon.png";
import bulmaLogo from "../images/bulma-logo.png";
import Navbar from "./navbar";

const Header = () => (
  <header>
    <div className="container site-title">
      <Link to="/">
        <h1 className="logo">Jamstack Recipes</h1>
      </Link>
    </div>
  </header>
);

export default Header;

import React from "react";
import { FaGithub } from "react-icons/fa";

import "./style.scss";

import gatsbyLogo from "../images/gatsby-icon.png";
import bulmaLogo from "../images/bulma-logo.png";
import Navbar from "./navbar";

const Header = ({ siteTitle }) => (
  <section className="hero is-dark is-bold">
    <div className="hero-body">
      <div className="content has-text-centered">
        <h1 className="is-uppercase is-size-1 has-text-white">
          🍲 JAMStack Recipes
        </h1>
        <p className="subtitle has-text-white is-size-3">
          Easy to use templates for JAMstack projects
        </p>
        <a
          className="button is-warning is-large"
          href="https://mailchi.mp/64d31f32d4fa/jamstack-recipes"
          target="_blank"
        >
          Subscribe via email
        </a>
      </div>
    </div>
  </section>
);

export default Header;

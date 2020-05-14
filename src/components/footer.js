import React from "react";
import { FaTwitter, FaGithub, FaMedium } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";
import Emoji from "./emoji";

const Footer = () => (
  <footer className="footer">
    <div className="content">
      <p className="is-size-5">
        &copy; 2020 JAMstack Recipes. A{" "}
        <a target="_blank" href="https://codebytes.io">
          CodeBytes
        </a>{" "}
        project.
      </p>
    </div>
  </footer>
);

export default Footer;

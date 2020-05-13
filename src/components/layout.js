import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header";
import Midsection from "./midsection";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <Header />
    <section className="section" style={{ backgroundColor: "#F7FAFC" }}>
      <div className="container">{children}</div>
    </section>
    <Footer />
  </div>
);

export default Layout;

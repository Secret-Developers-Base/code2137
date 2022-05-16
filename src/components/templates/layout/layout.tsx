import React from "react";
import Header from "../../organisms/header/header";
import * as layoutStyles from "./layout.module.scss";
import Nav from "../../organisms/NavBar/nav";
import HomeContent from "../home_content/home_content";
import Footer from "../footer/footer";

const Layout = (props: { children: React.ReactChild | React.ReactChild[] }) => {
  return (
    <div className={layoutStyles.container}>
      <div>
        <Nav />
        <Header />
        {props.children}

        <Footer />
      </div>
    </div>
  );
};

export default Layout;

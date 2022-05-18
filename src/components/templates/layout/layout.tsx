import React from "react";
import Header from "../../organisms/header/header";
import * as layoutStyles from "../create_job_content/layout.module.scss";
import Nav from "../../organisms/NavBar/nav";

const Layout = (props: { children: React.ReactChild | React.ReactChild[] }) => {
  return (
    <div className={layoutStyles.container}>
      <div>
        <Nav />
        <Header />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;

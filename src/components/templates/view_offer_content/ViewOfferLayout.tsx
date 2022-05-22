import React from "react";
import * as layoutStyles from "./layout.module.scss";
import Nav from "../../organisms/NavBar/nav";

const Layout = (props: { children: React.ReactChild | React.ReactChild[] }) => {
  return (
    <div className={layoutStyles.container}>
      <div>
        <Nav />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;

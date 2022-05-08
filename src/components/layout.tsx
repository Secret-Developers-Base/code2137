import React from "react";
import Header from './header';
import * as layoutStyles from  './layout.module.scss'
import Nav from "./nav";

const Layout = (props: { children: React.ReactChild | React.ReactChild[]}) => {
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
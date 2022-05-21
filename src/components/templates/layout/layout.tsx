import React from "react";
import Header from "../../organisms/header/header";
import * as layoutStyles from "./layout.module.scss";
import Nav from "../../organisms/NavBar/nav";
import Footer from "../footer/footer";
import ServicesHeader from "../../organisms/header/servicesHeader";

const Layout = (props: { children: React.ReactChild | React.ReactChild[], location:string }) => {

  return (
    <div className={layoutStyles.container}>
      <div>
        <Nav />
        {location.pathname === '/' && 
          <Header />
        }
        {location.pathname === '/services' &&
          <ServicesHeader />
        }
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

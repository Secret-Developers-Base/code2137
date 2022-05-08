import React from "react";
import { Link } from "gatsby";
import * as navStyles from './nav.module.scss';
import "@fontsource/righteous";
import "@fontsource/roboto";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.logoContainer}>
        <Link className={navStyles.logo} activeClassName={navStyles.activeLink}to="/">code2137</Link>
      </div>
      <ul className={navStyles.menu}>
        <li className={navStyles.list}>
          <Link className={navStyles.link} to="career">Kariera</Link>
        </li>
        <li className={navStyles.list}>
          <Link className={navStyles.link} to="services">Usługi</Link>
        </li>
        <li className={navStyles.list}>
          <Link className={navStyles.link} to="about">O nas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
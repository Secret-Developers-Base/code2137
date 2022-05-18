import React from "react";
import NavLinks from "./navLinks";
import * as navStyles from "./nav.module.scss";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.logoContainer}>
        <Link
          className={navStyles.logo}
          activeClassName={navStyles.activeLink}
          to="/"
        >
          code2137
        </Link>
      </div>
      <NavLinks />
    </nav>
  );
};
export default Navigation;

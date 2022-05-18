import React from "react";
import NavLinks from "./navLinks";
import * as navStyles from "./nav.module.scss";
import { Link } from "gatsby";
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenu
      className={navStyles.hamburger}
      size="40px"
      color="#1B2A4E"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <CgClose
      className={navStyles.hamburger}
      size="40px"
      color="#1B2A4E"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={navStyles.mobile}>
      <div className={navStyles.logoContainer}>
        <Link
          className={navStyles.logo}
          activeClassName={navStyles.activeLink}
          to="/"
        >
          code2137
        </Link>
      </div>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;

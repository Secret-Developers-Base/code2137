import React from "react";
import { Link } from "gatsby";
import * as navStyles from "./nav.module.scss";

const NavLinks = (props: any) => {
<<<<<<< HEAD
  return (
    <ul className={navStyles.menu}>
      <li
        className={navStyles.list}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link
          className={navStyles.link}
          activeClassName={navStyles.activeLink}
          to="/career"
        >
          Kariera
        </Link>
      </li>
      <li
        className={navStyles.list}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link
          className={navStyles.link}
          activeClassName={navStyles.activeLink}
          to="/services"
        >
          Usługi
        </Link>
      </li>
      <li
        className={navStyles.list}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link
          className={navStyles.link}
          activeClassName={navStyles.activeLink}
          to="/about"
        >
          O nas
        </Link>
      </li>
    </ul>
  );
=======
    return (
        <ul className={navStyles.menu}>
            <li
                className={navStyles.list}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <Link
                    className={navStyles.link}
                    activeClassName={navStyles.activeLink}
                    to="/career"
                >
                    Kariera
                </Link>
            </li>
            <li
                className={navStyles.list}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <Link
                    className={navStyles.link}
                    activeClassName={navStyles.activeLink}
                    to="/services"
                >
                    Usługi
                </Link>
            </li>
            <li
                className={navStyles.list}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <Link
                    className={navStyles.link}
                    activeClassName={navStyles.activeLink}
                    to="/about"
                >
                    O nas
                </Link>
            </li>
        </ul>
    );
>>>>>>> master
};

export default NavLinks;

import React from "react";
import { Link } from "gatsby";
import * as styles from "./nav.module.scss";
import { RiHome2Fill } from "react-icons/ri";

const NavLinks = (props: any) => {
    return (
        <ul className={styles.menu}>
            <li
                className={styles.list}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <Link
                    className={styles.link}
                    activeClassName={styles.activeLink}
                    to="/"
                >
                    <div className={styles.home_button}>
                        <RiHome2Fill /> <p>Home</p>
                    </div>
                </Link>
            </li>
            <li
                className={styles.list}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <Link
                    className={styles.link}
                    activeClassName={styles.activeLink}
                    to="/career"
                >
                    Kariera
                </Link>
            </li>
            <li
                className={styles.list}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <Link
                    className={styles.link}
                    activeClassName={styles.activeLink}
                    to="/services"
                >
                    Usługi
                </Link>
            </li>
            <li
                className={styles.list}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <Link
                    className={styles.link}
                    activeClassName={styles.activeLink}
                    to="/about"
                >
                    O nas
                </Link>
            </li>
        </ul>
    );
};

export default NavLinks;

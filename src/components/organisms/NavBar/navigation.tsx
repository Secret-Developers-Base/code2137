import React from "react";
import NavLinks from "./navLinks";
import * as styles from "./nav.module.scss";
import { Link } from "gatsby";

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <Link
                    className={styles.logo}
                    activeClassName={styles.activeLink}
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

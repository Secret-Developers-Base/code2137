import React from "react";
import NavLinks from "./navLinks";
import * as styles from "./nav.module.scss";
import { Link } from "gatsby";
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);

    const hamburgerIcon = (
        <CgMenu
            className={styles.hamburger}
            size="40px"
            color="#ffffff"
            onClick={() => setOpen(!open)}
        />
    );
    const closeIcon = (
        <CgClose
            className={styles.hamburger}
            size="40px"
            color="#ffffff"
            onClick={() => setOpen(!open)}
        />
    );

    const closeMobileMenu = () => setOpen(false);

    return (
        <nav className={styles.mobile}>
            <div className={styles.logoContainer}>
                <Link
                    className={styles.logo}
                    activeClassName={styles.activeLink}
                    to="/"
                >
                    code2137
                </Link>
            </div>
            {open ? closeIcon : hamburgerIcon}
            {open && (
                <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
            )}
        </nav>
    );
};

export default MobileNavigation;

import React from "react";
import * as styles from "./nav.module.scss";
import MobileNavigation from "./mobileNavigation";
import Navigation from "./navigation";

const Nav = () => {
    return (
        <div className={styles.main_container}>
            <MobileNavigation />
            <Navigation />
        </div>
    );
};

export default Nav;

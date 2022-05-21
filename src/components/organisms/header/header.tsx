import React, { useEffect } from "react";
import { useState } from "react";
// Styles
import * as styles from "./header.module.scss";

const Header = () => {

    return (
        <header className={styles.container} >
            <h1>code2137</h1>
            <h2 className={styles.headerDesc}>
                Body Leasing | Recruitment Services | IT Outsourcing
            </h2>
            
        </header>
        
    );
};

export default Header;

import React, { useEffect } from "react";
import { useState } from "react";
// Styles
import * as styles from "./header.module.scss";

const Header = () => {
    return (
        <header className={styles.container}>
            <h1>code2137</h1>
            <h2 className={styles.headerDesc}>
                &#60;Body Leasing/&#62; | &#60;Recruitment Services/&#62; |
                &#60;IT Outsourcing/&#62;
            </h2>
            <div className={styles.description_mobile}>
                <h2>Body Leasing</h2>
                <h2>Recruitment Services</h2>
                <h2>IT Outsourcing</h2>
            </div>
        </header>
    );
};

export default Header;

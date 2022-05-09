import React from 'react';
// Images
import headerImage from "../../../images/header.jpg";
// Styles
import * as styles from "./header.module.scss";
// Fonts
import '@easyfonts/league-spartan';


const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.headerDesc}>Body Leasing <br /> <hr color='1b2a4e' />Recruitment Services <br /> <hr color='1b2a4e' /> IT Outsourcing</h1>
      <div className={styles.circle}></div>
      <div className={styles.circle2}></div>
      <img className={styles.image} src={headerImage} />
    </header>
  );
};

export default Header;
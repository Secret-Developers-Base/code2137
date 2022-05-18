import React from "react";
// Images
import headerImage from "../../../images/header.jpg";
// Styles
import * as styles from "./header.module.scss";
// Fonts
import "@easyfonts/league-spartan";
import "@fontsource/righteous";

const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <h1 className={styles.headerDesc}>
          Body Leasing <br /> <hr color="white" />
          Recruitment Services <br /> <hr color="white" /> IT Outsourcing
        </h1>
      </div>
    </header>
  );
};

export default Header;

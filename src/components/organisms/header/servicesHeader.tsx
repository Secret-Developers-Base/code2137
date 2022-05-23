import React from "react";
import * as styles from "./header.module.scss";

const ServicesHeader = () => {
  return (
    <header className={`${styles.container} ${styles.elliptic}`} >
      <h1>USŁUGI</h1>
    </header>
  );
};

export default ServicesHeader;
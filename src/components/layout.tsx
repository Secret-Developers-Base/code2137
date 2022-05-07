import React from "react";
import Header from './header';
import styles from  './layout.module.scss'

const Layout = (props: { children: React.ReactChild | React.ReactChild[]}) => {
  return (
    <div className={styles.container}>
      <div>
        <Header />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
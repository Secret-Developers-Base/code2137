import React from "react";
import Header from "../../organisms/header/header";
import * as styles from "./layout.module.scss";
import Nav from "../../organisms/NavBar/nav";
import Footer from "../footer/footer";


const Layout = (props: {
    children: React.ReactChild | React.ReactChild[];
    location: string;
}) => {
    return (
        <div className={styles.container}>
            <div>
                <Nav />
                {props.location === "/" && <Header />}
                {props.location === "/services" && <ServicesHeader />}
                {props.location === "/about" && <AboutUsHeader />}
                {props.children}
                <Footer />
            </div>
        </div>
    );

};

export default Layout;

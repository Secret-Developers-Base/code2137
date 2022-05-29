import React from "react";
import * as layoutStyles from "./layout.module.scss";
import Nav from "../../organisms/NavBar/nav";
import Footer from "../../organisms/footer/footer";

const Layout = (props: { children: React.ReactChild | React.ReactChild[] }) => {
    return (
        <div className={layoutStyles.container}>
            <div>
                <Nav />
                {props.children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;

import React from "react";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";

// Styles
import * as styles from "./footer.module.scss";
import * as navStyles from "../../organisms/NavBar/nav.module.scss";

const Footer = (props: any) => {
    return (
        <footer className={styles.container}>
            <div className={styles.inner_container}>
                <div className={styles.columns_item}>
                    <Link
                        className={navStyles.logo}
                        onClick={() => scrollTo("#top")}
                        to="/"
                    >
                        code2137
                    </Link>
                </div>
                <div className={styles.columns_item}>
                    <span>Code2137.pl</span>
                    <br />
                    <span>ul. Poznańska 4b</span>
                    <br />
                    <span>80-359 Gdańsk</span>
                    <br />
                    <span>NIP 739-387-63-06</span>
                </div>
                <div className={styles.columns_item}>
                    <ul className="menu">
                        <li
                            className={navStyles.list}
                            onClick={() =>
                                props.isMobile && props.closeMobileMenu()
                            }
                        >
                            <Link
                                className={styles.link}
                                activeClassName={navStyles.activeLink}
                                to="/career"
                            >
                                Kariera
                            </Link>
                        </li>
                        <li
                            className={navStyles.list}
                            onClick={() =>
                                props.isMobile && props.closeMobileMenu()
                            }
                        >
                            <Link
                                className={styles.link}
                                activeClassName={navStyles.activeLink}
                                to="/services"
                            >
                                Usługi
                            </Link>
                        </li>
                        <li
                            className={navStyles.list}
                            onClick={() =>
                                props.isMobile && props.closeMobileMenu()
                            }
                        >
                            <Link
                                className={styles.link}
                                activeClassName={navStyles.activeLink}
                                to="/about"
                            >
                                O nas
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

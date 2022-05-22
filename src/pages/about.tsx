import * as React from "react";
//Components
import Footer from "../components/organisms/footer/footer";
import Nav from "../components/organisms/NavBar/nav";
import AboutUsSection from "../components/templates/about_us_content/about_us_content";
//fonts

//styles
import "../styles/main.scss";

const AboutPage = () => {
    return (
        <div>
            <Nav />
            <AboutUsSection />
            <Footer />
        </div>
    );
};

export default AboutPage;

import * as React from "react";
//Components
<<<<<<< HEAD
import Layout from "../components/templates/layout/layout";
import HomeContent from "../components/templates/home_content/home_content";
=======
import Footer from "../components/templates/footer/footer";
import Nav from "../components/organisms/NavBar/nav";
import AboutUsSection from "../components/templates/about_us_content/about_us_content";
>>>>>>> master
//fonts

//styles
import "../styles/main.scss";

const AboutPage = () => {
<<<<<<< HEAD
    return (
        <Layout>
            <HomeContent />
        </Layout>
    );
=======
  return (
    <div>
      <Nav />
      <AboutUsSection />
      <Footer />
    </div>
  );
>>>>>>> master
};

export default AboutPage;

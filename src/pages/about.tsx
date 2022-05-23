import * as React from "react";
//Components
import Layout from "../components/templates/layout/layout";
import AboutUsSection from "../components/templates/about_us_content/about_us_content";

//styles
import "../styles/main.scss";

const AboutPage = () => {
  return (
    <Layout>
      <AboutUsSection />
    </Layout>
  );
};

export default AboutPage;

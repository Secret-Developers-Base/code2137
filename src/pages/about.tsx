import * as React from "react";
//Components
import Layout from "../components/templates/layout/layout";
import AboutUsSection from "../components/templates/about_us_content/about_us_content";
//fonts

//styles
import "../styles/main.scss";

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <AboutUsSection />
      </Layout>
    </div>
  );
};

export default AboutPage;

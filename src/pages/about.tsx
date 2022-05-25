import * as React from "react";
//Components

import Layout from "../components/templates/layout/layout";

//fonts

//styles
import "../styles/main.scss";
import AboutUsContent from "../components/templates/about_us_content/about_us_content";

const AboutPage = () => {
  return (
    <Layout location="/about">
      <AboutUsContent />
    </Layout>
  );
};

export default AboutPage;

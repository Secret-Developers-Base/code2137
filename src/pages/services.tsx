import * as React from "react";
//Components
import Layout from "../components/templates/layout/layout";
import HomeContent from "../components/templates/home_content/home_content";
//fonts
import "@fontsource/roboto";
//styles
import "../styles/main.scss";

const ServicesPage = () => {
  return (
    <Layout>
      <HomeContent />
    </Layout>
  );
};

export default ServicesPage;

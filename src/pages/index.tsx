import * as React from "react";

//Components
import Layout from "../components/templates/layout/layout";
import HomeContent from "../components/templates/home_content/home_content";
//fonts

//styles
import "../styles/main.scss";

const IndexPage = () => {
  return (
    <div id="top">
      <Layout location={""}>
        <HomeContent />
      </Layout>
    </div>
  );
};

export default IndexPage;

import * as React from "react";
//Components
import Layout from "../components/templates/layout/layout";
import CareersContent from "../components/templates/careers_content/careers_content";
//fonts
import "@fontsource/roboto";
//styles
import "../styles/main.scss";

const CareerPage = () => {
    return (
        <Layout>
            <CareersContent />
        </Layout>
    );
};

export default CareerPage;

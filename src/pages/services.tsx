import * as React from "react";
//Components
import Layout from "../components/templates/layout/layout";
import ServicesSection from "../components/molecules/services_section/services_section";
//fonts

//styles
import "../styles/main.scss";

const ServicesPage = () => {
    return (
        <Layout location='/services'>
            <ServicesSection />
        </Layout>
    );
};

export default ServicesPage;

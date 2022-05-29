import * as React from "react";
//Components
import Layout from "../components/templates/layout/layout";
//fonts

//styles
import "../styles/main.scss";
import OfertyPracyContent from "../components/templates/oferty_pracy_content/oferty_pracy_content";

const CareerPage = () => {
    return (
        <Layout location="/career">
            <OfertyPracyContent />
        </Layout>
    );
};

export default CareerPage;

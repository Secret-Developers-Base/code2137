import * as React from "react";
//Components
import Layout from "../components/layout";
import WhoWeAreSection from "../components/who_we_are_section/who_we_are_section";
//fonts
import "@fontsource/roboto";
//styles
import "../styles/main.scss";

const IndexPage = () => {
    return (
        <Layout>
            <main>
                <WhoWeAreSection />
            </main>
        </Layout>
    );
};

export default IndexPage;

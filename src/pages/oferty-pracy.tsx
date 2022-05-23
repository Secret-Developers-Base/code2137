import * as React from "react";
//Components
import OfertyPracyContent from "../components/templates/oferty_pracy_content/oferty_pracy_content";
//styles
import "../styles/main.scss";
import OfertyPracyLayout from "../components/templates/oferty_pracy_content/layout";

const OfertyPracy = () => {
    return (
        <OfertyPracyLayout>
            <OfertyPracyContent />
        </OfertyPracyLayout>
    );
};

export default OfertyPracy;

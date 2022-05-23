import React from "react";
//Components
import AboutUsSection from "../../molecules/about_us_section/about_us_section";
import AboutUsWorthSection from "../../molecules/about_us_worth_section/about_us_worth_section";
import AboutUsMap from "../../molecules/about_us_map/about_us_map";

const AboutUsContent = () => {

    return (
        <>
            <AboutUsSection />
            <AboutUsWorthSection />
             <AboutUsMap />
        </>
    );

};

export default AboutUsContent;

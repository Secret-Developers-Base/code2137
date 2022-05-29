import React from "react";
//Components
import AboutUsHeader from "../../molecules/about_us_header/about_us_header";
import AboutUsSection from "../../molecules/about_us_section/about_us_section";
import AboutUsWorthSection from "../../molecules/about_us_worth_section/about_us_worth_section";

const AboutUsContent = () => {
  return (
    <>
      <AboutUsHeader />
      <AboutUsSection />
      <AboutUsWorthSection />
    </>
  );
};

export default AboutUsContent;

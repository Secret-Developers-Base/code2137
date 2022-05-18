import React from "react";
//Components
import WhatWeOfferSection from "../../molecules/what_we_offer_section/what_we_offer_section";
import WhoWeAreSection from "../../molecules/who_we_are_section/who_we_are_section";
import WhyUsSection from "../../molecules/why_us_section/why_us_section";

const HomeContent = () => {
  return (
    <>
      <WhoWeAreSection />
      <WhatWeOfferSection />
      <WhyUsSection />
    </>
  );
};

export default HomeContent;

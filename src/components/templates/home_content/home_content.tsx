import React from "react";
//Components
import WhatWeOfferSection from "../../molecules/what_we_offer_section/what_we_offer_section";
import WhoWeAreSection from "../../molecules/who_we_are_section/who_we_are_section";
import WhyUsSection from "../../molecules/why_us_section/why_us_section";
import MainForm from "../../molecules/main_form/main_form";
import { AnimationOnScroll } from "react-animation-on-scroll";

const HomeContent = () => {
    return (
        <>
            <WhoWeAreSection />
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                <WhatWeOfferSection />
            </AnimationOnScroll>
            <AnimationOnScroll
                animateIn="animate__fadeIn"
                animateOnce
                delay={100}
            >
                <WhyUsSection />
            </AnimationOnScroll>
            <MainForm />
        </>
    );
};

export default HomeContent;

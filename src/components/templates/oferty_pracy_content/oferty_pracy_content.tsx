import React from "react";
// components
import InputDivs from "../../molecules/oferty_pracy/oferty_pracy_inputs_section/InputDivs";
import ContainerHeader from "../../molecules/oferty_pracy/oferty_pracy_containerheader_section/ContainerHeader";
import JobCards from "../../molecules/oferty_pracy/oferty_pracy_cards_section/JobCards";
//styles
import * as styles from "./oferty_pracy_content.module.scss";

export default function OfertyPracyContent() {
    return (
        <>
            <ContainerHeader />
            <div className={styles.container}>
                <InputDivs />
                <JobCards />
            </div>
        </>
    );
}

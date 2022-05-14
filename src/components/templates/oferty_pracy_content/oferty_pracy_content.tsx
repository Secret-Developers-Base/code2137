import React from 'react';
// components
import InputDivs from '../../molecules/oferty_pracy/oferty_pracy_inputs_section/InputDivs'
import ContainerHeader from "../../molecules/oferty_pracy/oferty_pracy_containerheader_section/ContainerHeader";
import JobCards from '../../molecules/oferty_pracy/oferty_pracy_cards_section/JobCards'

export default function OfertyPracyContent() {
    return (
        <main>
            <ContainerHeader />
            <InputDivs />
            <JobCards />
        </main>
    )
}
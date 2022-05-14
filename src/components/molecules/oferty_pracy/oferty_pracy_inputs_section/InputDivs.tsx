import React, {Component} from "react"
import * as styles from './InputDivs.module.scss'
import InputDivComponent from "../../../atoms/oferty_pracy/InputDiv";
import JobCardComponent from "../../../atoms/oferty_pracy/JobCard";
import * as CardStyles from '../oferty_pracy_cards_section/JobCards.module.scss'

export default function InputDivs() {

    const [keyWord, setKeyWord] = React.useState<string>('')
    const [localisation, setLocalisation] = React.useState<string>('')
    const [filter, setFilter] = React.useState<string>('')

    return (
        <div className={styles.input__main}>
            <InputDivComponent label={"Słowo kluczowe"} setValue={setKeyWord} value={keyWord} placeholder={"Słowo Kluczowe"} id={"keyword-input"}/>
            <InputDivComponent label={"Lokalizacja"} setValue={setLocalisation} value={localisation} placeholder={'Lokalizacja'} id={"localisation-input"}/>
            <InputDivComponent label={"Filter"} setValue={setFilter} value={filter} placeholder={'Filter'} id={"filter-input"}/>
        </div>
    )
}
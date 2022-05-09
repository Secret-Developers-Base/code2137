import React from "react"
import * as styles from './InputDivs.module.scss'

export default function InputDivs() {

    const [keyWord, setKeyWord] = React.useState<string>('')
    const [localisation, setLocalisation] = React.useState<string>('')
    const [filter, setFilter] = React.useState<string>('')

    return (
        <div>
            <div className={styles.input__div}>
                <label style={{
                    color: 'black',
                    paddingBottom: '8px',
                    fontSize: '17px',
                    fontWeight: '400',
                    lineHeight: '1.6'
                }}>Słowo kluczowe</label>
                <input placeholder={"Słowo Kluczowe"} type={'text'} onChange={((e) => setKeyWord((e.target.value)))}
                       value={keyWord}/>
            </div>
            <div className={styles.input__div}>
                <label style={{
                    color: 'black',
                    paddingBottom: '8px',
                    fontSize: '17px',
                    fontWeight: '400',
                    lineHeight: '1.6'
                }}>Lokalizacja</label>
                <input placeholder={"Lokalizacja"} type={'text'} onChange={((e) => setLocalisation((e.target.value)))}
                       value={localisation}/>
            </div>
            <div className={styles.input__div}>
                <label style={{
                    color: 'black',
                    paddingBottom: '8px',
                    fontSize: '17px',
                    fontWeight: '400',
                    lineHeight: '1.6'
                }}>Filrty</label>
                <input placeholder={"Filter"} type={'text'} id='filter-input' onChange={(e) => {
                    setFilter(e.target.value)
                }} value={filter}/>
            </div>
        </div>
    )
}
import React from 'react';
import * as styles from "../../molecules/oferty_pracy/oferty_pracy_inputs_section/InputDivs.module.scss";

const InputDivComponent = (props: {
    id: string;
    placeholder: string;
    label: string;
    value: string;
    setValue(value: string): void;
}) => {
    return (
        <div className={styles.input__div}>
            <label style={{
                color: 'black',
                paddingBottom: '8px',
                fontSize: '17px',
                fontWeight: '400',
                lineHeight: '1.6'
            }}>{props.label}</label>
            <input placeholder={props.placeholder} type={'text'} onChange={((e) => props.setValue((e.target.value)))}
                   value={props.value} id={props.id}/>
        </div>
    )
}

export default InputDivComponent
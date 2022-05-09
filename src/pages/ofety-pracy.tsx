// @ts-ignore
import React from "react";
// @ts-ignore
import * as style from "../components/OfertyPracy/main.module.scss";
import ContainerHeader from '../components/OfertyPracy/Header/ContainerHeader'
import InputDivs from '../components/OfertyPracy/Inputs/InputDivs'

export default function Ofertypracy() {

    return (
        <main>
            <div className={style.main__container}>
                <ContainerHeader />
                <section className={style.main__section}>
                    <div className={style.search_jobs__row}>
                        <InputDivs />
                    </div>
                    <hr />
                    <div>
                        {/* Karty - Dokończyć bo brak pomsyłu :( */}
                    </div>
                </section>
            </div>
        </main>
    );
}

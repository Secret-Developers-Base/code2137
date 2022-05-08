import React from "react";
//Images
import sideImage from "../../images/whoweare.jpg";
//Styles
import * as styles from "./who_we_are_section.module.scss";

const WhoWeAreSection = () => {
    return (
        <div className={styles.container}>
            <img src={sideImage} alt="team during the work" />
            <div>
                <h2>Kim jesteśmy?</h2>
                <p>
                    Code 2137 powstało w 2021 roku, a więc jest nową marką na
                    rynku, stworzoną przez ludzi z wiedzą, doświadczeniem, pasją
                    i energią do działania. Powstaliśmy z myślą o wzrastającym
                    zapotrzebowaniu na usługi Body Leasing, Recruitment Services
                    oraz IT Outsourcing. Jesteśmy otwarci, wychodząc naprzeciw
                    najbardziej wymagającym oczekiwaniom, zarówno w kwestiach
                    technicznych, jak i rekrutacyjnych.
                </p>
                <p>
                    Dbamy o to dzięki naszym wykwalifikowanym ekspertom,
                    posiadającym długoletnie doświadczenie w branży IT. Cały
                    czas zdobywamy nowe kwalifikacje, staramy się udoskonalać i
                    rozwijać podwyższając tym samym jakość naszych usług.
                    Bezustannie dokładamy wszelkich starań aby każdy klient był
                    zadowolony ze współpracy z nami.
                </p>
            </div>
        </div>
    );
};

export default WhoWeAreSection;

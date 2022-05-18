import React from "react";
//Styles
import * as styles from "./why_us_section.module.scss";

import docIcon from "../../../images/doc_icon.png";
import terminalIcon from "../../../images/terminal_icon.png";
import clockIcon from "../../../images/clock_icon.png";

const WhyUsSection = () => {
  return (
    <div className={styles.container}>
      <h2>Dlaczego my?</h2>
      <div>
        <div className={styles.columns_item}>
          <img src={docIcon} alt="document_icon" />
          <h3>Oferujemy elastyczną umowę ramową</h3>
          <p>Dostosowujemy się do Twoich potrzeb</p>
        </div>
        <div className={styles.columns_item}>
          <img src={terminalIcon} alt="terminal_icon" />
          <h3>Posiadamy szeroki zakres kompetencji</h3>
          <p>
            Ruby, Net, Java, Javascript, Python, React Native, Node, js,
            Angular, Perl, Visual Basic, Golang, C++, C#, R.
          </p>
        </div>
        <div className={styles.columns_item}>
          <img src={clockIcon} alt="clock_icon" />
          <h3>Jesteśmy szybcy</h3>
          <p>zjawimy się w Twojej firmie w ciągu dwóch tygodni</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;

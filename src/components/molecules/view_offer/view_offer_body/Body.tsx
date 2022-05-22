import React from "react";
import * as styles from "./Body.module.scss";
import { AiOutlineCheckCircle, AiOutlineDollarCircle } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import Content from "../view_offer_maincontent/Content";

interface props {
  usedTechnology: Array<string>;
  whatAreWeLookingFor: Array<string>;
  monthlyPay: string;
  experienceLvl: string;
  mainContent: string;
}
// props: props
export default function ViewOfferBody(props: props) {
  return (
    <>
      <div className={styles.bodyContent}>
        <div className={styles.mainBody}>
          <br />
          <h3>Requirements:</h3>
          <ul>
            {props.whatAreWeLookingFor.map((i) => (
              <li>
                <AiOutlineCheckCircle className={styles.react_icon} /> {i}
              </li>
            ))}
          </ul>
          <h3>Used Technology:</h3>
          <ul>
            {props.usedTechnology.map((i) => (
              <li>
                <GrTechnology className={styles.react_icon} /> {i}
              </li>
            ))}
          </ul>
          <h3>Salary:</h3>
          <ul>
            <li>
              <AiOutlineDollarCircle className={styles.react_icon} />{" "}
              {props.monthlyPay}
            </li>
          </ul>
        </div>
        <Content content={props.mainContent} />
      </div>
      <div className={styles.mainAbout}>
        <div className={styles.mainAbout__card}>
          <h3>Pytania?</h3>
          <p className={styles.mainAbout__card_p}>
            Nie wiesz czego szukamy, lub po prostu chcesz wyjaśnienia? Chętnie z
            Tobą porozmawiamy i wszystko Ci wyjaśnimy. W każdej chwili!!
          </p>
          <h3>Napisz do nas!</h3>
          <a
            href="mailto:patryk@code2137.pl"
            style={{ textDecoration: "none" }}
          >
            patryk@code2137.pl
          </a>
        </div>
      </div>
    </>
  );
}

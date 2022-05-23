import React from "react";
import * as styles from "../../molecules/oferty_pracy/oferty_pracy_cards_section/JobCards.module.scss";

interface JobCard {
  date: String;
  monthlyPayment: String;
  position: String;
  whatAreWeLookingFor: Array<String>;
  slicedPath: String;
  localisation: String;
}

const JobCardComponent = (params: JobCard) => {
  return (
    <>
      <div className={styles.job__card}>
        <div className={styles.job__card_header}>
          <div className={styles.custom_badge}>{params.date}</div>
          <div
            style={{ color: "black", alignItems: "center", display: "flex" }}
          >
            <p
              style={{
                width: "auto",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                textAlign: "center",
              }}
            >
              {params.monthlyPayment}
            </p>
          </div>
        </div>
        <br />
        <div className={styles.job__card_main_section}>
          <div>
            <h5 className={styles.card_title}>{params.position}</h5>
          </div>
          <div>
            <h6
              className={styles.card_title}
              style={{ fontSize: "18px", color: "#17a2b8", fontWeight: "400" }}
            >
              {params.localisation}
            </h6>
          </div>
          <br />
          <div className={styles.card_badges}>
            {params.whatAreWeLookingFor.slice(0, 4).map((i, o) => {
              return <span key={o}>{i}</span>;
            })}
          </div>
        </div>
        <div className={styles.job__card_footer}>
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <hr style={{ alignContent: "center", width: "50%" }} />
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              marginTop: "3%",
            }}
          >
            <button
              className={styles.card_button}
              onClick={() => {
                window.location.href = `/oferty-pracy/${params.slicedPath}`;
              }}
            >
              <h2>SPRAWDŹ OFERTĘ</h2>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCardComponent;

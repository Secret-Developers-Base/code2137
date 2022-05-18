import React from "react";
//Styles
import * as styles from "./what_we_offer_section.module.scss";

const WhatWeOfferSection = () => {
  return (
    <div className={styles.container}>
      <h2>Co oferujemy?</h2>
      <p>
        Programista potrzebny „na już”, a najlepiej cały zespół „na wczoraj”?
        Spokojnie, to zadanie właśnie dla nas. Nasi eksperci pomogą Ci w
        uzupełnieniu braków kadrowych. Wykonamy dedykowane oprogramowanie,
        pomożemy w wyborze technologii, doradzimy lub kompleksowo poprowadzimy
        projekt, przy którym do końca będziesz mógł liczyć na nasze wsparcie.
        Oferujemy szybki dostęp do profesjonalnej pomocy małym, średnim i dużym
        firmom. Zminimalizujemy Twój czas i koszty, oferując pomoc ekspertów w
        dogodnym dla Ciebie terminie. Pozbędziesz się problemów związanych z
        obszarem IT i łatwiej skupisz się na tym, co istotne dla Twojej firmy.
        Fachowa opieka naszych informatyków zmniejszy ryzyko awarii w
        przyszłości.
      </p>
    </div>
  );
};

export default WhatWeOfferSection;

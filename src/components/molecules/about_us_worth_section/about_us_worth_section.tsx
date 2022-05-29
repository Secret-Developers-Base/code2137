import React from "react";
//Styles
import * as styles from "./about_us_worth_section.module.scss";

const AboutUsWorthSection = () => {
  return (
    <div className={styles.container}>
      <h2>Dlaczego warto korzystać z rozwiązań typu Outsourcing IT?</h2>
      <p>
        Dynamicznie rozwijająca się firma bez nowoczesnych technologii? W
        dzisiejszych czasach to niemożliwe. Komputery, oprogramowanie, sieć
        informatyczna i wszystko co się z tym wiąże to podstawa funkcjonowania i
        jakości pracy każdego przedsiębiorstwa. Kto powinien to nadzorować i do
        kogo zwrócić się w razie awarii? A może powierzyć to profesjonalistom?
        Korzystanie z usług zewnętrznej firmy typu Outsourcing IT z roku na rok
        staje się coraz popularniejszym rozwiązaniem. Zwłaszcza, że jej wsparcie
        przeważnie nie ogranicza się do obsługi informatycznej, ale również
        prawnej, księgowej oraz finansowe. Skorzystanie z Outsourcing IT
        przyniesie Twojej firmie wiele korzyści:
      </p>
      <ul>
        <li>pozwoli zoptymalizować koszty</li>
        <li>będziesz dysponował całym zespołem specjalistów</li>
        <li>rozwiąże problemy z rekrutacją</li>
        <li>zapewni indywidualne podejście do rozwiązywania problemów </li>
        <li>uzyskasz dostęp do nowoczesnego oprogramowania</li>
        <li>
          pomoc, doradztwo i wsparcie dostosowane do potrzeb Twojego
          przedsiębiorstwa
        </li>
        <li>zwiększenie bezpieczeństwa IT</li>
        <li>lepsza organizacja pracy </li>
        <li>szybka i adekwatna reakcja w przypadku awarii</li>
      </ul>
    </div>
  );
};

export default AboutUsWorthSection;

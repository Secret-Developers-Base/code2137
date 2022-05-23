import React from "react";
// images
import people from './../../../images/people.png';
import screen from './../../../images/screen.png';
//Styles
import * as styles from '../services_section/services_section.module.scss';

const ServicesSection = () => {
  return (
    <>
    <div className={styles.container}>
        <img className={styles.imgLeft} src={people} alt="people" />
      <div className={styles.flexColumn}>
        <h2>Body Leasing | Outsourcing</h2>
        <p>
          Braki kadrowe?  Potrzebujesz programisty? A może całego zespołu? Dzięki wsparciu naszych ekspertów uzupełnisz zespół o ekspertów w ciągu chwili. Skuteczniej zarządzaj kosztami, i wykorzystuj ekspertów tylko w czasie w którym jest to konieczne dla twojej organizacji.
        </p>
        <ul>
          <li>Nasi programiści w twojej firmie już w ciągu dwóch tygodni</li>
          <li>Elastyczna umowa ramowa</li>
          <li>Szeroki zakres kompetencji:Ruby, .Net, Java, Javascript, Python, React Native, Node.js, Angular, Perl, Visual Basic, Golang, C++, C# oraz R</li>
        </ul>
      </div>
    </div>
      <div className={styles.container}>
        <div className={styles.flexColumn}>
          <h2>Development</h2>
          <p className={styles.devSection}>
            Jesteśmy w stanie wykonać dedykowane oprogramowanie według państwa specyfikacji. W zakres naszych kompetencji wchodzi również doradztwo, pomoc w wyborze technologii oraz kompleksowe przeprowadzenie projektu wraz z późniejszym wsparciem utrzymania aplikacji.
          </p>
        </div>
      <img className={styles.imgRight} src={screen} alt="screen" />
      </div>
    </>
  );
};

export default ServicesSection;
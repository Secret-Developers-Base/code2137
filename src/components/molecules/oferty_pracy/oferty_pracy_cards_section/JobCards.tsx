import React from "react";
import * as styles from "./JobCards.module.scss";
// icons
import { IoIosAddCircle } from "react-icons/io";
import { AiFillDollarCircle } from "react-icons/ai";
import JobCardComponent from "../../../atoms/oferty_pracy/JobCard";
import axios from "axios";
// consts
const uri = "http://localhost:8080/api";

export default function JobCards() {
  const [card, setCards] = React.useState<any>();
  const [error, setError] = React.useState<any>({ error: false, message: "" });

  const submit = async () => {
    const keyWord = (
      document.getElementById("keyword-input")! as HTMLInputElement
    ).value;
    const localisation = (
      document.getElementById("localisation-input")! as HTMLInputElement
    ).value;
    const filter = (
      document.getElementById("filter-input")! as HTMLInputElement
    ).value;

    const response = await axios.post(`${uri}/getJobsByFilter`, {
      keyWord: keyWord,
      localisation: localisation,
      filter: filter,
    });

    let data = response.data;

    if (data.success) {
      data = data.data;
      setCards(data.offerArray);
    }
  };

  const fetchOnLoad = async () => {
    const response = await axios(`${uri}/getJobs`);

    let data = response.data;

    if (data.success) {
      data = data.data;
      setCards(data.OfferArray);
      setError({ error: true, message: data.message });
    } else {
      setError({ error: true, message: data.message });
      setError(true);
    }
  };

  React.useEffect(() => {
    fetchOnLoad();
  }, []);

  return (
    <>
      <button
        className={styles.submit__button}
        type={"submit"}
        onClick={submit}
      >
        Submit
      </button>
      <div className={styles.job__card_main} id={"jobcards-main"}>
        <>
          {card ? (
            <>
              {card.map((i: any, o: any) => {
                return (
                  <JobCardComponent
                    date={i.dateCreated}
                    monthlyPayment={i.monthlyPay}
                    position={i.position}
                    whatAreWeLookingFor={i.whatAreWeLookingFor
                      .slice(0, 4)
                      .map((i: any, o: any) => {
                        return i;
                      })}
                    slicedPath={i.slicedPath}
                    localisation={i.localisation}
                    key={o}
                  />
                );
              })}
            </>
          ) : (
            <></>
          )}
        </>
      </div>
    </>
  );
}

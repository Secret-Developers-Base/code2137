import React from "react";
import MainButton from "../../atoms/main_button/main_button";
//Styles
import * as styles from "../main_form/main_form.module.scss";

const MainForm = () => {
    return (
        <>
            <div className={styles.container}>
                <h2>Zainteresowany?</h2>
                <p>
                    Napisz do nas, opisując tematykę zapytania. <br />
                    Oddzwonimy <b>tego samego dnia</b>.
                </p>

                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder="Imię i Nazwisko"
                        required
                    ></input>

                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        required
                    ></input>

                    <textarea
                        className={styles.text}
                        name="description"
                        placeholder="W czym możemy ci pomóc?"
                        required
                    ></textarea>

                    <button className={styles.btn} type="submit">
                        Wyślij
                    </button>
                </form>
            </div>
        </>
    );
};

export default MainForm;

import React from "react";
import * as styles from "./ContainerHeader.module.scss";

export default function ContainerHeader() {
    return (
        <div className={styles.container__header}>
            <div className={styles.col12}>
                <h2 style={{ color: "white" }}>Oferty pracy</h2>
            </div>
        </div>
    );
}

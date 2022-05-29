import React from "react";
import * as styles from "main_buttton.modules.scss";

const MainButton = ({ buttonContent, onClick }: any) => {
    return (
        <button className={styles.element} onClick={onClick}>
            {buttonContent}
        </button>
    );
};

export default MainButton;

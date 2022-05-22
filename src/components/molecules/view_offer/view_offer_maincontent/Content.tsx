import React from "react";
import * as styles from "./Content.module.scss";

export default function Content(props: any) {
  React.useEffect(() => {
    document.getElementById("main-content")!.innerHTML = props.content;
  });

  return (
    <div className={styles.mainContent}>
      <h3>About Job:</h3>
      <div id="main-content"></div>
    </div>
  );
}

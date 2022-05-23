import React from "react";
import * as styles from "./input.module.scss";
import { Input } from "@mantine/core";

export default function InputComponent(props: {
  placeholder: string;
  label: string;
  onChangeFunc: any;
}) {
  return (
    <div style={{ display: "grid", margin: "0.5rem", width: "50%" }}>
      <label style={{ margin: "0.25rem" }}>{props.label}</label>
      <Input
        className={styles.custom__input}
        placeholder={props.placeholder}
        onChange={(e: any) => props.onChangeFunc(e.target.value)}
      />
    </div>
  );
}

import React from "react";
import * as styles from "./ViewOffer.module.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Button } from "@mantine/core";

export default function ViewOfferNav(props: {
  title: String;
  UploadData: string;
  location: String;
}) {
  return (
    <div className={styles.main__container}>
      <div>
        <a
          style={{ margin: "2%", color: "blue", textDecoration: "none" }}
          href="/"
        >
          <AiOutlineArrowLeft
            size={15}
            style={{ transform: "translateY(10%)" }}
          />{" "}
          All Listings
        </a>
        <h1 style={{ margin: "2%" }}>{props.title}</h1>
        <div className={styles.date}>
          {props.location} &bull; {props.UploadData}
        </div>
      </div>
      <div className={styles.apply__btn_wrapper}>
        <div>
          <Button variant="outline" color="blue">
            Apply
          </Button>
        </div>
      </div>
      <div
        style={{
          height: "2px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "95%",
        }}
      >
        <hr style={{ width: "100%" }} />
      </div>
    </div>
  );
}

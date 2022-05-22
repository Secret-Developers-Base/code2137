import React from "react";
import * as styles from "./layout.module.scss";
import Input from "../../../atoms/create_job/Input";
import { useState } from "react";
import { Button, TransferList, TransferListData } from "@mantine/core";
import { RichTextEditor } from "@mantine/rte";
import MainButton from "../../../atoms/main_button/main_button";
import axios from "axios";
import { showNotification } from "@mantine/notifications";
import { NotificationsProvider } from "@mantine/notifications";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialValues: TransferListData = [
  [
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "next", label: "Next.js" },
    { value: "blitz", label: "Blitz.js" },
    { value: "gatsby", label: "Gatsby.js" },
    { value: "vue", label: "Vue" },
    { value: "jq", label: "jQuery" },
    { value: "sv", label: "Svelte" },
    { value: "rw", label: "Redwood" },
    { value: "np", label: "NumPy" },
    { value: "dj", label: "Django" },
    { value: "fl", label: "Flask" },
    { value: "csharp", label: "C#" },
    { value: "cplusplus", label: "C++" },
    { value: "c", label: "C" },
    { value: "dotnet", label: ".NET" },
    { value: "svelte", label: "svelte" },
    { value: "solidjs", label: "Solid.js" },
    { value: "javascript", label: "Javascript" },
    { value: "java", label: "Java" },
    { value: "html", label: "HTML" },
    { value: "kubernetes", label: "Kubernetes" },
    { value: "crypto", label: "Crypto" },
    { value: "Web3", label: "Web3" },
    { value: "sftwr", label: "Software Development" },
    { value: "Web Developer", label: "Web Development" },
    { value: "FullStack Developer", label: "FullStack Development" },
  ],
  [],
];

export default function CreateJobInputs() {
  const [data, setData] = useState<TransferListData>(initialValues);

  const [mainContent, setMainContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [localisation, setLocalisation] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [monthlyPay, setMonthlyPay] = useState<string>("");
  const [usedTechnology, setUsedTechnology] = useState<string>("");

  const handleCreate = async () => {
    let array = [];

    if (!title) {
      return showNotification({
        message: "Whoops.. Looks like title is missing!",
        color: "red",
      });
    }

    if (!localisation) {
      return showNotification({
        message: "Whoops.. Looks like Localisation is missing!",
        color: "red",
      });
    }

    if (!experience) {
      return showNotification({
        message: "Whoops.. Looks like Experience is missing!",
        color: "red",
      });
    }

    if (!position) {
      return showNotification({
        message: "Whoops.. Looks like Position is missing!",
        color: "red",
      });
    }

    if (!monthlyPay) {
      return showNotification({
        message: "Whoops.. Looks like Monthly Pay is missing!",
        color: "red",
      });
    }

    if (!usedTechnology) {
      return showNotification({
        message: "Whoops.. Looks like Used Technology is missing!",
        color: "red",
      });
    }

    for (const data1 of data[1]) {
      array.push(data1.label);
    }
    const response = await axios
      .post("http://localhost:8080/api/createJob", {
        title,
        localisation,
        experienceLvl: experience,
        mainContent,
        whatAreWeLookingFor: array,
        monthlyPay,
        usedTechnology,
        position,
        cookie: cookies.get("cookie.sid"),
      })
      .then((response) => {
        if (response.data.success) {
          window.location.href = response.data.data.path;
        } else {
          showNotification({
            message:
              "Whoops.. Looks like there was an error creating a job offer!.",
            color: "red",
          });
        }
      });
  };

  return (
    <>
      <NotificationsProvider>
        <div className={styles.container}>
          <div style={{ justifyItems: "center" }}>
            <div className={styles.first__row}>
              <Input
                placeholder={"Title"}
                label={"Title"}
                onChangeFunc={setTitle}
              />
              <Input
                placeholder={"Localisation"}
                label={"Localisation"}
                onChangeFunc={setLocalisation}
              />
            </div>
            <div className={styles.first__row}>
              <Input
                placeholder={"Position"}
                label={"Position"}
                onChangeFunc={setPosition}
              />
              <Input
                placeholder={"Experience"}
                label={"Experience"}
                onChangeFunc={setExperience}
              />
            </div>
            <div className={styles.first__row}>
              <Input
                placeholder={"Monthly Pay"}
                label={"Monthly Pay"}
                onChangeFunc={setMonthlyPay}
              />
              <Input
                placeholder={"Used Technology"}
                label={"Used Technology"}
                onChangeFunc={setUsedTechnology}
              />
            </div>
          </div>
          <TransferList
            limit={999}
            value={data}
            onChange={setData}
            searchPlaceholder="Search..."
            nothingFound="Nothing here"
            titles={["Not Selected", "Selected"]}
            breakpoint={9999999}
            className={styles.customList}
            listHeight={200}
          />
        </div>
        <br />
        <br />
        <div className={styles.RTE}>
          <h3>Tell more about your offer...</h3>
          <RichTextEditor
            controls={[
              ["bold", "italic", "underline"],
              ["unorderedList", "h1", "h2", "h3"],
              ["alignLeft", "alignCenter", "alignRight"],
            ]}
            value={mainContent}
            onChange={setMainContent}
          />
        </div>
        <br />
        <Button style={{ margin: "0.5rem" }} onClick={handleCreate}>
          Create New Job
        </Button>
      </NotificationsProvider>
    </>
  );
}

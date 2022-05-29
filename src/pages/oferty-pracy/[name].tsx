import React, { useEffect, useState } from "react";
import axios from "axios";
import ViewOfferNav from "../../components/molecules/view_offer/view_offer_nav/View_Offer_Nav";
import Layout from "../../components/templates/layout/layout";
import ViewOfferBody from "../../components/molecules/view_offer/view_offer_body/Body";
import Content from "../../components/molecules/view_offer/view_offer_maincontent/Content";
import * as styles from "./offer.module.scss";

export default function viewOffer(params: { name: String }) {
    const name = params.name;

    const [offer, setOffer] = useState<any>();
    const [loaded, setLoaded] = useState<boolean>(false);

    const fetchOnLoad = async (name: String) => {
        axios(`http://localhost:8080/api/getJob/${name}`)
            .then((res) => {
                if (res.data.success) {
                    setOffer(res.data.data.offerInfo);
                    setLoaded(true);
                } else {
                    document.getElementById("loading")!.innerText =
                        "Couldn't load the offer!";
                    setLoaded(true);
                }
            })
            .catch((err) => {
                window.location.href = "/";
            });
    };

    useEffect(() => {
        fetchOnLoad(name);
    }, [name]);

    return (
        <Layout location="job_offer">
            {loaded ? (
                <div className={styles.offer_container}>
                    <ViewOfferNav
                        title={offer.title}
                        UploadData={offer.dateCreated}
                        location={offer.localisation}
                    />
                    <ViewOfferBody
                        usedTechnology={offer.usedTechnology}
                        whatAreWeLookingFor={offer.whatAreWeLookingFor}
                        monthlyPay={offer.monthlyPay}
                        experienceLvl={offer.experienceLvl}
                        mainContent={offer.mainContent}
                    />
                </div>
            ) : (
                <div id="loading">Loading...</div>
            )}
        </Layout>
    );
}

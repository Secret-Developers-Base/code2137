import React, { useEffect, useState } from "react";
import axios from 'axios';
import ViewOfferNav from "../../components/molecules/view_offer/view_offer_nav/View_Offer_Nav";
import ViewOfferLayout from "../../components/templates/view_offer_content/ViewOfferLayout";
import ViewOfferBody from "../../components/molecules/view_offer/view_offer_body/Body";
import Content from '../../components/molecules/view_offer/view_offer_maincontent/Content'

export default function viewOffer(params: { name: String }) {
    const name = params.name;

    const [offer, setOffer] = useState<any>()
    const [loaded, setLoaded] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const fetchOnLoad = async (name: String) => {

        axios(`http://localhost:8080/api/getJob/${name}`)
        .then(res => {
            if (res.data.success) {
                setOffer(res.data.data.offerInfo)
                setError(false)
                setLoaded(true)
            } else {
                setError(true)
                setLoaded(true)
            }
        })
        .catch(err => {
            window.location.href="/"
        })

    }

    useEffect(() => {
        fetchOnLoad(name);
    }, [name]);

    return (
        <div style={{ marginTop: '70px' }}>
            <ViewOfferLayout>
            {loaded ? 
            <>
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
            </> 
            : 
            <>co</>}
            </ViewOfferLayout>
        </div>
    )
}
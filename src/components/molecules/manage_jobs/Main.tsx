import React, { useEffect, useState } from 'react';
import * as styles from './Main.module.scss';
import axios from 'axios';
import { Button } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { showNotification } from '@mantine/notifications';

export default function Main() {

    const [offer, setOffer] = useState<any>()

    useEffect(() => {
        fetchOnLoad()
    }, [])

    const fetchOnLoad = () => {
        axios('http://localhost:8080/api/getJobs')
        .then(response => {
            if (response.data.success) {
                setOffer(response.data.data.OfferArray)
            } else {
                document.getElementById("main_e")!.innerText = response.data.data.message
            }   
        })
    }

    const deleteOffer = (slicedPath: any) => {
        axios.delete('http://localhost:8080/api/deleteOffer', { data: { slicedPath: slicedPath } })
        .then(res => {
            if (res.data.success) {
                window.location.href="/secure/dashboard"
            } else if (res.data.data.code === 404) {
                showNotification({ message: 'There was an error deleting the offer. Please try again or refresh the page.' });
            } else if (res.data.data.code === 400) {
                showNotification({ message: 'There was an error deleting the offer. Please try again or refresh the page.' });
            }
        })
    }

    return (
        <div id="main_e">
            <NotificationsProvider>
            {offer ? 
            <>
                <h1 style={{ textAlign: 'center' }}>Manage Jobs</h1>
                <div className={styles.mainDiv}>
                    {offer.map((o: any, i: any) => {
                        return <div className={styles.offerCard} key={i}>
                            <h1 style={{ textAlign: 'center' }}>{o.title}</h1>
                            <h3 style={{ textAlign: 'center' }}>{o.localisation}</h3>
                            <br />
                            <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', height: '60px'}}>
                                <Button style={{ margin: '0.5rem' }} color="red" onClick={(() => deleteOffer(o.slicedPath))}>Delete</Button>
                                <Button style={{ margin: '0.5rem' }} color="green" onClick={(() => window.location.href=`/oferty-pracy/${o.slicedPath}`)}>Check</Button>
                            </div>
                        </div>
                    })}
                </div>
            </> : <></>}
            </NotificationsProvider>
        </div>
    )
}
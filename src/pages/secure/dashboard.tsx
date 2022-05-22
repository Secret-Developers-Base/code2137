import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

export default function Dashboard() {
    const [authed, setAuthed] = useState<boolean>(false)

  useEffect(() => {
    axios.post("http://localhost:8080/api/verifycookie", { cookie: cookies.get('cookie.sid') })
    .then(response => {
      if (response.data.success) {
        setAuthed(true)
      } else {
        window.location.href="/"
      }
    })
    .catch(() => window.location.href="/")    
  }, [])

    return (
        <>
            {authed ? 
            <div style={{ display: 'block', justifyItems: 'center', width: '100%' }}>
            <h1 style={{ textAlign: 'center'}}>Dashboard Code2137</h1>
            <div>
                <h2 style={{ textAlign: 'center'}}><a href="/secure/createjob" style={{ textDecoration: 'none'}}>Create Offer</a></h2>
                <h2 style={{ textAlign: 'center'}}><a href="/secure/managejobs" style={{ textDecoration: 'none'}}>Manage Offers</a></h2>
            </div>
        </div> : <></>}
        </>
    )
}
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Main from '../../components/molecules/manage_jobs/Main' 

const cookies = new Cookies();

export default function ManageJobs() {
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
        {authed ? <Main /> : <></>}
    </>
  )
}
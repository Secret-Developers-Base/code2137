import React, { useEffect, useState } from "react";
import Layout from "../../components/templates/create_job_content/create_job_layout";
import CreatejobContent from "../../components/templates/create_job_content/create_job_content";
import axios from 'axios';
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

export default function createjob() {

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
      {authed 
      ? 
      <>
        <Layout>
          <CreatejobContent />
        </Layout>
      </> 
      : 
      <></>
      }
    </>
  );
}

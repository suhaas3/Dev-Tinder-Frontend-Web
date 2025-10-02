import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../uitils/constants'

const Requests = () => {

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true
      })

      console.log(res?.data?.data);
    } catch (err) {
      //Handling Error Case
    }
  }

  useEffect(() => {
    fetchRequests();
  }, [])
  return (
    <>

    Requests
      
    </>
  )
}

export default Requests

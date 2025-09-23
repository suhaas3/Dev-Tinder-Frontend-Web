import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer';
import { BASE_URL } from '../uitils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../uitils/userSlice';
import axios from 'axios';


const Body = () => {

  const dispatch = useDispatch();

  const fetchUser = async () => {

    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true
      })

      dispatch(addUser(res.data));
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [])


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Body

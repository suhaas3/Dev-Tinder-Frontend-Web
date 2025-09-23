import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer';
import { BASE_URL } from '../uitils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../uitils/userSlice';
import axios from 'axios';


const Body = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(store => store.user);

  const fetchUser = async () => {

    if (!userData) {
      navigate("/login");
    }

    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true
      })

      dispatch(addUser(res.data));

    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
      console.error(err.message);
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

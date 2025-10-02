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

  const fetchUser = async () => {

    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true
      })

      dispatch(addUser(res.data));

      navigate("/");

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
      <div className="flex flex-col min-h-screen">
        {/* Navbar at top */}
        <Navbar />

        {/* Page content grows to push footer down */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Footer sticks at bottom */}
        <Footer />
      </div>
    </>
  )
}

export default Body

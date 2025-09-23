import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../uitils/constants';
import { removeUser } from '../uitils/userSlice';

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(store => store.user);

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, {
        withCredentials: true
      })

      dispatch(removeUser());
      navigate('/login');

    } catch (err) {
      //ERROR logic maybe redirect to error page
      navigate('/login');
    }
  }

  return (
    <>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost text-xl">DevTinder</Link>
        </div>
        {user && <div className="flex justify-center gap-2">
          <div>welcome, {user.firstName}
          </div>
          <div className="dropdown dropdown-end mx-5">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="..."
                  src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>
        </div>}
      </div>

    </>
  )
}

export default Navbar

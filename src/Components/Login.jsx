import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../uitils/userSlice';
import { BASE_URL } from '../uitils/constants';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [emailId, setEmailId]=useState("saisuhaas@gmail.com");
  const [password, setPassword]=useState("Saisuhaas@123");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
    const res = await axios.post(BASE_URL + "/login", {
      emailId,
      password
    }, {
      withCredentials: true
    })

    dispatch(addUser(res.data))
    navigate("/")

  } catch (err) {
    setError(err?.response?.deata || "something went wrong!");
  }
  }
  return (
    <>
      <div className='flex justify-center py-6'>
        <div className="card bg-base-300 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title justify-center">Login</h2>
            <div className='flex flex-col items-center justify-center'>
              <div className="form-control w-full max-w-[250px] m-4">
                <label className="label">
                  <span className="label-text">Email Id:{emailId}</span>
                </label>
                <input type="text" value={emailId} onChange={(e) =>setEmailId(e.target.value)} className="input input-bordered w-full max-w-xs" />
              </div>

              <div className="form-control w-full max-w-[250px]">
                <label className="label">
                  <span className="label-text">Password:{password}</span>
                </label>
                <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} className="input input-bordered w-full max-w-xs" />
              </div>

            </div>
            <p className='flex justify-center text-red-500'>{error}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

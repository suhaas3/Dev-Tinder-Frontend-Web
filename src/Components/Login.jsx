import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../uitils/userSlice';
import { BASE_URL } from '../uitils/constants';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
      setError(err?.response?.data || "something went wrong!");
    }
  }

  const handleSignUp = async () => {
    try {
      const res = await axios.post(BASE_URL + "/signup", {
        firstName, lastName, emailId, password
      }, { withCredentials: true });

      dispatch(addUser(res?.data?.data));
      return navigate("/profile");

      // dispatch(addUser(res.data));
    } catch (err) {
      //Handling Error Case
    }
  }
  return (
    <>
      <div className='flex justify-center py-6'>
        <div className="card bg-base-300 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title justify-center">{isOpenLogin ? "Sign up" : "Login"}</h2>
            <div className='flex flex-col items-center justify-center'>

              {isOpenLogin && <><div className="form-control w-full max-w-[250px]">
                <label className="label">
                  <span className="label-text">FirstName</span>
                </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input input-bordered w-full max-w-xs" />
              </div>


                <div className="form-control w-full max-w-[250px]">
                  <label className="label">
                    <span className="label-text">LastName</span>
                  </label>
                  <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input input-bordered w-full max-w-xs" />
                </div>
              </>}


              <div className="form-control w-full max-w-[250px] m-4">
                <label className="label">
                  <span className="label-text">Email Id</span>
                </label>
                <input type="text" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="input input-bordered w-full max-w-xs" />
              </div>

              {/* <div className="form-control w-full max-w-[250px]">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered w-full max-w-xs" />
              </div>  */}

              <div className="form-control w-full max-w-[250px]">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}  // 👈 toggles between hidden/visible
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered w-full pr-12"
                  />

                  {/* Eye button */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

            </div>
            <p className='flex justify-center text-red-500'>{error}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={isOpenLogin ? handleSignUp : handleLogin}>{isOpenLogin ? "SignUp" : "Login"}</button>
            </div>

            <p className='m-auto cursor-pointer py-2' onClick={() => setIsOpenLogin(prev => !prev)}>{isOpenLogin ? "Existing User? Login Here" : "New User? Signup"}Here</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

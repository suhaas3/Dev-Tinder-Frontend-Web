import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../uitils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequests } from '../uitils/requestSlice'

const Requests = () => {

  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request)

  const reviewRequest = async (status, _id) => {
    try {
       const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id, {}, {
        withCredentials: true
       });

       dispatch(removeRequests(_id));
    } catch (err) {
      //Handling Error Case
    }
  }

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true
      })

      
      dispatch(addRequests(res?.data?.data))

    } catch (err) {
      //Handling Error Case
    }
  }

  useEffect(() => {
    fetchRequests();
  }, [])

  if (!requests) return;

  if (requests.length === 0) return <h1 className='text-center my-10'>No connections found</h1>
  return (
    <>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {requests && requests.map((req) => {
          const {photoUrl, firstName, lastName, about, gender, age, skills} = req.fromUserId; // extract user details
          return (
            <div
              key={req._id}
              className="card w-80 bg-base-200 shadow-xl rounded-2xl hover:scale-105 transition-transform duration-300 mx-auto"
            >
              {/* Profile Image */}
              <figure className="px-6 pt-6">
                <img
                  src={photoUrl}
                  alt={`${firstName} ${lastName}`}
                  className="rounded-full w-24 h-24 object-cover border"
                />
              </figure>

              {/* User Details */}
              <div className="card-body items-center text-center">
                <h2 className="card-title capitalize">
                  {firstName} {lastName}
                </h2>
                <p className="text-sm text-gray-600">{about}</p>

                {/* Age & Gender */}
                <p className="text-sm font-medium text-gray-700 mt-2">
                  Age: {age} | Gender: {gender || "Not specified"}
                </p>

                {/* Skills */}
                {skills && (
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="badge badge-outline badge-sm px-2 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="card-actions mt-4 flex gap-3">
                  <button className="btn btn-error btn-sm" onClick={() => reviewRequest("rejected", req._id)}>Reject</button>
                  <button className="btn btn-success btn-sm" onClick={() => reviewRequest("accepted", req._id)}>Accept</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </>
  )
}

export default Requests

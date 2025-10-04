import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../uitils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../uitils/connectionsSlice'

const Connections = () => {

  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection)

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true
      });

      dispatch(addConnections(res?.data?.data))
    } catch (err) {
      //Handle Error Case
    }
  }

  useEffect(() => {
    fetchConnections()
  }, [])

  if (!connections) return;

  if (connections.length === 0) return <h1 className='text-center my-10'>No connections Found</h1>
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
  {connections.map((user) => (
    <div key={user._id} className="flex justify-center">
      <div className="card w-80 bg-base-200 shadow-xl rounded-2xl hover:scale-105 transition-transform duration-300">
        <figure className="px-6 pt-6">
          <img
            src={user.photoUrl}
            alt={`${user.firstName} ${user.lastName}`}
            className="rounded-full w-24 h-24 object-cover border"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title capitalize">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-sm text-gray-600">{user.about}</p>
          <div className="card-actions mt-3">
            <button className="btn btn-primary btn-sm">View Profile</button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


    </>
  )
}

export default Connections;

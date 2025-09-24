import React from 'react'

const UserCard = ({ user }) => {
  const { firstName, lastName, skills, photoUrl, about, age, gender } = user;
  return (
    <>

      <div className="flex flex-wrap justify-center gap-8 my-8">
        {/* Card */}

        {/* You can copy more cards here if you want multiple */}
        <div className="card bg-base-300 w-96 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <figure>
            <img
              className="w-60 py-3 rounded-xl"
              src={photoUrl}
              alt="no img"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">{firstName + " " + lastName}</h2>
            <p className="text-sm text-gray-600">{about}</p>
            <p className="text-sm">Age: {age}</p>
            <p className="text-sm">Gender: {gender}</p>
            <p className="text-sm">
              <span className="font-semibold">Skills:</span> {skills.join(", ")}
            </p>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-primary">Ignored</button>
              <button className="btn btn-secondary">Interested</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCard

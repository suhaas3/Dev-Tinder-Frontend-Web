import React from 'react'

const UserCard = ({user}) => {
  console.log(user)
  const {firstName, lastName, skills, photoUrl, about, age, gender} = user;
  return (
    <>
    <div className="flex justify-center my-8">
    <div className="flex justify-center card bg-base-300 w-96 shadow-sm ">
        <figure>
          <img className='w-60 py-3'
            src={photoUrl}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{about}</p>
          <p>{age && gender && age +", "+ gender}</p>
         <p>Skills: {skills.join(", ")}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">ingnored</button>
            <button className="btn btn-secondary">interested</button>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default UserCard

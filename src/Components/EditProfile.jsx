import React, { useState } from 'react'
import UserCard from './UserCard';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../uitils/constants';
import { addUser } from "../uitils/userSlice";

const EditProfile = ({ user }) => {


  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [age, setAge] = useState(user?.age || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || "");
  const [about, setAbout] = useState(user?.about || "");
  const [skills, setSkills] = useState(user?.skills || []);
  const [newSkill, setNewSkill] = useState(""); // for input skill
  const [error, setError] = useState("");
  const [saveMessage, setSaveMessage] = useState(false);
  const dispatch = useDispatch();


  // Add new skill
  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      if (!skills.includes(newSkill.trim())) {
        setSkills([...skills, newSkill.trim()]);
      }
      setNewSkill("");
    }
  };

  // Remove skill
  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const saveProfile = async () => {

    //Clear Errors
    setError("");

    try {

      const res = await axios.patch(BASE_URL + "/profile/edit", {
        firstName, lastName, age, gender, photoUrl, about, skills
      }, {
        withCredentials: true
      })

      dispatch(addUser(res?.data?.data))

      setSaveMessage(true);
      setTimeout(() => {
        setSaveMessage(false);
      }, 3000)


    } catch (err) {
      setError(err?.response?.data);
    }
  }

  return (
    <>
      <div className='flex justify-center  gap-6 mx-10'>
        <div className='flex justify-center py-8'>
          <div className="card bg-base-300 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <div className='flex flex-col items-center justify-center'>

                <div className="form-control w-full max-w-[250px] m-3">
                  <label className="label">
                    <span className="label-text">FirstName:</span>
                  </label>
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-[250px] m-3">
                  <label className="label">
                    <span className="label-text">LastName:</span>
                  </label>
                  <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-[250px] m-3">
                  <label className="label">
                    <span className="label-text">PhotoUrl:</span>
                  </label>
                  <input type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} className="input input-bordered w-full max-w-xs" />
                </div>


                <div className="form-control w-full max-w-[250px] m-3">
                  <label className="label">
                    <span className="label-text">Age:</span>
                  </label>
                  <select
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option value="">Select age</option>
                    {Array.from({ length: 83 }, (_, i) => i + 18).map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>


                <div className="form-control w-full max-w-[250px] m-3">
                  <label className="label">
                    <span className="label-text">Gender:</span>
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div className="form-control w-full max-w-[250px] m-3">
                  <label className="label">
                    <span className="label-text">About:</span>
                  </label>
                  <input type="text" value={about} onChange={(e) => setAbout(e.target.value)} className="input input-bordered w-full max-w-xs" />
                </div>

                {/* ✅ Skills Section */}
                <div className="form-control w-full max-w-[250px] m-3">
                  <label className="label">
                    <span className="label-text">Skills:</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      className="input input-bordered w-full"
                      placeholder="Enter a skill"
                    />
                    <button
                      type="button"
                      onClick={handleAddSkill}
                      className="btn btn-primary"
                    >
                      Add
                    </button>
                  </div>
                  {/* Show added skills */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="badge badge-secondary cursor-pointer"
                        onClick={() => handleRemoveSkill(skill)}
                      >
                        {skill} ✕
                      </span>
                    ))}
                  </div>
                </div>


              </div>
              <p className='flex justify-center text-red-500'>{error}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
              </div>

              {/* {"toast message code"} */}
              {saveMessage && (
                <div className="toast toast-top toast-center fixed z-50">
                  <div className="alert alert-success">
                    <span>Profile Saved successfully.</span>
                  </div>
                </div>
              )}


            </div>
          </div>
        </div>

        <UserCard user={{ firstName, lastName, age, gender, photoUrl, about, skills }} />

      </div>

    </>
  )
}

export default EditProfile;

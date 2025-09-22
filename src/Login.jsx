import React from 'react'

const Login = () => {
  return (
    <>
      <div className='flex justify-center py-6'>
        <div className="card bg-base-300 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title justify-center">Login</h2>
            <div className='flex flex-col items-center justify-center'>
              <div class="form-control w-full max-w-[250px] m-4">
                <label class="label">
                  <span class="label-text">Email Id</span>
                </label>
                <input type="text" class="input input-bordered w-full max-w-xs" />
              </div>

              <div class="form-control w-full max-w-[250px]">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input type="password" class="input input-bordered w-full max-w-xs" />
              </div>

            </div>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

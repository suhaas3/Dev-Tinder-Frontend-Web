import React from 'react'
import '../index.css';

const Footer = () => {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-base-300 text-base-content rounded p-10 w-full">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                   viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828..."></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                   viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604..."></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                   viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5..."></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd
          </p>
        </aside>
      </footer>
    </>
  )
}

export default Footer

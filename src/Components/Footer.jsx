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
            {/* Twitter */}
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                   viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557a9.94 9.94 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3a9.864 9.864 0 0 1-3.127 1.195 4.922 4.922 0 0 0-8.39 4.482A13.978 13.978 0 0 1 1.671 3.149a4.922 4.922 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.28 1.582 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.926 4.926 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.104c-.396 0-.79-.023-1.177-.068a13.945 13.945 0 0 0 7.548 2.212c9.056 0 14.004-7.513 14.004-14.004 0-.213-.005-.425-.014-.636A9.935 9.935 0 0 0 24 4.557z"/>
              </svg>
            </a>
            {/* GitHub */}
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                   viewBox="0 0 24 24" className="fill-current">
                <path d="M12 .297a12 12 0 0 0-3.792 23.392c.6.111.82-.26.82-.577v-2.165c-3.338.726-4.033-1.415-4.033-1.415-.546-1.389-1.333-1.759-1.333-1.759-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.809 1.305 3.495.997.108-.774.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.932 0-1.31.467-2.381 1.235-3.221-.124-.304-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 6 0c2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.243 2.872.119 3.176.77.84 1.232 1.911 1.232 3.221 0 4.61-2.807 5.625-5.479 5.921.43.372.814 1.102.814 2.222v3.293c0 .32.218.694.825.576A12.003 12.003 0 0 0 12 .297z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                   viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.695C14 5.611 14.291 4.863 15.797 4.863H19V1h-3.219C11.403 1 9 2.657 9 5.695V8z"/>
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

import React, { useState } from 'react'
import '../components/Navbar.css'
import { Modal } from '@mui/material'


export default function Navbar() {
  const [open, setopen] = useState(false)

  const SelectOpen = () => {
    if (open) {
      setopen(false)
    } else {
      setopen(true)
    }
  }




  return (

    <>
      <div className='nav-background'>
        <nav className="nav-bar container flex ">
          <div className="nav-logo">
            <a href="/">
              <h2>DOCTOR ONE</h2>
            </a>
          </div>


          <div className="nav-links flex">
            <a href="/">
              <h3>Home</h3>
            </a>
            <a href="/doctor">
              <h3>Doctor</h3>
            </a>
            <a href="/labs">
              <h3>Labs</h3>
            </a>
            {/* <a href="/pharmacy">
              <h3>Pharmacy</h3>
            </a> */}
            <a href="/hospital">
              <h3>Hospital</h3>
            </a>
          </div>


          <div className="nav-buttons flex">
            <div className="nav-button">
              <button onClick={() => window.location.href = '/login'}>
                <h3 className="nav-button1" >Login</h3>
              </button>


            </div>
            <div onClick={SelectOpen} className='menubutton flex'>
              <i class="ri-menu-2-fill"></i>
            </div>

          </div>
          <Modal className='menubuttonNavModal container' open={open} onClose={SelectOpen} >
            <>
              <div className='menubuttonNavModalSec flex '>

                <a href="/">
                  <h3>Home</h3>
                </a>
                <a href="/doctor">
                  <h3>Doctor</h3>
                </a>
                <a href="/labs">
                  <h3>Labs</h3>
                </a>
                {/* <a href="/pharmacy">
              <h3>Pharmacy</h3>
            </a> */}
                <a href="/hospital">
                  <h3>Hospital</h3>
                </a>

              </div>
            </>
          </Modal>
        </nav>
      </div>
    </>
  )
}

import React, { useState } from 'react'
import '../components/Navbar.css'
import { Modal } from '@mui/material'
import { useLocation } from 'react-router-dom'


export default function Navbar() {
  const [open, setopen] = useState(false)

  const SelectOpen = () => {
    if (open) {
      setopen(false)
    } else {
      setopen(true)
    }
  }

  const location = useLocation()
  console.log("location>>>>", location)
  const path = location?.pathname

  return (

    <>
      <div className='nav-background'>
        <nav className="nav-bar container flex ">
          <div className="nav-logo">
            <a href="/">
              <h2 >DOCTOR ONE</h2 >
            </a>
          </div>
          <div className="nav-links flex">
            <a href="/">
              <h3 style={{ color: path === "/" ? "blue" : '' }} >Home</h3>
            </a>
            <a href="/doctor">
              <h3 style={{ color: path === "/doctor" || path === "/searchdoctor" ? "blue" : '' }} >Doctor</h3>
            </a>
            <a href="/labs">
              <h3 style={{ color: path === "/labs" || path === '/labfiltering' ? "blue" : '' }}>Labs</h3>
            </a>
            {/* <a href="/pharmacy">
              <h3>Pharmacy</h3>
            </a> */}
            <a href="/hospital" >
              <h3 style={{ color: path === "/hospital" || path === "/hospitalfilter" ? "blue" : '' }}>Hospital</h3>
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
        </nav >
      </div >
    </>
  )
}

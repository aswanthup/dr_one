import React from 'react'
import '../components/Navbar.css'


export default function Navbar() {






  return (
    
         <>
         <div className='nav-background'>
  <nav className="nav-bar container flex ">
    <div className="nav-logo">
      <a href="">
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
      <a href="/pharmacy">
        <h3>Pharmacy</h3>
      </a>
      <a href="/hospital">
        <h3>Hospital</h3>
      </a>
    </div>
    <div className="nav-buttons flex">
      <div className="nav-button">
        <button onClick={()=>window.location.href='/login'}>
          <h3 className="nav-button1" >Login</h3>
        </button>
      </div>
    </div>
  </nav>
  </div>
</>
  )
}

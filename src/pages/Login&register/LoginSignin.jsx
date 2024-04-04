import React, { useState } from 'react'
import '../Login&register/login.css'
import { Modal } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MuiOtpInput } from 'mui-one-time-password-input';
export const LoginSignin = () => {
  const [Open, setOpen] = useState(false)
  // const [Otp, setOtp] = useState({
  // })
  const openModal = (cls) => {
    console.log("Checkinggggggggg", cls)
    if (cls.cls) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }


  const [otp, setOtp] = React.useState('')

  const handleChange = (newValue) => {
    setOtp(newValue)
  }

  return (
    <div>
      <div className="main-login flex">
        <div className="pngdiv pngdiv1">
          <img src="images/Group 69.png" alt="" />
        </div>


        <div className="login-image-section flex">
          <div className="login-first-image">
            <img src="images/doc.jpg" alt="" />
          </div>
          <div className="login-second-image flex">
            <img src="images/lab.jpg" alt="" />
            <img src="images/med.jpg" alt="" />
          </div>
        </div>
        <div className="pngdiv pngdiv2">
          <img src="images/Group 70.png" alt="" />
        </div>
        <div className="flex" style={{ alignItems: 'center', justifyContent: 'center' }}>


          <div className="login-form flex">

            <div className="flex input-box-section">
              <div>
                <h1 style={{ color: 'white' }}>Login</h1>
              </div>
              <div>
                <h4>User Name</h4>
                <input type="text" />
              </div>
              <div>
                <h4>Password</h4>
                <input type="password" />
              </div>
              <div className='forgot-password flex'>
                <a onClick={openModal} >
                  <h4>Forgot Password.?</h4> </a>
              </div>
            </div>
            <div className="login-button-section flex">
              <a href='/register' className="flex">
                <h4>Create account</h4>
              </a>
              <a href='/' className="flex">
                <h4>Login Now</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="pngdiv pngdiv3 flex">
          <div>
            <img src="images/Group 71.png" alt="" />
          </div>
        </div>
      </div>
      <Modal
        open={Open}
        onClose={() => { openModal({ cls: true }) }}
        className='login-modal-Align'>
        <>
          <div className='login-InnerModal'>
            <div className='login-InnerModal-close'>
              <div style={{ cursor: "pointer" }} onClick={() => { openModal({ cls: true }) }}>
                <ArrowBackIcon id="login-InnerModal-closeIcon" />
              </div>
            </div>
            <label className='login-InnerModal-H3'>
              Check your email for OTP
            </label>
            <p >
              Kindly input the 6-digit code that has been dispatched to your email.
            </p>
            <div className='login-InnerModal-Inputs'>
              <div className='login-InnerModal-Inputs-Align'>
                <MuiOtpInput value={otp} onChange={handleChange} />
              </div>
            </div>
            <p>Didin't receive a code? <a href="">Resent</a></p>
            <div className='login-InnerModal-Button'>
              <button >Verify Code </button>
            </div>
          </div>
        </>

      </Modal>
    </div>
  )
}

import { Modal } from '@mui/material'
import React, { useState } from 'react'

export default function Mainadminnavbar({ data: { SentData, selected } }) {
  const [ProfilePopup, setProfilePopup] = useState(false)
  const FindButtonValue = (data) => {
    SentData(data)
  }

  const OpenPopup = () => {
    setProfilePopup(!ProfilePopup)
  }
  return (
    <div className="doctoradminnavbar">
      <div className="containeradmin doctoradminnavbar2 flex">
        <div className="adminlogodiv flex">
          <img src="/images/doc.jpg" alt="" />
          <h2 style={{ marginLeft: "18px" }}>DOCONE</h2>
        </div>

        <div className="adminlogodiv flex">
          <div
            onClick={() => { FindButtonValue("onboarding") }}
            style={{ marginLeft: "18px" }} className={selected?.onboarding ? "adminonboarding adminonboardingSelected flex" : "adminonboarding flex"}>


            <i class="fi fi-sr-introduction-handshake"></i>
            <h4 style={{ marginLeft: "10px" }} >Onboarding</h4>

          </div>
          <div style={{ marginLeft: "18px" }} className="adminnotification flex">
            <i class="ri-notification-2-line"></i>
          </div>

          <img onClick={OpenPopup} style={{ marginLeft: "18px" }} src="/images/doc.jpg" alt="" />

        </div>

        <Modal open={ProfilePopup} onClose={OpenPopup}>
          <>
          </>
        </Modal>
      </div>
    </div>

  )
}

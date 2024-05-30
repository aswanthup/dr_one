import React, { useState } from 'react'

export default function Mainadminsidebar({ SentData }) {
  const [ChangeDashboards, setChangeDashboards] = useState({

  })
  const FindButtonValue = (data) => {
    SentData(data)
  }
  return (
    <div className="mainadminsidebar">

      <div onClick={() => {
        FindButtonValue("overview")
      }} className="admimmenuicon flex">

        <i class="ri-file-chart-fill"></i>
        <h4>OverView</h4>

      </div>

      <div
        onClick={() => {
          FindButtonValue("doctor")
        }}
        className="admimmenuicon admimmenuicon2 flex">

        <i class="fi fi-sr-stethoscope"></i>
        <h4>Doctor</h4>

      </div>


      <div
        onClick={() => {
          FindButtonValue("hospital")
        }}
        className="admimmenuicon flex">

        <i class="fi fi-sr-hospital"></i>
        <h4>Hospital</h4>

      </div>


      <div
        onClick={() => {
          FindButtonValue("lab")
        }}
        className="admimmenuicon flex">

        <i class="fi fi-sr-syringe"></i>
        <h4>Labs</h4>

      </div>



    </div>
  )
}

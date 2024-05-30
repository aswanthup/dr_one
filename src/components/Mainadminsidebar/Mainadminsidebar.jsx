import React, { useState } from 'react'

export default function Mainadminsidebar({ data: { SentData, selected } }) {
  console.log("selected>>>>", selected)
  const FindButtonValue = (data) => {
    SentData(data)
  }
  return (
    <div className="mainadminsidebar">

      <div onClick={() => {
        FindButtonValue("overview")
      }} className={selected?.overview ? "admimmenuicon admimmenuicon2 flex" : "admimmenuicon flex"}>

        <i class="ri-file-chart-fill"></i>
        <h4>Overview</h4>

      </div>

      <div
        onClick={() => {
          FindButtonValue("doctor")
        }}
        className={selected?.doctor ? "admimmenuicon admimmenuicon2 flex" : "admimmenuicon flex"}>

        <i class="fi fi-sr-stethoscope"></i>
        <h4>Doctor</h4>

      </div>


      <div
        onClick={() => {
          FindButtonValue("hospital")
        }}
        className={selected?.hospital ? "admimmenuicon admimmenuicon2 flex" : "admimmenuicon flex"}>

        <i class="fi fi-sr-hospital"></i>
        <h4>Hospital</h4>

      </div>


      <div
        onClick={() => {
          FindButtonValue("lab")
        }}
        className={selected.lab ? "admimmenuicon admimmenuicon2 flex" : "admimmenuicon flex"}>

        <i class="fi fi-sr-syringe"></i>
        <h4>Labs</h4>

      </div>



    </div >
  )
}

import axios from 'axios'
import moment from 'moment'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { port } from '../../../config'

export default function Mainadmincustomerdetails({ Details }) {
  const [customerDetails, setcustomerDetails] = useState(Details)

  const UpdateStatus = () => {
    const Data = {
      id: customerDetails?.id,
      status: customerDetails?.status === "Y" ? "N" : "Y"
    }
    console.log("Data>>>>", Data)
    axios.post(`${port}/hospital/approvehospital`, Data).then((res) => {
      console.log("res>>>>>>>", res)
      if (res?.data?.message) {
        toast.success(res?.data?.message)
        ChangeStatus()
      }
    }).catch((err) => {
      toast.info(err.response.data.message)
    })
  }
  const ChangeStatus = () => {
    let temp = customerDetails
    if (temp?.status === "Y") {
      temp = { ...temp, status: "N" }
    } else {
      temp = { ...temp, status: "Y" }
    }
    console.log(temp)
    setcustomerDetails(temp)
  }
  return (
    <div>

      <div className="mainadmindoctordatas flex">

        <div className="mainadmindoctordatas_profile flex">

          <img className='mainadmindoctordatas_profile_photo' src="/images/doc.jpg" alt="" />

          <div className="mainadmindoctordatas_profile_data flex">

            <div className='flex'>  <h2>{customerDetails?.name}</h2> <h4 className='highlight_data' style={{ background: "#2A9D8F", color: "white", marginLeft: "10px" }}>{customerDetails?.gender}</h4></div>

            <div className='flex texticonset'>
              <i style={{ color: "#FB8500" }} class="fi fi-br-age"></i>
              <h4 style={{ marginLeft: "10px" }}>{customerDetails?.ageGroup} Years</h4>
            </div>

            <div className='flex'>
              <div className='flex texticonset'>
                <i class="fi fi-sr-call-outgoing"></i>
                <h4 style={{ marginLeft: "10px" }}>+91 {customerDetails?.phone_no}</h4>

              </div>
              <div className='flex texticonset' style={{ marginLeft: "20px" }}>
                <i style={{ color: "#F35454" }} class="fi fi-sr-envelope"></i>
                <h4 style={{ marginLeft: "10px" }}>{customerDetails?.email}</h4>
              </div>
            </div>
            {
              customerDetails?.pincode &&
              <div className='flex adimindoctorpin'>
                <h4 style={{ background: "#3A65FD", color: "white" }}>{customerDetails?.pincode}</h4>
              </div>

            }
          </div>
        </div>


      </div>


      <div className='admin_disable_section flex'>

        <div className='admin_disable_section_left flex'>
          <i class="fi fi-sr-exclamation"></i>
          <div style={{ marginLeft: "1.3vw" }}>
            <h2>Date of join</h2>
            <h4>{moment(customerDetails?.datetime).subtract(10, 'days').calendar()}</h4>
          </div>

          <div style={{ marginLeft: "1.5vw" }}>
            <h2>Last Actived</h2>
            <h4>{moment(customerDetails?.last_active).subtract(10, 'days').calendar()}</h4>
          </div>


        </div>

        <div className={customerDetails?.status === "N" ? 'admin_disable_button' : customerDetails?.status === "Y" || customerDetails?.status === null ? "admin_disable_button2" : ''}>
          <h4 onClick={UpdateStatus}>{customerDetails?.status === "N" ? "Active" : customerDetails?.status === "Y" || customerDetails?.status === null ? "Disabled" : ''}</h4>
        </div>
      </div>




      <h3 style={{ marginBottom: "1.3vw" }}>Activity</h3>

      <div className="customer_view flex">

        <div className='flex'>
          <h4 className='customer_view_type'>Doctor</h4>
          <h4>Dr.Anil Yadav</h4>
        </div>


        <div className='flex'>
          <h4 className='customer_view_time'>20 Minutes Ago</h4>
          <h4 className='customer_view_contact customer_view_contact2'>View</h4>
        </div>
      </div>


      <div className="customer_view flex">

        <div className='flex'>
          <h4 className='customer_view_type'>Hospital</h4>
          <h4>Kozhikode District Co-Operative Hospital</h4>
        </div>


        <div className='flex'>
          <h4 className='customer_view_time'>20 Minutes Ago</h4>
          <h4 className='customer_view_contact'>Contacted</h4>
        </div>
      </div>


      <div className="customer_view flex">

        <div className='flex'>
          <h4 className='customer_view_type'>Labs</h4>
          <h4>Saroj Diagnostic Laboratory</h4>
        </div>


        <div className='flex'>
          <h4 className='customer_view_time'>20 Minutes Ago</h4>
          <h4 className='customer_view_contact'>Contacted</h4>
        </div>
      </div>


      <div className="customer_view flex">

        <div className='flex'>
          <h4 className='customer_view_type'>Doctor</h4>
          <h4>Dr.Anil Yadav</h4>
        </div>


        <div className='flex'>
          <h4 className='customer_view_time'>20 Minutes Ago</h4>
          <h4 className='customer_view_contact customer_view_contact2'>View</h4>
        </div>
      </div>


      <div className="customer_view flex">

        <div className='flex'>
          <h4 className='customer_view_type'>Hosptal</h4>
          <h4>Kozhikode District Co-Operative Hospital</h4>
        </div>


        <div className='flex'>
          <h4 className='customer_view_time'>20 Minutes Ago</h4>
          <h4 className='customer_view_contact'>Contacted</h4>
        </div>
      </div>


      <div className="customer_view flex">

        <div className='flex'>
          <h4 className='customer_view_type'>Doctor</h4>
          <h4>Dr.Anil Yadav</h4>
        </div>


        <div className='flex'>
          <h4 className='customer_view_time'>20 Minutes Ago</h4>
          <h4 className='customer_view_contact'>Contacted</h4>
        </div>
      </div>


    </div>
  )
}

import React from 'react'
import Hospitaladminnotification from '../../components/Hospitaladminnotification'
import Rightnavbar from '../../components/Rightnavbar'
import '../Hospitaladmin/hospitaladmindoctorlist.css'
import Hospitaladmin_doctor_card from '../../components/Hospitaladmin_doctor_card'

export default function Hospitaladmindoctorlist() {
  return (
    <div>



      <div className="hospitaladmin-main flex">


        <Rightnavbar />

        <div className="hospitaladmin_right">
          <Hospitaladminnotification />
          <div className='manage_doctor'><h1>Manage Doctors</h1></div>

          <div className='hospitaladmin_doctor_cards flex'>

            <div className='hospitaladmin_doctor_cards1 flex'>


              <Hospitaladmin_doctor_card />
              <Hospitaladmin_doctor_card />
              <Hospitaladmin_doctor_card />


            </div>

            <div className='hospitaladmin_doctor_cards1 flex'>


              <Hospitaladmin_doctor_card />
              <Hospitaladmin_doctor_card />
              <Hospitaladmin_doctor_card />


            </div>
            <div className='hospitaladmin_doctor_cards1 flex'>


              <Hospitaladmin_doctor_card />
              <Hospitaladmin_doctor_card />
              <Hospitaladmin_doctor_card />


            </div>
          </div>

          <div className='hospitaladmin_doctor_list_button flex'>
            <a href=""><h4>Add Doctor</h4></a>
          </div>

        </div>



      </div>
    </div>
  )
}

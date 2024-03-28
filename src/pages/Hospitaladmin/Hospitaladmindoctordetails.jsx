import React from 'react'
import Hospitaladminnotification from '../../components/Hospitaladminnotification'
import Rightnavbar from '../../components/Rightnavbar'
import '../Hospitaladmin/hospitaladmindoctordetails.css'

export default function Hospitaladmindoctordetails() {
  return (

    <div>
      <div className="hospitaladmin-main flex">


        <Rightnavbar />

        <div className="hospitaladmin_right">

          <Hospitaladminnotification />

          <div className='hospital_admin_details_sectionmain flex'>


            <div className='hospital_admin_details_section2 flex'>

              <div className='hospital_admin_details_image2'>

                <img src="images/hosptal1 (1).jpg" alt="" />




              </div>

              <div className="hospital-right-admin2 flex">
                <div className='hospital_admin_details_data2'>



                  <h2>Dr.Anil Yadhav</h2>
                  <h4>Dr.Anil Yadav says "I am a hard working and have good clinical experience and work in prestigious institute AIIMS and Safdarjung Hospital".</h4>




                </div>

                <div className='hospital_admin_details_contact2 flex'>
                  <h4><i class="ri-phone-fill"></i> +91 89753 89399 </h4>

                  <h4><i class="ri-mail-fill"></i> empireshospital@gmail.com</h4>
                </div>

              </div>
            </div>



            <div className='hospital_admin_time_section'>




            </div>





            <div className='hospital_admin_data_section flex'>


              <div className='hospital_admin_data_section2'>
                <h4>
                  MBBS,M.D(Phychiatry)
                </h4>

                <h4>
                  16 Year Experience
                </h4>
              </div>


              <div className='hospital_admin_data_section2'>
                <h4>
                  Male
                </h4>

                <h4>
                  DF8975G76
                </h4>
              </div>


              <div className='hospital_admin_data_section2'>
                <h4>
                  Allopathy
                </h4>

                <h4>
                  Psychiatrist
                </h4>
              </div>




            </div>




            <div className='hospital_admin_data_section_button flex'>

              <a href=""><h4>Edit</h4></a>

            </div>

          </div>



        </div>


      </div>

    </div>

  )
}

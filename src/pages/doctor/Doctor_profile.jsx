import React from 'react'
import '../doctor/doctor-profile.css'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default function Doctor_profile() {
  return (
    <div>
 <Navbar/>
 <div className="container">
    <div className="doctor-profile-section">

      <div className="doctor-profile-photo">
        <img src="images/doc.jpg" alt="" />
      </div>

  
  <div className="doctor-profile-left-right flex">
  <div className="doctor-profile-left flex">
     <h2 style={{color:'white'}}>Dr.Rohith Rajashekehar</h2>
     <div className="doctorprofilestar flex">

                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />


     </div>

     <h4>BDS.MDS-Prosthodontist</h4>
     <h4>6 Year Experience</h4>
     <h4>Dentist,Cosmetic</h4>

    

</div>



<div className="doctor-profile-right">
      <h4>
      Dr. Rohith Rajashekhar is a Dentist,Restorative Dentist and Cosmetic/Aesthetic Dentist in T Dasarahalli, Bangalore and has an experience of 6 years in these fields. Dr. Rohith Rajashekhar practices at Partha Dental Skin Hair in T Dasarahalli, Bangalore. He completed BDS from Rajiv Gandhi University of Health Sciences in 2017 and MDS - Prosthodontist And Crown Bridge from Rajiv Gandhi University of Health Sciences in 2022.
      </h4>

    

</div>



  </div>

  <div className="doctor-profile-contact flex">

         

        <div className="doctor-time flex">
          <h4>Available : 9.00 - 4.00pm</h4>
        </div>

        <div className="doctor-contact-button flex">
          
          <a href=""><h4 className='flex'><div><i class="ri-phone-line"></i></div>Contact</h4></a>
        </div>







  </div>

    </div>
 </div>


 <Footer />


    </div>

  )
}

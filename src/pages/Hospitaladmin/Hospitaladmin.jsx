import React from 'react'
import '../Hospitaladmin/hospitaladmin.css'
import Rightnavbar from '../../components/Rightnavbar'
import Hospitaladminnotification from '../../components/Hospitaladminnotification'

export default function Hospitaladmin() {
  return (
    <div>


        <div className="hospitaladmin-main flex">


            {/* <div className="hospitaladmin_left flex">
                   <div className="hospitaladmin_image_title flex">
                    <img src="images/doc.jpg" alt="" />
                    <h2>Hospital Name</h2>

                   </div>

                   <div className="hospitaladmin_navlinks">

                    <h4>Dashboard</h4>
                    <h4>Hospital</h4>
                    <h4>Doctors</h4>
                    <h4>Settings</h4>
                    
                    </div>

                    <div className="hospitaladmin_logout">

                      <h2>Logout</h2>
                    
                    </div>
            </div> */}
 <Rightnavbar />

            <div className="hospitaladmin_right"> 

              {/* <div className="goodday flex">
                <h2>Good Day,</h2>
                <div><i class="ri-notification-3-fill"></i></div>
              </div> */}

              <Hospitaladminnotification />

              <div className='manage flex'>
                <div className="hospitaladmin_title flex">
               <h1>Manage Your</h1>
               <h1 className='color-blue'>Hospital</h1>
                </div>

                <div className="hospitaladmin_cards flex">

                    <a href='' className="hospitaladmin_card hospitaladmin_card1 flex">

                      <div>
                            <div className='hospitaladmin_number hospitaladmin_number1 flex' ><h2>24</h2></div>
                      </div>

<div>
  <h4>Enquiries</h4>
</div>
                    </a>

                    <a href='' className="hospitaladmin_card hospitaladmin_card2 flex">

<div>
      <div className='hospitaladmin_number hospitaladmin_number2 flex' ><h2>24</h2></div>
</div>

<div>
<h4>Enquiries</h4>
</div>
</a>


                <a href='' className="hospitaladmin_card hospitaladmin_card3 flex">

                      <div>
                            <div className='hospitaladmin_number hospitaladmin_number3 flex' ><h2>24</h2></div>
                      </div>

<div>
  <h4>Enquiries</h4>
</div>
                    </a>   


                </div>

              </div>

            <div className='hospitaladmin_images flex' >

            <img src="images/hos.jpeg" alt="" />
            <img src="images/hosptal1 (1).jpg" alt="" />
            <img src="images/hosptal1 (2).jpg" alt="" />
            <img src="images/hosptal1 (3).jpg" alt="" />
            </div>


            </div>


        </div>






    </div>
  )
}

import React from 'react'
import '../Mainadminprofile/mainadminprofile.css'

export default function Mainadminprofile() {
  return (
    <div>


      <div className="mainadminprofilecard">

        <div className="mainadminprofilenamecard flex">
            
        <div className="mainadminprofilenamecardleft flex">
        <img src="../images/man.jpg" alt="" />
                <div style={{marginLeft: "20px"}}>
                  <h4>Amal lal</h4>
                  <h4 className="admintype">Super Admin</h4>
                </div>
            


            </div>

                     
        <div className="mainadminprofilenamecardright flex">
            <div className="editadminprofile flex" >
            <i class="ri-pencil-line"></i>
            </div>
            


            </div>
    


        </div>

        <div className="mainadminprofilecontactcard">
                   <div className='flex texticonset'>
                                        <i class="fi fi-sr-call-outgoing"></i>
                                        <h4 style={{marginLeft:"10px"}}>+91 9878898346</h4>
    
                   </div>

                   <div className='flex texticonset'>
                                    <i class="fi fi-sr-envelope"></i>
                                    <h4 style={{marginLeft:"10px"}}>anilyadhav@gmail.com</h4>
                  </div>
                                
                
             
            

        </div>

<div className="adminmenuprofile flex">
<i class="ri-vip-crown-line"></i>
<h4 style={{marginLeft:"10px"}}>Admins</h4>
</div>

<div className="adminmenuprofile flex">
<i class="ri-settings-line"></i>
<h4 style={{marginLeft:"10px"}}>Settings</h4>
</div>

<div className="adminmenuprofile flex">
<i class="ri-edit-2-line"></i>
<h4 style={{marginLeft:"10px"}}>Edit Category</h4>
</div>

<div style={{color:"#C45050"}} className="adminmenuprofile flex">
<i class="ri-logout-box-line"></i>
<h4 style={{marginLeft:"10px"}}>Logout</h4>
</div>







      </div>
        







    </div>
  )
}

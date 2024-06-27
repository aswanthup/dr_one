import React from 'react'
import '../Mainadmin/mainadmin.css'

export default function Adminlist() {
  return (
    <div>
           <div style={{marginTop:"1.3vw"}} className='flex admin_view_more'>
    <h3>Admins</h3>
    <h4>Add New Admins<i style={{marginLeft:"0.5vw"}} class="ri-add-circle-line"></i></h4>
    </div >
          <div className="admincard">
               <div className="adminlistnamesection flex">

                <img src="../images/man.jpg" alt="" />
                <div style={{marginLeft: "20px"}}>
                  <h4>Amal lal</h4>
                  <h4 className="admintype">Super Admin</h4>
                </div>

               </div>
               <div className="adminlistdatasection">
                   <div className='flex texticonset'>
                                        <i class="fi fi-sr-call-outgoing"></i>
                                        <h4 style={{marginLeft:"10px"}}>+91 9878898346</h4>
    
                   </div>

                   <div className='flex texticonset'>
                                    <i class="fi fi-sr-envelope"></i>
                                    <h4 style={{marginLeft:"10px"}}>anilyadhav@gmail.com</h4>
                                </div>
                                
                
               </div>
               <div className="adminlistbuttonsection flex">
                  
                  <button style={{backgroundColor:"#F35454"}}  className='flex'>
                    Remove
                  </button>

                  <button style={{backgroundColor:"#2A9D8F"}}  className='flex'>
                    Edit
                  </button>

                
               </div>

          </div>
          







    </div>
  )
}

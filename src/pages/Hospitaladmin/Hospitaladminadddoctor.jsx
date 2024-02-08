 import React from 'react'
import '../Hospitaladmin/hospitaladminadddoctor.css'

export default function Hospitaladminadddoctor() {
  return (
    <div>
    
    <div className='adddoctor flex'>
 
          <div>
                  <h1>Add Doctor</h1>
          </div>


        
          <div className='adddoctor_inputsection flex'>



          <div className='adddoctor_inputsection1 flex'>

               <h2>Name</h2>
               <input type="text" />

               <h2>Photo</h2>

               <div className='flex upload_button'> <input type="text" /> <h4 className='flex upload_button2 ' >Upload</h4> </div>
      



               <h2>Qulification</h2>
               <input type="text" />

               <h2>Experience</h2>
               <input type="text" />
             

          </div>

          <div className='adddoctor_inputsection1 flex'>

          <h2>Email</h2>
               <input type="text" />

               <h2>Phone Number</h2>
               <input type="text" />

               <h2>Gender</h2>
               <input type="text" />

               <h2>Registration Number</h2>
               <input type="text" />

          </div>

<div className='adddoctor_inputsection1 flex'>

<h2>About</h2>
              <textarea name="" id="" cols="30" rows="10"></textarea>

               

               <h2>Type</h2>
               <input type="text" />

               <h2>Specialization</h2>
               <input type="text" />

</div>
      
          </div>


          <div className='adddoctor_button flex'>
            <a href="" className='demo'><h4>Cancel</h4></a>
                   <a href=""><h4>Next</h4></a>
          </div>

    </div>

    </div>
  )
}

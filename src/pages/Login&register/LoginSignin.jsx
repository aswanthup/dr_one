import React from 'react'
import '../Login&register/login.css'

export const LoginSignin = () => {
  return (
    <div>
    <div className="main-login flex">
 <div className="pngdiv pngdiv1">
   <img src="images/Group 69.png" alt="" />
 </div>

  
 <div className="login-image-section flex">
   <div className="login-first-image">
     <img src="images/doc.jpg" alt="" />
   </div>
   <div className="login-second-image flex">
     <img src="images/lab.jpg" alt="" />
     <img src="images/med.jpg" alt="" />
   </div>
 </div>
 <div className="pngdiv pngdiv2">
   <img src="images/Group 70.png" alt="" />
 </div>
 <div className="flex" style={{alignItems: 'center', justifyContent: 'center'}}>
   
   
   <div className="login-form flex">
  
     <div className="flex input-box-section">
     <div>
       <h1 style={{color: 'white'}}>Login</h1>
     </div>
       <div>
         <h4>User Name</h4>
         <input type="text" />
       </div>  
       <div>
         <h4>Password</h4>
         <input type="password" />
       </div> 
<div className='forgot-password flex'>
  <a href="">
       <h4>Forgot Password.?</h4> </a>
       </div>
     </div>
     <div className="login-button-section flex">
       <a href='/register' className="flex">
         <h4>Create account</h4>
       </a>
       <a href='/' className="flex">
         <h4>Login Now</h4>
       </a>
     </div>
   </div>



 </div>
 <div className="pngdiv pngdiv3 flex">
   <div>
     <img src="images/Group 71.png" alt="" />
   </div>
 </div>
</div>

</div>
  )
}

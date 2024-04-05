import React, { useContext, useEffect, useState } from "react";
import "../Hospitaladmin/hospitaladminregistration1.css";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../contexts/Contexts";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from "react-toastify";

export default function Labadminregistration1() {
  const navigate = useNavigate()
  const { LabAdminRg, setLabAdminRg } = useContext(MyContext)
  const [Errors, setErrors] = useState({
  })

  const toastifyFun = (value) => {
    toast.info(value, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  // add data to state

  const inputOnchanges = (e) => {
    const { value, name } = e.target
    setLabAdminRg({ ...LabAdminRg, [name]: value })
  }

  useEffect(() => {
    checkErrors()
  }, [LabAdminRg])

  // checking the erros

  const nextPage = () => {
    if (LabAdminRg?.name && LabAdminRg?.contact_no && LabAdminRg?.password && LabAdminRg?.email && LabAdminRg?.repassword) {
      if (!Errors.password && !Errors.email && !Errors.contact_no && !Errors.password && !Errors.repassword) {
        navigate("/labadminregistration2")
      }
    } else {
      toastifyFun("All fields are required")
    }
    return checkErrors()
  }
  const checkErrors = () => {
    const errors = {};

    const Passwordpattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&]).{6,}$/;
    const EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PhonePattern = /^[0-9]{10}$/;

    if (LabAdminRg?.password && !Passwordpattern.test(LabAdminRg.password)) {
      errors.password = "Password must contain at least 1 uppercase letter, 1 number, 1 special character (@.#$!%*?&), and be at least 6 characters long.";
    }

    if (LabAdminRg?.email && !EmailPattern.test(LabAdminRg.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (LabAdminRg?.contact_no && !PhonePattern.test(LabAdminRg.contact_no)) {
      errors.phone = "Please enter a valid phone number.";
    }

    if (LabAdminRg?.password && LabAdminRg?.repassword && LabAdminRg.password !== LabAdminRg.repassword) {
      errors.repassword = "Passwords do not match.";
    }

    setErrors(errors);
  };
  console.log("LabAdminRg>>>>", LabAdminRg)
  return (
    <div>
      <ToastContainer />
      <div>
        <div className="main-register flex">
          <div className="register-png-div">
            <img src="images/Group 72.png" alt="" />
          </div>
          <div className="registration-form">
            <div>
              <h1 style={{ color: "white" }}>Laboratory Register</h1>
            </div>
            {/* <label className="photo-upload">
             <h4>Upload Photo</h4>
                <input type="file" />
             </div> */}



             

            {/* <div id="hospitalname_inputId" className="hospitalname_input">
              <h4>Laboratory Name</h4>
              <input value={LabAdminRg?.name} onChange={inputOnchanges} name="name" type="text" />
           
              <div className="main-waring-section">
              </div>
            </div> */}


<div className="flex hospital-top">



<div className="upload-image">

  <h4 className="pass-con">Profile Photo</h4>
  <label for="inputTag">
    <h4 className="select-file flex">Upload Photo</h4>
    <input onChange={''} id="inputTag" type="file" />
  </label>


</div>

{/* <label className="photo-upload">
 <h4>Upload Photo</h4>
    <input type="file" />
 </div> */}






<div className="hospitalname_input">
  <h4 className="pass-con">Laboratory Name</h4>
  <input value={LabAdminRg?.name} onChange={inputOnchanges} name="name" type="text" />

</div>
</div>


<div className="main-waring-section" style={{overflow:"Hidden"}}>
              <h4 className="register-number-warning" id="fileNameDisplay"> {' '} </h4>
            </div>








            <div className="register-input-section">



              <div className=" register-left-section flex">



                <div style={{ position: "relative" }}>
                  <h4 className="pass-con">Phone Number</h4>
                  <input value={LabAdminRg?.contact_no} onChange={inputOnchanges} name="contact_no" type="number" />
                  
                  <div className="main-waring-section">
                  <p className="register-number-warning">{Errors?.phone}</p>
                  </div>
                </div>




                <div style={{ position: "relative" }}>
                  <h4 className="pass-con">Email</h4>
                  <input value={LabAdminRg?.email} pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" name="email" onChange={inputOnchanges} type="email" />
                  
                  
                  <div className="main-waring-section">
                  <p className="register-number-warning">{Errors?.email}</p>
                  </div>


                </div>



              </div>



              <div className="register-right-section  flex">



                <div style={{ position: "relative" }}>
                  <h4 className="pass-con">Password</h4>
                  <input value={LabAdminRg.password} name="password" onChange={inputOnchanges} type="password" />
                  
                  
                  <div className="main-waring-section main-waring-section-pass">
                  <p className="register-number-warning">{Errors?.password}</p>

                  </div>
                </div>



                <div style={{ position: "relative" }}>
                  <h4 className="pass-con">Confirm Password</h4>
                  <input value={LabAdminRg.repassword} name="repassword" onChange={inputOnchanges} type="password" />
                 
                  <div className="main-waring-section">
                  <p className="register-number-warning">{Errors?.repassword}</p>
                  </div>
                </div>



              </div>






            </div>




            <div
              className="register-button-section flex"
            >
              <a onClick={() => { nextPage() }} className="flex" style={{ cursor: "pointer" }}>
                <h4>Next</h4>
              </a>
            </div>
          </div>
          <div className="register-png-div2 register-png-div flex">
            <img src="images/Group 73.png" alt="" />
          </div>
        </div>
      </div>
    </div >
  )
}

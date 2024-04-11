import React, { useContext, useEffect, useState } from "react";
import "../Hospitaladmin/hospitaladminregistration1.css";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../contexts/Contexts";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from "react-toastify";
import { IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Labadminregistration1() {
  const navigate = useNavigate()
  const { LabAdminRg, setLabAdminRg } = useContext(MyContext)
  const [Errors, setErrors] = useState({
  })
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

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

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowRePassword = () => setShowRePassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownRePassword = (event) => {
    event.preventDefault();
  };


  // add data to state

  const inputOnchanges = (e) => {
    const { value, name } = e.target
    if (name === "contact_no") {
      const sanitizedValue = value.replace(/[.-]/g, '');
      const truncatedValue = sanitizedValue.slice(0, 10);
      setLabAdminRg({ ...LabAdminRg, [name]: truncatedValue });
    } else if (name === "password") {
      const trimmedValue = value.trim();
      setLabAdminRg({ ...LabAdminRg, [name]: trimmedValue });
    } else {
      setLabAdminRg({ ...LabAdminRg, [name]: value });
    }
  }

  useEffect(() => {
    checkErrors()
  }, [LabAdminRg])
  console.log(LabAdminRg)
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
                  <h4 className="select-file select-file2 flex">Upload Photo</h4>
                  <input onChange={''} id="inputTag" type="file" />
                </label>


              </div>

              {/* <label className="photo-upload">
 <h4>Upload Photo</h4>
    <input type="file" />
 </div> */}


              <div className="hospitalname_input">
                <h4 className="pass-con">Laboratory Name</h4>
                <input
                  maxLength={100}
                  value={LabAdminRg?.name} onChange={inputOnchanges} name="name" type="text" />

              </div>
            </div>


            <div className="main-waring-section" style={{ overflow: "Hidden" }}>
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
                  <input
                    maxLength={50}
                    value={LabAdminRg?.email} pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" name="email" onChange={inputOnchanges} type="email" />
                  <div className="main-waring-section">
                    <p className="register-number-warning">{Errors?.email}</p>
                  </div>


                </div>



              </div>



              <div className="register-right-section  flex">



                <div style={{ position: "relative" }}>
                  <h4 className="pass-con">Password</h4>
                  <div
                    style={{
                      position: "relative",

                    }}
                    className="pass-con-Inp"
                  >
                    <input
                      maxLength={50}
                      value={LabAdminRg?.password} name="password" onChange={inputOnchanges}
                      style={{
                        margin: 0,
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "100%",
                        width: "calc(100% - 2px)",
                        padding: "0 10px",
                        appearance: "none",
                        WebkitAppearance: "none",
                      }}
                      type={showPassword ? "text" : "password"}
                    />

                    <IconButton
                      sx={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        color: "#fafaf9",
                      }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownRePassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </div>

                  <div className="main-waring-section main-waring-section-pass">
                    <p className="register-number-warning">{Errors?.password}</p>

                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <h4 className="pass-con">Confirm Password</h4>
                  <div
                    style={{
                      position: "relative",

                    }}
                    className="pass-con-Inp"
                  >
                    <input
                      maxLength={50}
                      value={LabAdminRg?.repassword} name="repassword" onChange={inputOnchanges}
                      style={{
                        margin: 0,
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "100%",
                        width: "calc(100% - 2px)",
                        padding: "0 10px",
                        appearance: "none",
                        WebkitAppearance: "none",
                      }}
                      type={showRePassword ? "text" : "password"}
                    />

                    <IconButton
                      sx={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        color: "#fafaf9",
                      }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowRePassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showRePassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </div>
                  <div className="main-waring-section">
                    <p className="register-number-warning">{Errors?.repassword}</p>
                  </div>
                </div>

              </div>

            </div>
            <div
              className="register-button-section flex"
            >
              <button type="button" onClick={() => { nextPage() }} className="flex" style={{ cursor: "pointer" }}>
                <h4>Next</h4>
              </button>
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

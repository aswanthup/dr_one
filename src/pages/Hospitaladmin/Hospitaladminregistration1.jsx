import React, { useContext, useEffect, useState } from "react";
import "../Hospitaladmin/hospitaladminregistration1.css";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../contexts/Contexts";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from "react-toastify";
import { IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
export default function Hospitaladminregistration1() {
  const [fileName, setFileName] = useState("No file selected");
  const navigate = useNavigate()
  const { HospitalAdminRg, setHospitalAdminRg } = useContext(MyContext)
  const [Errors, setErrors] = useState({
  })
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const isImage = selectedFile.type.startsWith("image/");
      if (isImage) {
        setFileName(selectedFile.name);
        // Process the image file or perform additional actions if needed
      } else {
        alert("Please select a valid image file.");
        // Optionally, you can clear the file input
        event.target.value = null;
      }
    } else {
      setFileName("No file selected");
    }
  };

  // toast
  console.log("HospitalAdminRg>>>>", HospitalAdminRg)
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
    setHospitalAdminRg({ ...HospitalAdminRg, [name]: value })
  }

  useEffect(() => {
    checkErrors()
  }, [HospitalAdminRg])

  // checking the erros

  const nextPage = () => {
    if (HospitalAdminRg?.name && HospitalAdminRg?.contact_no && HospitalAdminRg?.password && HospitalAdminRg?.email && HospitalAdminRg?.repassword) {
      if (!Errors.password && !Errors.email && !Errors.contact_no && !Errors.password && !Errors.repassword) {
        navigate("/hospitaladminregistration2")
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

    if (HospitalAdminRg?.password && !Passwordpattern.test(HospitalAdminRg.password)) {
      errors.password = "Password must contain at least 1 uppercase letter, 1 number, 1 special character (@.#$!%*?&), and be at least 6 characters long.";
    }

    if (HospitalAdminRg?.email && !EmailPattern.test(HospitalAdminRg.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (HospitalAdminRg?.contact_no && !PhonePattern.test(HospitalAdminRg.contact_no)) {
      errors.phone = "Please enter a valid phone number.";
    }

    if (HospitalAdminRg?.password && HospitalAdminRg?.repassword && HospitalAdminRg.password !== HospitalAdminRg.repassword) {
      errors.repassword = "Passwords do not match.";
    }

    setErrors(errors);
  };
  //  end checking

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowRePassword = () => setShowRePassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownRePassword = (event) => {
    event.preventDefault();
  };

  console.log("errorss>>>", Errors)

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
              <h1 style={{ color: "white" }}>Hospital Register</h1>
            </div>
            <div className="flex hospital-top">
              <div className="upload-image">

                <h4 className="pass-con">Profile Photo</h4>
                <label for="inputTag">
                  <h4 className="select-file flex">Upload Photo</h4>
                  <input onChange={handleFileChange} id="inputTag" type="file" />
                </label>


              </div>

              {/* <label className="photo-upload">
               <h4>Upload Photo</h4>
                  <input type="file" />
               </div> */}






              <div className="hospitalname_input">
                <h4 className="pass-con">Hospital Name</h4>
                <input value={HospitalAdminRg?.name} onChange={inputOnchanges} name="name" type="text" />

              </div>
            </div>



            <div className="main-waring-section main-waring-section-image " style={{ overflow: "Hidden" }}>
              <h4 className="register-number-warning" id="fileNameDisplay"> {fileName} </h4>
            </div>





            <div className="register-input-section">


              <div className="register-left-section flex">



                <div>
                  <h4 className="pass-con">Phone Number</h4>
                  <input value={HospitalAdminRg?.contact_no} onChange={inputOnchanges} name="contact_no" type="number" />

                  <div className="main-waring-section">



                    <p className="register-number-warning">{Errors?.phone}</p>

                  </div>

                </div>


                <div>
                  <h4 className="pass-con">Email</h4>
                  <input value={HospitalAdminRg?.email} pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" name="email" onChange={inputOnchanges} type="email" />

                  <div className="main-waring-section">
                    <p className="register-number-warning">{Errors?.email}</p>
                  </div>

                </div>
              </div>





              <div className="register-right-section flex">




                <div>
                  <h4 className="pass-con">Password</h4>
                  {/* <input type="password" /> */}
                  <div
                    style={{
                      position: "relative",
                     
                    }}
                    className="pass-con-Inp"
                  >
                    <input
                      value={HospitalAdminRg.password} name="password" onChange={inputOnchanges}
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
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </div>
                  <div className="main-waring-section main-waring-section-pass">
                    <p className="register-number-warning">{Errors?.password}</p>

                  </div>
                </div>



                <div >
                  <h4 className="pass-con">Confirm Password</h4>
                  {/* <input type="password" /> */}
                  <div
                    style={{
                      position: "relative",
                     
                    }}
                    className="pass-con-Inp"
                  >
                    <input
                  
                      value={HospitalAdminRg.repassword} name="repassword" onChange={inputOnchanges}
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
                      onClick={handleClickShowRePassword}
                      onMouseDown={handleMouseDownRePassword}
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
  );
}

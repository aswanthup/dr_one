import React, { useContext, useEffect, useState } from "react";
import "../Hospitaladmin/hospitaladminregistration1.css";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../contexts/Contexts";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from "react-toastify";
export default function Hospitaladminregistration1() {
  const [fileName, setFileName] = useState("No file selected");
  const navigate = useNavigate()
  const { HospitalAdminRg, setHospitalAdminRg } = useContext(MyContext)
  const [Errors, setErrors] = useState({
  })

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
            <div className="upload-image flex">
              <label for="inputTag">
                <h4 className="select-file">Upload Photo</h4>
                <input onChange={handleFileChange} id="inputTag" type="file" />
              </label>

              <h4 id="fileNameDisplay"> {fileName} </h4>
            </div>

            {/* <label className="photo-upload">
               <h4>Upload Photo</h4>
                  <input type="file" />
               </div> */}

            <div className="hospitalname_input">
              <h4>Hospital Name</h4>
              <input value={HospitalAdminRg?.name} onChange={inputOnchanges} name="name" type="text" />

            </div>

            <div className="register-input-section flex">
              <div className="register-left-section">
                <div>
                  <h4>Phone Number</h4>
                  <input value={HospitalAdminRg?.contact_no} onChange={inputOnchanges} name="contact_no" type="number" />
                  <p className="register-number-warning">{Errors?.phone}</p>
                </div>
                <div>
                  <h4>Email</h4>
                  <input value={HospitalAdminRg?.email} pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" name="email" onChange={inputOnchanges} type="email" />
                  <p className="register-number-warning">{Errors?.email}</p>
                </div>
              </div>
              <div className="register-right-section">
                <div>
                  <h4>Password</h4>
                  <input value={HospitalAdminRg.password} name="password" onChange={inputOnchanges} type="password" />
                  <p className="register-number-warning">{Errors?.password}</p>
                </div>
                <div>
                  <h4>Confirm Password</h4>
                  <input value={HospitalAdminRg.repassword} name="repassword" onChange={inputOnchanges} type="password" />
                  <p className="register-number-warning">{Errors?.repassword}</p>
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

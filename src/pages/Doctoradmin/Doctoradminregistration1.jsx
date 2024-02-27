import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyContext } from "../../contexts/Contexts";

export default function Doctoradminregistration1() {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState('No file selected');
  const { Data, setData } = useContext(MyContext);
  console.log("Data===", Data)
  const [validationErrors, setValidationErrors] = useState({});
  console.log("validationErrors", validationErrors)
  const handleFileChange = (event) => {
    const selectedFile = event.target?.files[0];

    if (selectedFile) {
      const isImage = selectedFile.type.startsWith('image/');
      if (isImage) {
        alert("kkkk")
        setFileName(selectedFile.name);
        setData({ ...Data, "image": selectedFile.name })
        // Process the image file or perform additional actions if needed
      } else {
        alert('Please select a valid image file.');
        // Optionally, you can clear the file input
        event.target.value = null;
      }
    } else {
      setFileName('No file selected');
      setData('No file selected')
    }
  };
  //   const handleChange = (e) => {  
  //     const { name, value } = e.target;
  //     setData({
  //         ...Data,
  //         [e.target.name]: e.target.value
  //     });

  //     setValidationErrors({ ...validationErrors, [e.target.name]: '' });

  //     if (name === 'password' && value.length < 6) {
  //       setValidationErrors({ ...validationErrors, [name]: 'Password must be at least 6 characters long' });
  //     }

  //     // Validate confirm password
  //     if (name === 'confirmPassword' && value !== Data.password) {
  //       setValidationErrors({ ...validationErrors, [name]: 'Passwords do not match' });
  //     }

  //     if (name === 'email') {
  //       setValidationErrors(value);
  //       if (!validateEmail(value)) {
  //         setValidationErrors('Please enter a valid email address.');
  //       } else {
  //         setValidationErrors('');
  //       }
  //     }


  // };
  // const validateEmail = (email) => {
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return regex.test(email);
  // };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...Data,
      [e.target.name]: e.target.value
    });

    setValidationErrors({ ...validationErrors, [e.target.name]: '' });

    if (name === 'password' && value.length < 6) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'Password must be at least 6 characters long'
      }));
    }

    // Validate confirm password
    if (name === 'confirmPassword' && value !== Data.password) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'Passwords do not match'
      }));
    }

    if (name === 'email') {
      if (!validateEmail(value)) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: 'Please enter a valid email address.'
        }));
      } else {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: ''
        }));
      }
    }


    if (name === 'phone') {
      if (!/^\d+$/.test(value)) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: 'Please enter only digits.'
        }));
      } else if (value.length !== 10) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: 'Phone number must be exactly 10 digits.'
        }));
      } else {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: ''
        }));
      }
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };


  const handleClick = () => {
    navigate('/doctoradminregistration2', { state: Data });
  };

  console.log(Data)




  return (


    <div>
      <div>
        <div className="main-register flex">
          <div className="register-png-div">
            <img src="images/Group 72.png" alt="" />
          </div>
          <div className="registration-form">
            <div>
              <h1 style={{ color: 'white' }}>Register</h1>
            </div>
            <div className='upload-image flex'>
              <label for="inputTag">
                <h4 className='select-file'>Upload Photo</h4>
                <input onChange={handleFileChange} id="inputTag" type="file" />
              </label>

              <h4 id="fileNameDisplay"> {Data?.image} </h4>
            </div>

            {/* <label className="photo-upload">
               <h4>Upload Photo</h4>
                  <input type="file" />
               </div> */}

            <div className="register-input-section flex">
              <div className="register-left-section">
                <div>
                  <h4>Name</h4>
                  <input type="text" name='name' value={Data?.name} onChange={handleChange} />
                </div>
                <div>
                  <h4>Second Name</h4>
                  <input type="text" name='secondname' value={Data?.secondname} onChange={handleChange} />
                </div>
                <div>
                  <h4>Number</h4>
                  <input type="text" maxLength={10} name='phone' value={Data?.phone} onChange={handleChange} />
                  {validationErrors.phone && <p style={{ fontSize: "1rem" }}>{validationErrors.phone}</p>}
                </div>
              </div>
              <div className="register-right-section">
                <div>
                  <h4>Email</h4>
                  <input type="email" name='email' value={Data?.email} onChange={handleChange} pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" />
                  {validationErrors.email && <p style={{ fontSize: "1rem" }}>{validationErrors.email}</p>}
                </div>
                <div>
                  <h4>Password</h4>
                  <input type="password" name='password' value={Data?.password} onChange={handleChange} />
                  {validationErrors.password && <p style={{ fontSize: "1rem" }}>{validationErrors.password}</p>}
                </div>
                <div>
                  <h4>Confirm Password</h4>
                  <input type="text" name='confirmPassword' value={Data?.confirmPassword} onChange={handleChange} />
                  {validationErrors.confirmPassword && <p style={{ fontSize: "1rem" }}>{validationErrors.confirmPassword}</p>}
                </div>
              </div>
            </div>
            <div className="register-button-section flex">
              <a className="flex" onClick={handleClick}><h4>Next</h4></a>
            </div>
          </div>
          <div className="register-png-div2 register-png-div flex">
            <img src="images/Group 73.png" alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}

import React, { useContext, useEffect, useState } from 'react'
import '../Hospitaladmin/hospitaladminregistration2.css'
import { MyContext } from '../../contexts/Contexts'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify'
import { port } from '../../config'
import '../Labadmin/Labadminregistration2.css'
import { DesktopTimePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { Backdrop, CircularProgress } from '@mui/material'

export default function Labadminregistration2() {
  const { LabAdminRg, setLabAdminRg } = useContext(MyContext)
  const [Errors, setErrors] = useState({})
  const [loader, setloader] = useState(false)
  const navigate = useNavigate()

  const Services = [
    { name: "Blood Count Tests" },
    { name: "Genetic Testing" },
    { name: "Kidney Tests" },
    { name: "Laboratory Tests" },
    { name: "Prenatal Testing" },
    { name: "Thyroid Tests" },
    { name: "Bilirubin Test" },
    { name: "Cholesterol Level" },
    { name: "Electrocardiogram" },
  ]
  const Features = [
    { name: "Home collection" },
    { name: "Onilne report" },
    { name: "Cashless" },
    { name: "24 hours services" },
    { name: "Doctor available" },

  ]

  useEffect(() => {
    if (!LabAdminRg?.name && !LabAdminRg?.contact_no && !LabAdminRg?.password && !LabAdminRg?.email && !LabAdminRg?.repassword) {
      navigate("/labadminregistration1")
    }
  }, [])

  const toastifyFun = (value, success) => {
    if (!success?.success) {
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
    } else {
      toast.success(value, {
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

  }

  const inputChanges = (e) => {
    const name = e.target.name
    const value = e.target.value
    setLabAdminRg({ ...LabAdminRg, [name]: value })
  }
  const TimeSetting = (e, name) => {
    const value = dayjs(e).format('hh:mm A')
    console.log(name, value);
    setLabAdminRg({ ...LabAdminRg, timing: { ...LabAdminRg.timing, [name]: value } });
  }
  useEffect(() => {
    CheckValidation()
  }, [LabAdminRg.pincode])


  const storeArray = (e, which) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    let Services = [...LabAdminRg?.Services || []];
    let features = [...LabAdminRg?.features || []];

    if (which.Services) {
      if (isChecked) {
        Services.push(value);
      } else {
        Services = Services.filter(spec => spec !== value);
      }
    } else {
      if (isChecked) {
        features.push(value);
      } else {
        features = features.filter(feat => feat !== value);
      }
    }

    setLabAdminRg({ ...LabAdminRg, features: features, Services: Services });
  };


  const Finish = () => {

    if (LabAdminRg?.pincode && LabAdminRg?.about && LabAdminRg?.lisence_no && LabAdminRg?.features?.length > 0 && LabAdminRg?.Services?.length > 0 && !Errors?.pincode && LabAdminRg?.timing?.opening_time && LabAdminRg?.timing?.closing_time) {
      setloader(true)
      CheckValidation()
      axios.post(`${port}/lab/addlab`, LabAdminRg).then((res) => {
        console.log(res)
        if (res?.data?.success) {
          toastifyFun(res?.data?.message, { success: true })
          window.location.reload()
          setloader(false)
        }
      }).catch((err) => {
        console.log(err)
        setloader(false)
        toastifyFun(err?.response?.data?.message, { info: true })
      })
    } else {
      setloader(false)
      toastifyFun("All fields are mandatory", { info: true })
    }
  }

  const CheckValidation = () => {
    const Pincode = /^\d{6}$/;
    if (LabAdminRg?.pincode) {

      if (!Pincode.test(LabAdminRg?.pincode)) {
        setErrors({ ...Errors, pincode: "Not a valid 6-digit number" })
      } else {
        setErrors({ ...Errors, pincode: "" })

      }
    }

  }

  const handleClose = () => {
    setloader(false)
  }
  console.log("LabAdminRg>>>>>>>", LabAdminRg)
  return (

    <div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={loader}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <ToastContainer />

      <div className='hospitaladminregistration2 flex'>

        <h1>Laboratory Registration</h1>
        <div className='hospitaladminregistration_first flex'>
          <div className='image_card_ho_ad flex'>
            <h4>Add Photos</h4>
            <div className='image_card_ho_ad2 flex' >
              <div className='image_card_ho_ad_section flex'>

                <img src="images/hosptal1 (1).jpg" alt="" />
                <img src="images/hosptal1 (1).jpg" alt="" />
                <img src="images/hosptal1 (1).jpg" alt="" />
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="fileInput"
                />
                <label htmlFor="fileInput">
                  <div className='image_card_ho_ad_add_image flex'>
                    <i class="ri-add-line"></i>
                  </div>
                </label>
              </div>
              <div>
                <h4>License Number</h4>
                <input value={LabAdminRg?.lisence_no || ''} onChange={inputChanges} type="text" name='lisence_no' />
              </div>
            </div>

          </div>

          <div>
            <h4>Features</h4>
            <div className='Features_card_ho_ad flex'>
              <div className='Features_card_ho_ad_check '>
                {Features.map((ele) =>
                  <label class="form-control flex">
                    <input value={ele?.name || ''}
                      checked={LabAdminRg?.features?.includes(ele.name)}
                      onChange={(e) => { storeArray(e, { features: true }) }} type="checkbox" name="checkbox" />
                    <h4>{ele.name}</h4>
                  </label>
                )}
              </div>
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <div className='Features_card_ho_ad flex'>
              <div className='Features_card_ho_ad_check '>
                {Services.map((ele) =>
                  <label class="form-control flex">
                    <input
                      value={ele?.name}
                      checked={LabAdminRg?.Services?.includes(ele.name)}
                      onChange={(e) => { storeArray(e, { Services: true }) }}
                      type="checkbox"
                      name="checkbox"
                    />
                    <h4>{ele.name}</h4>
                  </label>
                )}
              </div>
            </div>


          </div>

        </div>


        <div className='Labregistration_second flex' >
          <div className='LabPinType'>
            <div className='LabPinTypeDiv'>
              <h4>Pincode</h4>
              <input className='hospitalAdminInput' value={LabAdminRg?.pincode || ''} onChange={inputChanges} type="number" maxLength={6} name="pincode" />
              <p className="register-number-warning">{Errors?.pincode}</p>
            </div>
            <div className='LabAdminPin'>
              <div className='LabAdminPinTimePic'>
                <h4>Opening Time</h4>
                <DesktopTimePicker className='hospitalAdminPinTimePic' onChange={(e) => { TimeSetting(e, "opening_time") }} />
              </div>
              <div className='LabAdminPinTimePic'>
                <h4>Closing Time</h4>
                <DesktopTimePicker className='hospitalAdminPinTimePic' onChange={(e) => { TimeSetting(e, "closing_time") }} />
              </div>
            </div>
          </div>

          <div className='LabPinTypeDiv'>
            <h4>About</h4>
            <textarea value={LabAdminRg?.about || ''} onChange={inputChanges} name="about" id="" cols="30" rows="10"></textarea>
          </div>

          <div className='LabPinTypeDiv'>
            <h4>Address</h4>
            <textarea value={LabAdminRg?.address || ''} onChange={inputChanges} name="address" id="" cols="30" rows="5"></textarea>
          </div>
        </div>

        <div className='ho_ad_re_button flex'>
          <a onClick={Finish} ><h4>Finish</h4></a>
        </div>

      </div>
    </div>



  )
}

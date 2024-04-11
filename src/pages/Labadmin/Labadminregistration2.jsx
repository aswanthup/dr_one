import React, { useContext, useEffect, useState } from 'react'
import '../Hospitaladmin/hospitaladminregistration2.css'
import { MyContext } from '../../contexts/Contexts'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify'
import { port } from '../../config'
import '../Labadmin/Labadminregistration2.css'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs'
import { Backdrop, CircularProgress, Modal } from '@mui/material'

export default function Labadminregistration2() {
  const { LabAdminRg, setLabAdminRg } = useContext(MyContext)
  const [Errors, setErrors] = useState({})
  const [loader, setloader] = useState(false)
  const navigate = useNavigate()
  const [ModalOpen, setModalOpen] = useState({
    features: false,
    services: false
  })
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
    } else {
      setLabAdminRg({ ...LabAdminRg, timing: { closing_time: '06:00 PM', opening_time: '10:00 AM' } })
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
  const updatePosts = (pinCode) => {
    if (pinCode.length === 6) {
      axios
        .get(`https://api.postalpincode.in/pincode/${pinCode}`)
        .then((res) => {
          console.log("res.data[0]?.PostOffice", res.data[0]?.PostOffice);
          if (res.data[0]?.PostOffice?.length > 0) {
            setLabAdminRg({ ...LabAdminRg, pincode: pinCode, location: res.data[0]?.PostOffice })
          } else {
            toast.info("Pincode not found")
          }
        });
    } else {
      console.log("pincode should be 6 digits");
    }
  };
  const inputChanges = (e) => {
    const { name, value } = e.target
    if (name === "pincode") {
      if (value.length === 6) {
        updatePosts(value);
      } else {
        setLabAdminRg(prevState => {
          const newState = { ...prevState };
          delete newState.location;
          return newState;
        });
      }
    }
    setLabAdminRg({ ...LabAdminRg, [name]: value })
  }
  const TimeSetting = (e, name) => {
    const value = dayjs(e)?.format('hh:mm A')
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
    if (LabAdminRg?.pincode && LabAdminRg?.about && LabAdminRg?.lisence_no && LabAdminRg?.features?.length > 0 && LabAdminRg?.Services?.length > 0 && !Errors?.pincode && LabAdminRg?.timing?.opening_time && LabAdminRg?.timing?.closing_time && LabAdminRg?.place) {
      setloader(true)
      CheckValidation()
      axios.post(`${port}/lab/addlab`, LabAdminRg).then((res) => {
        console.log(res)
        if (res?.data?.success) {
          toastifyFun(res?.data?.message, { success: true })
          setLabAdminRg('')
          setTimeout(() => {
            navigate("/")
          }, 1000);
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
        setLabAdminRg(prevState => {
          const newState = { ...prevState };
          delete newState.location;
          return newState;
        });
      } else {
        setErrors({ ...Errors, pincode: "" })
      }
    }

  }
  console.log("LabAdminRg>>>>", LabAdminRg)
  const openModal = (data) => {
    if (data?.services) {
      setModalOpen({ services: true })
    } else {
      setModalOpen({ features: true })
    }
  }
  const CloseModal = () => {
    setModalOpen({ services: false, features: false })
  }
  const handleClose = () => {
    setloader(false)
  }
  console.log("LabAdminRg>>>>>>>", LabAdminRg)
  const PinCodeCheck = () => {
    if (!LabAdminRg?.pincode) {
      toast.info("Please input your pincode")
    }
  }
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

        <div className='image_card_ho_ad flex'>
          <h4>Add Photos</h4>
          <div className='image_card_ho_ad2 flex' >
            <div className='image_card_ho_ad_section flex'>
              {/* <img src="images/hosptal1 (1).jpg" alt="" />
              <img src="images/hosptal1 (1).jpg" alt="" />
              <img src="images/hosptal1 (1).jpg" alt="" /> */}
              <div className='image_card_ho_ad_add_image flex'>
                <label for="inputTag">
                  <i class="ri-add-line"></i>
                  <input onChange={''} id="inputTag" type="file" />
                </label>
              </div>
            </div>

          </div>

        </div>


        <div className='hospital-second-section flex'>
          <div>
            <h4>License Number</h4>
            <input value={LabAdminRg?.lisence_no || ''} maxLength={50} onChange={inputChanges} type="text" name='lisence_no' />
          </div>

          <div>
            <h4>Features</h4>
            <button type='button' onClick={() => { openModal() }} className='hospital-second-section-Div flex'> {LabAdminRg?.features?.length > 0 ?
              <div className='hospital-second-section-Div-Map'>
                {LabAdminRg?.features?.map(ele =>
                  <h4>{ele},&nbsp; </h4>
                )}
              </div>
              : <h4>Select Features</h4>}</button>
          </div>

          <div>
            <h4>Services</h4>
            <button type='button' onClick={() => { openModal({ services: true }) }} className='hospital-second-section-Div flex'>{LabAdminRg?.Services?.length > 0 ?
              <div className='hospital-second-section-Div-Map'>
                {LabAdminRg?.Services?.map(ele =>
                  <h4>{ele},&nbsp; </h4>
                )}
              </div>
              : <h4>Select Specialties</h4>}
            </button>
          </div>


        </div>



        <div className='hospitaladminregistration_second flex' >


          <div className='flex pin-lo'>

            <div className='pin-input' >
              <h4>Pincode</h4>
              <input className='hospitalAdminInput' value={LabAdminRg?.pincode || ''} onChange={inputChanges} type="number" maxLength={6} name="pincode" />
              <div className="main-waring-section main-waring-section4 flex ">
                <p className="register-number-warning">{Errors?.pincode}</p>
              </div>
            </div>
            <div className='lo-input'>
              <h4>Location</h4>
              <select
                type="text"
                onChange={inputChanges}
                onClick={PinCodeCheck}
                value={LabAdminRg?.place ? LabAdminRg?.place : ''}
                name="place"
                className="hospitalRegTypeList"
              >
                {LabAdminRg?.location?.length > 0 &&
                  <>
                    <option
                      disabled selected value=''
                    >
                      Select place
                    </option>
                    {LabAdminRg?.location?.map((types, index) => (
                      <option style={{ color: "black" }}
                        key={index}
                        value={types?.Name}>
                        {types?.Name}
                      </option>
                    ))}
                  </>
                }

              </select>
            </div>

          </div>

          <div className='LabAdminPin flex'>


            <div className='LabAdminPinTimePic'>
              <h4 className="pass-con">Opening Time</h4>
              <TimePicker
                sx={{
                  border: '1px solid white',
                  height: '3vw',
                  color: "white"
                }}
                className='hospitalAdminPinTimePic'
                value={LabAdminRg?.timing?.opening_time ? dayjs(LabAdminRg?.timing?.opening_time, 'hh:mm A') : null}
                onChange={(e) => { TimeSetting(e, "opening_time") }}
              />
            </div>
            <div className='LabAdminPinTimePic'>
              <h4 className="pass-con">Closing Time</h4>
              <TimePicker sx={{
                border: '1px solid white',
                height: '3vw',
                color: "white"
              }}
                value={LabAdminRg?.timing?.closing_time ? dayjs(LabAdminRg?.timing?.closing_time, 'hh:mm A') : null}
                className='hospitalAdminPinTimePic'
                onChange={(e) => { TimeSetting(e, "closing_time") }}
              />
            </div>
          </div>

        </div>




        <div className='flex hospital-adress-about'>

          <div className=''>
            <h4 className="pass-con margin-about">About</h4>

            <textarea maxLength={500} value={LabAdminRg?.about || ''} onChange={inputChanges} name="about" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <h4>Address</h4>
            <textarea maxLength={500} value={LabAdminRg?.address || ''} onChange={inputChanges} name="address" id="" cols="30" rows="5"></textarea>
          </div>
        </div>

        <div className='ho_ad_re_button flex'>
          <button type='button' onClick={(event) => {
            event.preventDefault();
            navigate(-1);
          }} >Back</button>
          <button type='button' onClick={Finish} >Finish</button>
        </div>

      </div>

      <Modal className='Features_card_ho_Modal' open={ModalOpen?.features || ModalOpen?.services}
        onClose={CloseModal}
      >
        <>
          <div className='Features_card_ho_ad flex'>
            <div className='Features_card_ho_ad_check '>
              {ModalOpen?.features ?
                Features.map((ele) =>
                  <label class="form-control flex">
                    <input value={ele?.name || ''}
                      checked={LabAdminRg?.features?.includes(ele.name)}
                      onChange={(e) => { storeArray(e, { features: true }) }} type="checkbox" name="checkbox" />
                    <h4 className='select-new'>{ele.name}</h4>
                  </label>
                )
                :
                Services.map((ele) =>
                  <label class="form-control flex">
                    <input value={ele?.name || ''}
                      checked={LabAdminRg?.Services?.includes(ele.name)}
                      onChange={(e) => { storeArray(e, { Services: true }) }} type="checkbox" name="checkbox" />
                    <h4 className='select-new'>{ele.name}</h4>
                  </label>
                )
              }
            </div>



            <button onClick={CloseModal} className='Features_card_ho_ad_button'><h4>Submit</h4></button>
          </div>
        </>
      </Modal>


    </div >



  )
}

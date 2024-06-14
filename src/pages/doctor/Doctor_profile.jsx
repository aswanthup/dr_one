import React, { useEffect, useState } from 'react'
import '../doctor/doctor-profile.css'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { useLocation } from 'react-router-dom';
import { Modal } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallIcon from '@mui/icons-material/Call';
import axios from 'axios';
import { toast } from 'react-toastify';
import { port } from '../../config';
import moment from 'moment/moment';
export default function Doctor_profile() {
  const [currentAvailability, setcurrentAvailability] = useState([])
  const [ViewAvailabilityData, setViewAvailabilityData] = useState()
  const [open, setopen] = useState(false)
  const days = [
    "Sunday", "Monday",
    "Tuesday", "Wednesday",
    "Thursday", "Friday",
    "Saturday"
  ]
  const location = useLocation();
  const doctor = location?.state
  console.log(doctor)
  const viewDetailedData = (id) => {
    const HosData = currentAvailability?.find(ele => ele?.id === id)
    setViewAvailabilityData(HosData)
    openModal()
  }

  useEffect(() => {
    const data = {
      id: doctor?.id
    }
    if (data?.id) {
      axios.post(`${port}/hospital/consultationdata`, data).then((res) => {
        setcurrentAvailability(res.data.data)
        console.log(res)
      }).catch((err) => {
        console.log(err)
        toast.info(err?.response?.data?.message)
      })
    }
    if (doctor?.id) {
      const data = {
        userid: 7,
        id: doctor?.id,
        type: "Doctor"
      }
      axios.post(`${port}/user/viewcount`, data).then((res) => {
        console.log("res>>>>", res)
      })
    }
  }, [])
  console.log("currentAvailability>>>>>", currentAvailability)

  const openModal = () => {
    setopen(!open)
  }
  const storedLoginData = localStorage.getItem("loginData")
  const LoggedData = JSON.parse(storedLoginData);
  const cunsultNow = () => {
    const data = {
      userid: 6,
      id: doctor?.id,
      type: "Doctor",
      status: "P"
    }
    axios.post(`${port}/user/consultcount`, data).then((res) => {
      console.log("res>>>>", res)
    })
  }

  console.log("ViewAvailabilityData>>>>", ViewAvailabilityData)
  return (
    <div>
      <Navbar />
      <div className='Doctor_profileAlign'>

        <div className="container Doctor_profileAlignCenter">
          <div className="doctor-profile-section">

            <div className="doctor-profile-photo">
              <img src={doctor?.image || `images/doc.jpg`} alt="" />
            </div>
            <div className="doctor-profile-left-right flex">
              <div className="doctor-profile-left flex">
                <h2 style={{ color: 'white' }}>{doctor?.name}</h2>
                <div className="doctorprofilestar flex">
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                </div>

                <h4> {doctor?.education_qualification || `BDS.MDS-Prosthodontist`} </h4>
                <h4>  {new Date().getFullYear() - (doctor?.experience || new Date().getFullYear())}
                  <span style={{ paddingLeft: 4 }}>
                    Year Experience
                  </span></h4>
                <h4> {doctor?.specialization || `Dentist,Cosmetic`}</h4>
              </div>
              <div className="doctor-profile-right">
                <h4>
                  {doctor?.about || "Dr. Rohith Rajashekhar is a Dentist,Restorative Dentist and Cosmetic/Aesthetic Dentist in T Dasarahalli, Bangalore and has an experience of 6 years in these fields. Dr. Rohith Rajashekhar practices at Partha Dental Skin Hair in T Dasarahalli, Bangalore. He completed BDS from Rajiv Gandhi University of Health Sciences in 2017 and MDS - Prosthodontist And Crown Bridge from Rajiv Gandhi University of Health Sciences in 2022"}
                </h4>
              </div>
            </div>

          </div>
          <div className='DoctorAvailableSec'>
            <div className='DoctorAvailableAvailableTag'>
              <p>Available</p>
            </div>
            <div className='DoctorAvailableAvailableSec'>
              {currentAvailability?.map(ele =>
                <div className='DoctorAvailableSecSettingSec'>
                  <div className='DoctorAvailableTiming'>
                    <p>{ele?.hospital_name}</p>
                    <div className='DoctorAvailableTimingDays'>
                      {days.map((day, index) =>
                        <p style={{ color: ele?.days_timing?.find(mapday => mapday?.day === day && mapday?.availableTimes?.find(data => data?.startTime !== "" && data?.endTime !== "")) ? 'blue' : "grey" }}>{day.slice(0, 3)}<span>{index === days?.length - 1 ? '' : ","}</span></p>
                      )}
                    </div>
                  </div>
                  <button onClick={() => { viewDetailedData(ele?.id) }}>View Details</button>
                </div>
              )}

            </div>

          </div>


          <div className='doc_profileSecFeedBack'>

            <h2 clas>Rating & Reviews</h2>
            <div className='doc_profileSecFeedBackAndRatingBox'>
              <div className='doc_profileSecFeedBackAndRatingBoxFlex'>
                <h1>5K</h1>
                <p>Total Reviews</p>
              </div>
              <div className='doc_profileSecFeedBackAndRatingBoxFlex'>
                <h1>4.6</h1>
                <p>Average Rating</p>
              </div>
            </div>

            <div className='doc_profileSecFeedBackStart'>
              <div className='doc_profileSecFeedBItem'>
                <div className='doc_profileSecFeedBItemImgSec'>
                  <img src="./images/TempDocImg.jpg" alt="" />
                </div>
                <div className='doc_profileSecFeedBItemImgSec'>
                  <div className='doc_profileSecFeedBItemImgSecFlex'>
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                  </div>
                  <p> 2/4/2024</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus voluptatibus reiciendis quos commodi quasi quidem nam eos nobis voluptatem ullam at vero veniam nostrum doloribus magni illum, possimus modi?</p>
                  <div className='doc_profileSecFeedBIFlexName'>
                    <i class="ri-checkbox-circle-line"></i>
                    <h4>Haseeb</h4>
                  </div>
                </div>
              </div>
            </div>


          </div>



        </div>

        <Modal open={open} onClose={openModal} className='doc_profileModal'>
          <>
            <div className='doc_profileSec'>
              <div className='doc_profileFirstTag'>
                <p>{ViewAvailabilityData?.hospital_name}</p>
              </div>
              <div className='doc_profileModalLocSec'>
                <LocationOnOutlinedIcon id="doc_profileModalLocSecIcon" />
                <p>
                  Shop No 3, Empire House, Irla, S V Road, Vile Parle West, Mumbai - 400056 (Opposite Irla Petrol Pump)
                </p>
              </div>
              <div className='doc_profileModalLocTimingSec'>
                {ViewAvailabilityData?.days_timing?.map(ele =>
                  ele?.availableTimes?.find(CheckTime => CheckTime?.startTime && CheckTime?.endTime) ?
                    <div className='doc_profileModalLocTimging'>
                      <button>{ele?.day.slice(0, 3)}</button>
                      <div className='doc_profileModalLocTimgingGap'>
                        {ele?.availableTimes.map(timing =>
                          <p>{moment(timing?.startTime).format('LT')} to {moment(timing?.endTime).format('LT')}
                          </p>
                        )}
                      </div>
                    </div>
                    : ''

                )}


              </div>
              <div className='doc_profileModalAlignCont'>
                <a href={`tel:91${doctor?.phone_no}`} onClick={cunsultNow} >
                  <CallIcon id="doc_profileModalBtnIcon" />
                  Contact now</a>
              </div>
            </div>
          </>
        </Modal>

      </div>

      <Footer />


    </div >

  )
}

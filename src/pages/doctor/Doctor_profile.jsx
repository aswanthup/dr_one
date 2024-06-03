import React, { useState } from 'react'
import '../doctor/doctor-profile.css'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { useLocation } from 'react-router-dom';
import { Modal } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallIcon from '@mui/icons-material/Call';
export default function Doctor_profile() {
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
  const viewDetailedData = (data) => {
    const id = data?.id
    openModal()
  }

  const openModal = () => {
    setopen(!open)
  }
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
              <div className='DoctorAvailableSecSettingSec'>
                <div className='DoctorAvailableTiming'>
                  <p>Caritas hospital, Kotayam</p>
                  <div className='DoctorAvailableTimingDays'>
                    {days.map((day, index) =>
                      <p>{day.slice(0, 3)}<span>{index === days?.length - 1 ? '' : ","}</span></p>
                    )}
                  </div>
                </div>
                <button onClick={() => { viewDetailedData() }}>View Details</button>
              </div>
              <div className='DoctorAvailableSecSettingSec'>
                <div className='DoctorAvailableTiming'>
                  <p>Caritas hospital, Kotayam</p>
                  <div className='DoctorAvailableTimingDays'>
                    {days.map((day, index) =>
                      <p>{day.slice(0, 3)}<span>{index === days?.length - 1 ? '' : ","}</span></p>
                    )}
                  </div>
                </div>
                <button>View Details</button>
              </div>
              <div className='DoctorAvailableSecSettingSec'>
                <div className='DoctorAvailableTiming'>
                  <p>Caritas hospital, Kotayam</p>
                  <div className='DoctorAvailableTimingDays'>
                    {days.map((day, index) =>
                      <p>{day.slice(0, 3)}<span>{index === days?.length - 1 ? '' : ","}</span></p>
                    )}
                  </div>
                </div>
                <button>View Details</button>
              </div>
            </div>

          </div>
        </div>

        <Modal open={open} onClose={openModal} className='doc_profileModal'>
          <>
            <div className='doc_profileSec'>
              <div className='doc_profileFirstTag'>
                <p>Caritas hospital, Kotayam</p>
              </div>
              <div className='doc_profileModalLocSec'>
                <LocationOnOutlinedIcon id="doc_profileModalLocSecIcon" />
                <p>
                  Shop No 3, Empire House, Irla, S V Road, Vile Parle West, Mumbai - 400056 (Opposite Irla Petrol Pump)
                </p>
              </div>
              <div className='doc_profileModalLocTimingSec'>
                <div className='doc_profileModalLocTimging'>
                  <button>Sun</button>
                  <p>10.00 am to 11.00 pm
                  </p>
                </div>
                <div className='doc_profileModalLocTimging'>
                  <button>Sun</button>
                  <p>10.00 am to 11.00 pm
                  </p>
                </div>
                <div className='doc_profileModalLocTimging'>
                  <button>Sun</button>
                  <p>10.00 am to 11.00 pm
                  </p>
                </div>
                <div className='doc_profileModalLocTimging'>
                  <button>Sun</button>
                  <p>10.00 am to 11.00 pm
                  </p>
                </div>
              </div>
              <div className='doc_profileModalAlignCont'>
                <button>
                  <CallIcon id="doc_profileModalBtnIcon" />
                  Contact now</button>
              </div>
            </div>
          </>
        </Modal>

      </div>

      <Footer />


    </div>

  )
}

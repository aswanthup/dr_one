import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import '../Labs/labs.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Headroom from 'react-headroom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { services } from './LabFIltering/constatnts/Filter';
import axios from 'axios';
import { port } from '../../config';

export default function Labs() {
  const navigate = useNavigate()
  const [position, setPosition] = useState({})
  const [LabServicesData, setLabServicesData] = useState([])
  useEffect(() => {
    let labServicesInd = 0;
    let AllopathyUpdatingBatch = [];
    services.forEach((ele, index) => {
      if (!AllopathyUpdatingBatch[labServicesInd] || AllopathyUpdatingBatch[labServicesInd].length < 4) {
        AllopathyUpdatingBatch[labServicesInd] = [...(AllopathyUpdatingBatch[labServicesInd] || []), ele];
      } else {
        labServicesInd += 1;
        AllopathyUpdatingBatch[labServicesInd] = [ele];
      }
      setLabServicesData(AllopathyUpdatingBatch)
    });
  }, [])
  console.log(LabServicesData)
  const navigateElements = (value) => {
    console.log("value>>>>>", value)
    navigate("/labfiltering", { state: { services: value } })
  }
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting geolocation: ', error);
        }
      );
    } else {
      console.log('Geolocation is not available in your browser.');
    }
  }, []);

  const handleSearchData = async (type, speciality) => {
    try {
      const { id } = JSON.parse(localStorage.getItem("loginData")) || {};
      const data = {
        user_id: 15 || "",
        speciality: speciality || "",
        type: type || "",
      };
      const response = await axios.post(`${port}/lab/lab_searchdata`, data);
      console.log(response)
    } catch (err) {
      console.error(err)

    }
  };


  return (
    <div>

      <Headroom>
        <Navbar />
      </Headroom>

      <div className='desktoplab'>

        <div className="container labs-banner flex">
          <div>
            <h1 style={{ color: 'white' }}>
              Find Your <span className="color-blue"> Labs From</span> </h1>
            <h1 style={{ color: 'white' }}>  Your Location </h1>
          </div>

          {/* Search Box */}



          <div className="Lab-search-box flex">
            <div className="Lab-container-search flex">
              <div onClick={() => { navigate('/labfiltering') }} className="Lab-Search-box flex">
                <div className="Lab-location-section flex">
                  <i className="ri-map-pin-2-line" />
                  <input className="Lab-Location-input" type="text" placeholder='Select your location' />

                </div>
                <div className="Lab-search-input flex">
                  <input type="text" placeholder="Search Labs " />
                </div>
                <div className="Lab-search-section flex">
                  <i className="ri-search-2-line" />
                </div>
              </div>

            </div>

          </div>




        </div>




        {/*End Search box */}


        <div className="container health-concern">
          <div className="second-main-head">
            <h1>Find Test by <span className="color-blue">Health Concern</span></h1>
          </div>
          <div className="health-concern flex">
            <div onClick={() => handleSearchData("Allopathy", "General medicine")} className="home-specialties-card flex">
              <div className="home-specialties-image">
                <img src="/images/1 (2).jpg" alt="" />
              </div>
              <div className="home-specialties-titile">
                <h4>Fever</h4>
              </div>
            </div>
            <div className="home-specialties-card flex">
              <div className="home-specialties-image">
                <img src="/images/1 (6).jpg" alt="" />
              </div>
              <div className="home-specialties-titile">
                <h4>Diabetes</h4>
              </div>
            </div>
            <div className="home-specialties-card flex">
              <div className="home-specialties-image">
                <img src="/images/1 (4).jpg" alt="" />
              </div>
              <div className="home-specialties-titile">
                <h4>Skin</h4>
              </div>
            </div>
            <div className="home-specialties-card flex">
              <div className="home-specialties-image">
                <img src="/images/1 (5).jpg" alt="" />
              </div>
              <div className="home-specialties-titile">
                <h4>Kidney</h4>
              </div>
            </div>
            <div className="home-specialties-card flex">
              <div className="home-specialties-image">
                <img src="/images/1 (2).jpg" alt="" />
              </div>
              <div className="home-specialties-titile">
                <h4>Digestion</h4>
              </div>
            </div>
          </div>
        </div>






        <div className="diagnostic container">
          <div className="second-main-head">
            <h1>Top Booked <span className="color-blue">Diagnostic Test</span></h1>
          </div>




          <Swiper navigation={

            {
              nextEl: ".nextButton",
              prevEl: ".prevButton"
            }
          } modules={[Navigation]} className="mySwiper">
            {LabServicesData.map(ServiceEle =>
              <SwiperSlide>
                <div className='lab-diagnostic-cards-Map'>
                  {ServiceEle.map(ele =>
                    <div onClick={() => { navigateElements(ele); handleSearchData(ele) }} className="lab-diagnostic-cards flex">
                      <div className="lab-diagnostic-card">
                        <h2>{ele}</h2>
                        <div className="lab-diagnostic-paragraph">
                          <h4>Generate Lorem Ipsum favorite writing, design and blogging tools. Explore the origins,
                            history and meaning of the famous pa
                          </h4>
                        </div>
                        <div className="flex lab-price-section">
                          <h2>₹ 456</h2>
                          {/* <a href>
                        <h4 className="lab-diagnostic-button">Add</h4>
                      </a> */}
                        </div>
                      </div>
                    </div>)}
                </div>

              </SwiperSlide>
            )}



          </Swiper>


          <div className='swiper-new-buttons flex'>
            <button className='prevButton'><i class="ri-arrow-left-fill"></i></button>
            <button className='nextButton'><i class="ri-arrow-right-fill"></i></button>
          </div>

        </div>





        <div className=" container Featured-partner">
          <div className="second-main-head">
            <h1>Our <span className="color-blue">Featured</span>Partners</h1>
          </div>
        </div>

      </div>



      <div className='container mobilelab'>

        <div className="labs-banner flex">
          <div>
            <h1 style={{ color: 'white' }}>
              Find Your <span className="color-blue"> Labs From</span> </h1>
            <h1 style={{ color: 'white' }}>  Your Location </h1>
          </div>

          {/* Search Box */}








        </div>

        <div onClick={() => navigate("/searchdoctor")} className="hospital-search-box flex">

          <div className="Hospital-container-search flex">
            <div className="Hospital-Search-box flex">
              <div className="Hospital-location-section flex">
                <i className="ri-map-pin-2-line" />
                <input className="Hospital-Location-input" type="text" placeholder='Select your location' />
              </div>
              <input className="Hospital-search-input" type="text" placeholder="Search Doctor" />
              <div className="Hospital-search-section flex">
                <i className="ri-search-2-line" />
              </div>
            </div>

          </div>

        </div>

        <div className="mobile-doctor-specialties">
          <div className="mobile-second-heading">
            <h1>
              Find Test by<span className="color-blue ">Health Concern</span>
            </h1>
          </div>

          <div className="mobile-specialties-card mobile-specialties-card flex">
            <div className="mobile-specialties-image">
              <img src="images/lab2.jpg" alt="" />
            </div>

            <div className="mobile-specialties-data flex">
              <h4>Period doubts or</h4>
              <h4> Pregnancy</h4>
              <a href="">
                <h4 className="mobile-specialties-button">Consult Now</h4>
              </a>
            </div>
          </div>

          <div className="mobile-specialties-card2 mobile-specialties-card flex">
            <div className="mobile-specialties-image">
              <img src="images/lab2.jpg" alt="" />
            </div>

            <div className="mobile-specialties-data flex">
              <h4>Period doubts or</h4>
              <h4> Pregnancy</h4>
              <a href="">
                <h4 className="mobile-specialties-button">Consult Now</h4>
              </a>
            </div>
          </div>

          <div className="mobile-specialties-card2 mobile-specialties-card flex">
            <div className="mobile-specialties-image">
              <img src="images/lab2.jpg" alt="" />
            </div>

            <div className="mobile-specialties-data flex">
              <h4>Period doubts or</h4>
              <h4> Pregnancy</h4>
              <a href="">
                <h4 className="mobile-specialties-button">Consult Now</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="mobile-second-heading">
          <h1>
            Top Booked<span className="color-blue ">Diagnostic Tests</span>
          </h1>
        </div>

        <div className="diagnostic-card">
          <h2>Gastroscopy</h2>
          <div className="diagnostic-paragraph">
            <h4>
              Generate Lorem Ipsum favorite writing, design and blogging
              tools. Explore the origins, history and meaning of the famous pa
            </h4>
          </div>
          <div className="flex price-section">
            <h2>₹ 456</h2>
            <a href>
              <h4 className="diagnostic-button">Add</h4>
            </a>
          </div>
        </div>

        <div className="diagnostic-card diagnostic-card2 ">
          <h2>Gastroscopy</h2>
          <div className="diagnostic-paragraph">
            <h4>
              Generate Lorem Ipsum favorite writing, design and blogging
              tools. Explore the origins, history and meaning of the famous pa
            </h4>
          </div>
          <div className="flex price-section">
            <h2>₹ 456</h2>
            <a href>
              <h4 className="diagnostic-button">Add</h4>
            </a>
          </div>
        </div>


      </div>
      <Footer />

    </div>
  )
}

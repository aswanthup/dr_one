import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Headroom from "react-headroom";
import "../Labs/labdetails.css";


import { useLocation, useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ChatBot from "../../components/ChatBot/ChatBot";
import { services } from "../Labs/LabFIltering/constatnts/Filter";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { ayurSpec, homeoDept, speacializationNames, types } from "../doctor/constants/filter";
import axios from "axios";
export default function Mainpage() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [locationData, setlocationData] = useState('');

  const navigate = useNavigate()
  const location = useLocation();
  const [selectTypes, setselectTypes] = useState({
    [types?.[0]]: true
  })
  const [SpecialisationBatch, setSpecialisationBatch] = useState([])

  console.log("selectTypes>>", selectTypes)
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, [location?.pathname]);
  const navigateElements = (value) => {
    navigate("/labfiltering", { state: { services: value } })
  }

  const clickChangeTypes = (data) => {
    setselectTypes({
      [data]: true
    })
  }

  useEffect(() => {
    if (selectTypes?.Allopathy) {
      let settingAllopathy = 0;
      let AllopathyUpdatingBatch = [];
      speacializationNames.forEach((ele, index) => {
        if (!AllopathyUpdatingBatch[settingAllopathy] || AllopathyUpdatingBatch[settingAllopathy].length < 12) {
          AllopathyUpdatingBatch[settingAllopathy] = [...(AllopathyUpdatingBatch[settingAllopathy] || []), ele];
        } else {
          settingAllopathy += 1;
          AllopathyUpdatingBatch[settingAllopathy] = [ele];
        }
        setSpecialisationBatch(AllopathyUpdatingBatch)
      });
    } else if (selectTypes.Ayurvedic) {
      let settingAllopathy = 0;
      let AllopathyUpdatingBatch = [];
      ayurSpec.forEach((ele, index) => {
        if (!AllopathyUpdatingBatch[settingAllopathy] || AllopathyUpdatingBatch[settingAllopathy].length < 12) {
          AllopathyUpdatingBatch[settingAllopathy] = [...(AllopathyUpdatingBatch[settingAllopathy] || []), ele];
        } else {
          settingAllopathy += 1;
          AllopathyUpdatingBatch[settingAllopathy] = [ele];
        }
        setSpecialisationBatch(AllopathyUpdatingBatch)
      });
    }
    else if (selectTypes.Homeopathy) {
      let settingAllopathy = 0;
      let AllopathyUpdatingBatch = [];
      homeoDept.forEach((ele, index) => {
        if (!AllopathyUpdatingBatch[settingAllopathy] || AllopathyUpdatingBatch[settingAllopathy].length < 12) {
          AllopathyUpdatingBatch[settingAllopathy] = [...(AllopathyUpdatingBatch[settingAllopathy] || []), ele];
        } else {
          settingAllopathy += 1;
          AllopathyUpdatingBatch[settingAllopathy] = [ele];
        }
        setSpecialisationBatch(AllopathyUpdatingBatch)
      });
    } else {
      setSpecialisationBatch()
    }
  }, [selectTypes])
  const renderHosFilteringBYSpeciality = (Value) => {
    if (speacializationNames.includes(Value?.speciality)) {
      navigate("/hospitalfilter", { state: { speciality: Value?.speciality, type: "Allopathy" } })
    } else if (ayurSpec.includes(Value?.speciality)) {
      navigate("/hospitalfilter", { state: { speciality: Value?.speciality, type: "Ayurvedic" } })
    } else if (homeoDept.includes(Value?.speciality)) {
      navigate("/hospitalfilter", { state: { speciality: Value?.speciality, type: "Homeopathy" } })
    }
  }
  console.log("SpecialisationBatch>>>>>", SpecialisationBatch)


  // Measure page render time
  useEffect(() => {
    const t0 = performance.now();

    const handleLoad = () => {
      const t1 = performance.now();
      console.log(`Page rendered in ${t1 - t0} milliseconds`);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Get geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setError(null);
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  // Fetch address from coordinates
  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error('Error fetching address:', error);
        });
    }
  }, [latitude, longitude]);


  console.log("location>>>", latitude, longitude)



  return (
    <div>

      <Headroom>
        <Navbar />
      </Headroom>

      <div>
        <div className="desktop">
          {/* Navbar */}

          <ChatBot />
          {/*End Navbar */}
          {/* Hero section */}
          <div className="container-second hero-main2 flex">

            <div className="hero2left flex">

              <div>
                <h1>Wellness Wise: <span>Your</span> Path to</h1>
                <h1>Better <span>Health</span></h1>
              </div>
              <div><h4>A doctor is a medical professional who diagnoses, treats, and prevents illnesses, injuries, and various medical conditions in individuals. Doctors play a crucial role in maintaining and improving the health and well-being of their patients. </h4></div>

              <div className="main_bts flex">
                <a href="/doctor" className="main_btns flex"><h4>Find Doctor</h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg></a>
                <a href="/hospital" className="main_btns flex"><h4>Find Hospital</h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg></a>
                <a href="/labs" className="main_btns flex"><h4>Find Labs</h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg></a>
                {/* <a href="" className="main_btns flex"><h4>Find Pharmacy</h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg></a> */}
              </div>

            </div>

            <div className="hero2right flex">
              <img src="images/mainImgForLandingPage.jpg" alt="" />
            </div>

          </div>


          <div className="hero_images wrapper">
            <div class="track">
              <div className="logo"><img src="images/main (1).jpg" alt="" /></div>
              <div className="logo"><img src="images/main (2).jpg" alt="" /></div>
              <div className="logo"><img src="images/main (4).jpg" alt="" /></div>
              <div className="logo"><img src="images/main (3).jpg" alt="" /></div>
              <div className="logo"><img src="images/main (5).jpg" alt="" /></div>
              <div className="logo"><img src="images/main (6).jpg" alt="" /></div>
              <div className="logo"><img src="images/ph1 (1).jpg" alt="" /></div>
            </div>
          </div>


          <div className=" container-second Specialties">
            <div className="second-main-head second-main-head2 flex">
              <h1>
                Our <span>Specialities</span>
              </h1>

              <div className="explore-more">
                <a href="/searchdoctor">
                  <h4>Explore More</h4>
                </a>
              </div>
            </div>

            <div className="home-specialties-cards flex">
              <div className="home-specialties-card hide flex">
                <div className="home-specialties-image" data-aos="zoom-out" >
                  <img src="/images/banner-web-01.png" alt="" />
                </div>
                <div className="home-specialties-titile">
                  <h4>Cold, Cough or</h4>
                  <h4>Fever</h4>
                </div>
                <div className="home-specialties-button">
                  <a href="">
                    <h4>Find doctor</h4>
                  </a>
                </div>
              </div>

              <div className="home-specialties-card flex">
                <div className="home-specialties-image" data-aos="zoom-out" >
                  <img src="/images/1 (2).jpg" alt="" />
                </div>
                <div className="home-specialties-titile">
                  <h4>Period doubts or</h4>
                  <h4>Pregnancy</h4>
                </div>
                <a className="home-specialties-button" href="">
                  <h4>Find doctor</h4>
                </a>
              </div>

              <div className="home-specialties-card flex">
                <div className="home-specialties-image" data-aos="zoom-out" >
                  <img src="/images/1 (6).jpg" alt="" />
                </div>
                <div className="home-specialties-titile">
                  <h4>Acne, pimple or</h4>
                  <h4>skin issues</h4>
                </div>
                <a className="home-specialties-button" href="">
                  <h4>Find doctor</h4>
                </a>
              </div>

              <div className="home-specialties-card hide flex">
                <div className="home-specialties-image" data-aos="zoom-out" >
                  <img src="/images/banner-web-01.png" alt="" />
                </div>
                <div className="home-specialties-titile">
                  <h4>Cold, Cough or</h4>
                  <h4>Fever</h4>
                </div>
                <a className="home-specialties-button" href="">
                  <h4>Find doctor</h4>
                </a>
              </div>
            </div>

            <div
              className="home-specialties-cards flex"
              style={{ marginTop: "5vh" }}
            >
              <div className="home-specialties-card flex">
                <div className="home-specialties-image" data-aos="zoom-out" >
                  <img src="/images/1 (1).jpg" alt="" />
                </div>
                <div className="home-specialties-titile">
                  <h4>Cold, Cough or</h4>
                  <h4>Fever</h4>
                </div>
                <a className="home-specialties-button" href="">
                  <h4>Find doctor</h4>
                </a>
              </div>

              <div className="home-specialties-card flex">
                <div className="home-specialties-image" data-aos="zoom-out" >
                  <img src="/images/1 (4).jpg" alt="" />
                </div>
                <div className="home-specialties-titile">
                  <h4>Depression or</h4>
                  <h4>Anxiety</h4>
                </div>
                <a className="home-specialties-button" href="">
                  <h4>Find doctor</h4>
                </a>
              </div>

              <div className="home-specialties-card flex">
                <div className="home-specialties-image" data-aos="zoom-out">
                  <img src="/images/1 (2).jpg" alt="" />
                </div>
                <div className="home-specialties-titile">
                  <h4>Cold, Cough or</h4>
                  <h4>Fever</h4>
                </div>
                <a className="home-specialties-button" href="">
                  <h4>Find doctor</h4>
                </a>
              </div>

              <div className="home-specialties-card flex">
                <div className="home-specialties-image" data-aos="zoom-out" >
                  <img src="/images/1 (5).jpg" alt="" />
                </div>
                <div className="home-specialties-titile">
                  <h4>Child not feeling</h4>
                  <h4>well</h4>
                </div>
                <a className="home-specialties-button" href="">
                  <h4>Find doctor</h4>
                </a>
              </div>
            </div>
          </div>
          {/*End Specialties */}
          {/* Lab Tests */}




          <div className="MainPageTypeAndSpeciality">
            <div className="MainPageTypeAndSpecialityImgSec">
              <div className="second-main-head second-main-head2 flex">
                <h1>
                  Select our <span>Types</span> and <span>Specialities</span>
                </h1>
              </div>

              <div className="MainPageTypeAndSpecialityImgSecAlign">
                <img src="/images/SecImg.jpg" className="MainPageTypeAndSpecialityImg" alt="" />
                <div className="MainPageTypeAndSpecialityContentSec">
                  <div className="MainPageTypeAndSpecialityContentType">
                    {types.map(ele =>
                      // ele !== "Others" ?
                      <div onClick={() => { clickChangeTypes(ele) }} className={selectTypes[ele] ? "MainPageTypeAndSpeTypeFlex MainPageTypeAndSpeTypeFlexselected " : "MainPageTypeAndSpeTypeFlex"}>
                        <p>{ele}</p>
                        <ArrowCircleRightOutlinedIcon id="MainPageTypeAndSpeTypeIcon" />
                      </div>
                      // : ''
                    )}
                  </div>
                  <div className="MainPageTypeAndSpecialityContentServices">
                    {SpecialisationBatch?.map((ele) =>
                      <div className='spec_main_cards_align flex'>
                        {ele?.map(speciality =>
                          <div onClick={() => { renderHosFilteringBYSpeciality({ speciality: speciality }) }} className='spec_main_card flex'>
                            <h4>{speciality}</h4>
                            <div className='spec_main_card_button flex'>
                              <i class="ri-arrow-right-line"></i>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="container-second home-lab">
            <div className="second-main-head">
              <h1>
                Popular <span>lab tests</span> &amp; profiles
              </h1>
            </div>

            <div onClick={() => { navigate('/labfiltering') }} className="lab-content flex" data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aos-duration="3000">
              <div className="lab-left">
                <div className="home-lab-title">
                  <h2>HEALTH TEST AT YOUR HOME</h2>
                </div>
                <div className="lab-datas flex">
                  <div className="lab-data-left flex">
                    <div>
                      <i className="ri-arrow-right-circle-line" />
                    </div>
                    <a href></a>
                    <h4>
                      <a href>CBC(Complete Blood Count)</a>
                    </h4>
                  </div>
                  <div className="lab-data-right flex">
                    <div>
                      <i className="ri-arrow-right-circle-line" />
                    </div>
                    <a href></a>
                    <h4>
                      <a href>Thyroid Profile Total(T3, T4 &amp; TSH)</a>
                    </h4>
                  </div>
                </div>
                <div className="lab-datas flex">
                  <div className="lab-data-left flex">
                    <div>
                      <i className="ri-arrow-right-circle-line" />
                    </div>
                    <a href></a>
                    <h4>
                      <a href>LFT (Liver Function Test)</a>
                    </h4>
                  </div>
                  <div className="lab-data-right flex">
                    <div>
                      <i className="ri-arrow-right-circle-line" />
                    </div>
                    <a href></a>
                    <h4>
                      <a href>Diabetes Screening (HbA1C &amp; Fasting Sugar)</a>
                    </h4>
                  </div>
                </div>
                <div className="lab-datas flex">
                  <div className="lab-data-left flex">
                    <div>
                      <i className="ri-arrow-right-circle-line" />
                    </div>
                    <a href></a>
                    <h4>
                      <a href>Lipid Profile</a>
                    </h4>
                  </div>
                  <div className="lab-data-right flex">
                    <div>
                      <i className="ri-arrow-right-circle-line" />
                    </div>
                    <a href></a>
                    <h4>
                      <a href>COVID-RTPCR</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="lab-right">
                <div className="home-lab-title">
                  <h2>VISIT A LAB NEAR YOU</h2>
                </div>
                <div className="lab-datas flex">
                  <div className="lab-data-left flex">
                    <div>
                      <i className="ri-arrow-right-circle-line" />
                    </div>
                    <a href></a>
                    <h4>
                      <a href>Ultrasound Whole Abdomen</a>
                    </h4>
                  </div>
                  <div className="lab-data-right flex">
                    <div>
                      <i className="ri-arrow-right-circle-line" />
                    </div>
                    <a href></a>
                    <h4>
                      <a href>Electrocardiography</a>
                    </h4>
                  </div>
                </div>
                <div className="lab-datas flex">
                  <div className="lab-data-left flex">
                    <div>
                      <i className="ri-arrow-right-circle-line" />
                    </div>
                    <a href></a>
                    <h4>
                      <a href>X-Ray Chest PA View</a>
                    </h4>
                  </div>
                  <div className="lab-data-right flex">
                    <div>
                      <i className="ri-arrow-right-circle-line" />
                    </div>
                    <a href></a>
                    <h4>
                      <a href>MRI Brain</a>
                    </h4>
                  </div>
                </div>
                <div className="lab-datas flex">
                  <div className="lab-data-left flex">
                    <div>
                      <i className="ri-arrow-right-circle-line" />
                    </div>
                    <a href></a>
                    <h4>
                      <a href>NCCT Scan Brain</a>
                    </h4>
                  </div>
                  <div className="lab-data-right flex">
                    <div>
                      <i className="ri-arrow-right-circle-line" />
                    </div>
                    <a href></a>
                    <h4>
                      <a href>MRI Cervical Spine</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Lab tests */}



          {/* Diagnostic */}
          <div className="container-second diagnostic">
            <div className="second-main-head second-main-head2 flex">
              <h1>
                Top Booked <span> Diagnostic</span> Tests
              </h1>
              <div className="explore-more">
                <a href="/labfiltering">
                  <h4>Explore More</h4>
                </a>
              </div>
            </div>

            <div className="diagnostic-cards flex">
              {services.map((ele, index) =>
                index < 4 ?
                  <div onClick={() => { navigateElements(ele) }} className="diagnostic-card">
                    <h2>{ele}</h2>
                    <div className="diagnostic-paragraph">
                      <h4>
                        Generate Lorem Ipsum favorite writing, design and blogging
                        tools. Explore the origins, history and meaning of the
                        famous pa
                      </h4>
                    </div>
                    <div className="flex price-section">
                      <h2>₹ 456</h2>
                      {/* <a href>
                    <h4 className="diagnostic-button">Add</h4>
                  </a> */}
                    </div>
                  </div>
                  : ""

              )

              }
            </div>
          </div>
          {/*End Diagnostic */}
          {/* Footer */}

          {/*End Footer */}
        </div>

        {/* Mobile Screen */}

        <div className="mobile-screen container">
          <ChatBot />
          <div className="mobhead">
            <h1>Wellness Wise: <span>Your</span> </h1>
            <h1>Path to</h1>
            <h1>Better <span>Health</span></h1>
          </div>

          <div className="hero2mobile flex">
            <img src="images\mainright.png" alt="" />
          </div>



          <div><h4>A doctor is a medical professional who diagnoses, treats, and prevents illnesses, injuries, and various medical conditions in individuals. Doctors play a crucial role in maintaining and improving the health and well-being of their patients. </h4></div>




          {/* Search Bar */}

          {/*End Search Bar */}

          {/* Features */}

          <div className="mobile-second-heading">
            <h1>
              Explore our <span className="color-blue "> Features</span>
            </h1>
          </div>

          <div className="mobile-features-card flex">
            <div className="mobile-features-button">
              <a href="">
                <h4>Search Doctor</h4>
              </a>
            </div>
          </div>

          <div className="mobile-features-card2 flex">
            <div className="mobile-features-button">
              <a href="">
                <h4>Find Labs</h4>
              </a>
            </div>
          </div>

          <div className="mobile-features-card3 flex">
            <div className="mobile-features-button">
              <a href="">
                <h4>Get Medicines</h4>
              </a>
            </div>
          </div>

          <div className="mobile-features-card4 flex">
            <div className="mobile-features-button">
              <a href="">
                <h4>Search Hospital</h4>
              </a>
            </div>
          </div>
          {/*End Features */}

          {/* Specialties */}
          <div className="mobile-second-heading">
            <h1>
              Our <span className="color-blue ">Specialties</span>
            </h1>
          </div>

          <div className="mobile-specialties-card flex">
            <div className="mobile-specialties-image">
              <img src="images/lab2.jpg" alt="" />
            </div>

            <div className="mobile-specialties-data flex">

              <h4>Period doubts or</h4>
              <h4> Pregnancy</h4>
              <a href="">
                <h4 className="mobile-specialties-button">Find doctor</h4>
              </a>


            </div>
          </div>

          <div className="mobile-specialties-card mobile-specialties-card2 flex">
            <div className="mobile-specialties-image">
              <img src="images/lab2.jpg" alt="" />
            </div>

            <div className="mobile-specialties-data flex">
              <h4>Period doubts or</h4>
              <h4> Pregnancy</h4>
              <a href="">
                <h4 className="mobile-specialties-button">Find doctor</h4>
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
                <h4 className="mobile-specialties-button">Find doctor</h4>
              </a>


            </div>
          </div>

          {/* End Specialties */}





          {/* tests */}
          <div className="mobile-second-heading">
            <h1>
              Popular<span className="color-blue ">Lab Tests</span>&Profiles
            </h1>
          </div>

          <div className="mobile-test">
            <h2 style={{ color: "white" }}>HEALTH TEST AT YOUR HOME</h2>

            <div className="lab-data-left flex">
              <div>
                <i className="ri-arrow-right-circle-line" />
              </div>
              <a href>
                <h4>CBC(Complete Blood Count)</h4>
              </a>
            </div>

            <div className="lab-data-left flex">
              <div>
                <i className="ri-arrow-right-circle-line" />
              </div>
              <a href>
                <h4>CBC(Complete Blood Count)</h4>
              </a>
            </div>

            <div className="lab-data-left flex">
              <div>
                <i className="ri-arrow-right-circle-line" />
              </div>
              <a href>
                <h4>CBC(Complete Blood Count)</h4>
              </a>
            </div>

            <div className="lab-data-left flex">
              <div>
                <i className="ri-arrow-right-circle-line" />
              </div>
              <a href>
                <h4>CBC(Complete Blood Count)</h4>
              </a>
            </div>

            <div className="lab-data-left flex">
              <div>
                <i className="ri-arrow-right-circle-line" />
              </div>
              <a href>
                <h4>CBC(Complete Blood Count)</h4>
              </a>
            </div>

            <div className="lab-data-left flex">
              <div>
                <i className="ri-arrow-right-circle-line" />
              </div>
              <a href>
                <h4>CBC(Complete Blood Count)</h4>
              </a>
            </div>

            <div className="lab-data-left flex">
              <div>
                <i className="ri-arrow-right-circle-line" />
              </div>
              <a href>
                <h4>CBC(Complete Blood Count)</h4>
              </a>
            </div>
          </div>

          <div className="mobile-test mobile-test2">
            <h2 style={{ color: "white" }}>VISIT A LAB NEAR YOU</h2>

            <div className="lab-data-left flex">
              <div>
                <i className="ri-arrow-right-circle-line" />
              </div>
              <a href>
                <h4>CBC(Complete Blood Count)</h4>
              </a>
            </div>

            <div className="lab-data-left flex">
              <div>
                <i className="ri-arrow-right-circle-line" />
              </div>
              <a href>
                <h4>CBC(Complete Blood Count)</h4>
              </a>
            </div>

            <div className="lab-data-left flex">
              <div>
                <i className="ri-arrow-right-circle-line" />
              </div>
              <a href>
                <h4>CBC(Complete Blood Count)</h4>
              </a>
            </div>

            <div className="lab-data-left flex">
              <div>
                <i className="ri-arrow-right-circle-line" />
              </div>
              <a href>
                <h4>CBC(Complete Blood Count)</h4>
              </a>
            </div>

            <div className="lab-data-left flex">
              <div>
                <i className="ri-arrow-right-circle-line" />
              </div>
              <a href>
                <h4>CBC(Complete Blood Count)</h4>
              </a>
            </div>

            <div className="lab-data-left flex">
              <div>
                <i className="ri-arrow-right-circle-line" />
              </div>
              <a href>
                <h4>CBC(Complete Blood Count)</h4>
              </a>
            </div>

            <div className="lab-data-left flex">
              <div>
                <i className="ri-arrow-right-circle-line" />
              </div>
              <a href>
                <h4>CBC(Complete Blood Count)</h4>
              </a>
            </div>
          </div>

          {/*End tests */}

          {/* Diagnostic */}

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

          {/*End Diagnostic */}

          {/* search box */}
          {/* End saerch box */}
        </div>
      </div>

      <Footer />
    </div >
  );
}

import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Headroom from "react-headroom";
import "../Labs/labdetails.css";


import { useLocation, useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ChatBot from "../../components/ChatBot/ChatBot";

export default function Mainpage() {
  const navigate = useNavigate()
  const handleSearch = () => {


  };

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, [location.pathname]);
  return (
    <div>
      <div>
        <div className="desktop">
          {/* Navbar */}

          <Headroom>
            <Navbar />
          </Headroom>

          {/* <ChatBot /> */}
          {/*End Navbar */}
          {/* Hero section */}
          <div className="container-second hero-main">
            <div className="hero">
              <h1>Find the good life by</h1>
              <h1>good health</h1>
            </div>
            {/* Search Box */}
            <div className="container container-search flex">
              <div className="Search-box flex">
                <div className="location-section flex">
                  <i className="ri-map-pin-2-line" />

                  <input
                    className="Location-input"
                    type="text"
                    placeholder="Kozhikode"
                  />
                </div>
                <input
                  onChange={handleSearch}
                  className="search-input"
                  type="text"
                  placeholder="Search Doctor,Labs,Hospitals,Pharmacy"
                />
                <div className="search-section flex">
                  <i className="ri-search-2-line" />
                </div>
              </div>
            </div>
          </div>
          {/*End Search box */}

          {/*End Hero */}
          {/* Features */}
          <div className="container-second Features">
            <div className="second-main-head">
              <h1>
                Explore Our <span>Features</span>
              </h1>
            </div>
            <div className="home-cards flex ">
              <div className="home-card" data-aos="zoom-in" data-aos-duration="3000" >
                <div className="image-section">
                  <img src="/images/doc.jpg" alt="" />
                </div>
                <div className="button-section flex">
                  <div className="card-icon flex">
                    <img src="images/doc-icon.svg" alt="" />
                  </div>
                  <a onClick={() => { navigate("/searchdoctor") }} className="card-button flex" href>
                    <h4>Search Doctor</h4>
                  </a>
                </div>
              </div>
              <div className="home-card" data-aos="zoom-in" data-aos-duration="3000">
                <div className="image-section">
                  <img src="/images/lab.jpg" alt="" />
                </div>
                <div className="button-section flex">
                  <div className="card-icon flex">
                    <img src="images/test.png" alt="" />
                  </div>
                  <a onClick={() => { navigate("/labfiltering") }} className="card-button flex" href>
                    <h4>Find Labs</h4>
                  </a>
                </div>
              </div>
              <div className="home-card" data-aos="zoom-in" data-aos-duration="3000">
                <div className="image-section">
                  <img src="/images/med.jpg" alt="" />
                </div>
                <div className="button-section flex">
                  <div className="card-icon flex">
                    <img src="images/med1.svg" alt="" />
                  </div>
                  <a className="card-button flex" >
                    <h4>Get Medicines</h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="home-hospital flex" data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aos-duration="3000">
              <div className="home-hospital-images flex">
                <img src="/images/hosptal1 (1).jpg" alt="" />
                <img src="/images/hosptal1 (2).jpg" alt="" />
                <img src="/images/hosptal1 (3).jpg" alt="" />
              </div>
              <div className="home-hospital-title">
                <h2>
                  Find Best <span>Hospital</span>
                </h2>
                <h2>Near You</h2>
              </div>
              <div className="home-hospital-button flex">
                <a onClick={() => { navigate("/hospitalfilter") }} href=" " className="card-button flex">
                  <h4>Hospital</h4>
                </a>
              </div>
            </div>
          </div>
          {/*End Features */}
          {/* Specialties */}
          <div className=" container-second Specialties">
            <div className="second-main-head second-main-head2 flex">
              <h1>
                Our <span>Specialties</span>
              </h1>

              <div className="explore-more">
                <a href="">
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
                    <h4>Consult Now</h4>
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
                  <h4>Consult Now</h4>
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
                  <h4>Consult Now</h4>
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
                  <h4>Consult Now</h4>
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
                  <h4>Consult Now</h4>
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
                  <h4>Consult Now</h4>
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
                  <h4>Consult Now</h4>
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
                  <h4>Consult Now</h4>
                </a>
              </div>
            </div>
          </div>
          {/*End Specialties */}
          {/* Lab Tests */}
          <div className="container-second home-lab">
            <div className="second-main-head">
              <h1>
                Popular <span>lab tests</span> &amp; profiles
              </h1>
            </div>

            <div className="lab-content flex" data-aos="fade-up"
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
                <a href="">
                  <h4>Explore More</h4>
                </a>
              </div>
            </div>

            <div className="diagnostic-cards flex">
              <div className="diagnostic-card">
                <h2>Gastroscopy</h2>
                <div className="diagnostic-paragraph">
                  <h4>
                    Generate Lorem Ipsum favorite writing, design and blogging
                    tools. Explore the origins, history and meaning of the
                    famous pa
                  </h4>
                </div>
                <div className="flex price-section">
                  <h2>₹ 456</h2>
                  <a href>
                    <h4 className="diagnostic-button">Add</h4>
                  </a>
                </div>
              </div>
              <div className="diagnostic-card">
                <h2>Electrocardiogram</h2>
                <div className="diagnostic-paragraph">
                  <h4>
                    Generate Lorem Ipsum favorite writing, design and blogging
                    tools. Explore the origins, history and meaning of the
                    famous pa
                  </h4>
                </div>
                <div className="flex price-section">
                  <h2>₹ 556</h2>
                  <a href>
                    <h4 className="diagnostic-button">Add</h4>
                  </a>
                </div>
              </div>
              <div className="diagnostic-card">
                <h2>Electrocardiogram</h2>
                <div className="diagnostic-paragraph">
                  <h4>
                    Generate Lorem Ipsum favorite writing, design and blogging
                    tools. Explore the origins, history and meaning of the
                    famous pa
                  </h4>
                </div>
                <div className="flex price-section">
                  <h2>₹ 556</h2>
                  <a href>
                    <h4 className="diagnostic-button">Add</h4>
                  </a>
                </div>
              </div>
              <div className="diagnostic-card">
                <h2>Electrocardiogram</h2>
                <div className="diagnostic-paragraph">
                  <h4>
                    Generate Lorem Ipsum favorite writing, design and blogging
                    tools. Explore the origins, history and meaning of the
                    famous pa
                  </h4>
                </div>
                <div className="flex price-section">
                  <h2>₹ 556</h2>
                  <a href>
                    <h4 className="diagnostic-button">Add</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*End Diagnostic */}
          {/* Footer */}

          {/*End Footer */}
        </div>

        {/* Mobile Screen */}
        <div className="mobile-screen container">
          <div className="mobile-hero-section">
            <img src="images/mobile.png" alt="" />
          </div>

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
                <h4 className="mobile-specialties-button">Consult Now</h4>
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
    </div>
  );
}

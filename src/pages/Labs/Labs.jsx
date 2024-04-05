import React from 'react'
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

export default function Labs() {
  const navigate = useNavigate()

  return (
    <div>

      <Headroom className='head'>
        <Navbar />
      </Headroom>

      <div>

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
                  <input className="Lab-Location-input" type="text" placeholder='Kozhikode' />

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
            <div className="home-specialties-card flex">
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
            <h1>Top Booked <span className="color-blue">Diagnotic Test</span></h1>
          </div>




          <Swiper navigation={

            {
              nextEl: ".nextButton",
              prevEl: ".prevButton"
            }
          } modules={[Navigation]} className="mySwiper">
            <SwiperSlide>


              <div className="lab-diagnostic-cards flex">


                <div className="lab-diagnostic-card">
                  <h2>Gastroscopy</h2>
                  <div className="lab-diagnostic-paragraph">
                    <h4>Generate Lorem Ipsum favorite writing, design and blogging tools. Explore the origins,
                      history and meaning of the famous pa
                    </h4>
                  </div>
                  <div className="flex lab-price-section">
                    <h2>₹ 456</h2>
                    <a href>
                      <h4 className="lab-diagnostic-button">Add</h4>
                    </a>
                  </div>
                </div>


                <div className="lab-diagnostic-card">
                  <h2>Electrocardiogram</h2>
                  <div className="lab-diagnostic-paragraph">
                    <h4>Generate Lorem Ipsum favorite writing, design and blogging tools. Explore the origins,
                      history and meaning of the famous pa
                    </h4>
                  </div>
                  <div className="flex lab-price-section">
                    <h2>₹ 416</h2>
                    <a href>
                      <h4 className="lab-diagnostic-button">Add</h4>
                    </a>
                  </div>
                </div>



                <div className="lab-diagnostic-card">
                  <h2>Electrocardiogram</h2>
                  <div className="lab-diagnostic-paragraph">
                    <h4>Generate Lorem Ipsum favorite writing, design and blogging tools. Explore the origins,
                      history and meaning of the famous pa
                    </h4>
                  </div>
                  <div className="flex lab-price-section">
                    <h2>₹ 786</h2>
                    <a href>
                      <h4 className="diagnostic-button">Add</h4>
                    </a>
                  </div>
                </div>




                <div className="diagnostic-card">
                  <h2>Electrocardiogram</h2>
                  <div className="diagnostic-paragraph">
                    <h4>Generate Lorem Ipsum favorite writing, design and blogging tools. Explore the origins,
                      history and meaning of the famous pa
                    </h4>
                  </div>
                  <div className="flex price-section">
                    <h2>₹ 876</h2>
                    <a href>
                      <h4 className="diagnostic-button">Add</h4>
                    </a>
                  </div>
                </div>


              </div>

            </SwiperSlide>

            <SwiperSlide>
              <div className="lab-diagnostic-cards flex">


                <div className="diagnostic-card">
                  <h2>Gastroscopy</h2>
                  <div className="diagnostic-paragraph">
                    <h4>Generate Lorem Ipsum favorite writing, design and blogging tools. Explore the origins,
                      history and meaning of the famous pa
                    </h4>
                  </div>
                  <div className="flex price-section">
                    <h2>₹ 236</h2>
                    <a href>
                      <h4 className="diagnostic-button">Add</h4>
                    </a>
                  </div>
                </div>


                <div className="diagnostic-card">
                  <h2>Gastroscopy</h2>
                  <div className="diagnostic-paragraph">
                    <h4>Generate Lorem Ipsum favorite writing, design and blogging tools. Explore the origins,
                      history and meaning of the famous pa
                    </h4>
                  </div>
                  <div className="flex price-section">
                    <h2>₹ 780</h2>
                    <a href>
                      <h4 className="diagnostic-button">Add</h4>
                    </a>
                  </div>
                </div>



                <div className="diagnostic-card">
                  <h2>Gastroscopy</h2>
                  <div className="diagnostic-paragraph">
                    <h4>Generate Lorem Ipsum favorite writing, design and blogging tools. Explore the origins,
                      history and meaning of the famous pa
                    </h4>
                  </div>
                  <div className="flex price-section">
                    <h2>₹ 890</h2>
                    <a href>
                      <h4 className="diagnostic-button">Add</h4>
                    </a>
                  </div>
                </div>




                <div className="diagnostic-card">
                  <h2>Gastroscopy</h2>
                  <div className="diagnostic-paragraph">
                    <h4>Generate Lorem Ipsum favorite writing, design and blogging tools. Explore the origins,
                      history and meaning of the famous pa
                    </h4>
                  </div>
                  <div className="flex price-section">
                    <h2>₹ 120</h2>
                    <a href>
                      <h4 className="diagnostic-button">Add</h4>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

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

      <Footer />

    </div>
  )
}

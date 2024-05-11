import React from 'react'
import '../Hospital/hospital.css'
import Headroom from 'react-headroom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
export default function Hospital() {
  const navigate = useNavigate()

  const SearchHostpital = () => {
    navigate("/hospitalfilter")
  }


  return (

    <>
      {/* <Headroom>
        <Navbar />
      </Headroom> */}
      <div className='hospital_web'>
        <Headroom>
          <Navbar />
        </Headroom>
        <div className='container hospital_web'>

          <div className="hospital-head-section flex">
            <div className="hospital-heading flex">

              <h1>Find <span className='color-blue'>Hospitals </span>From</h1>
              <h1>Your Location</h1>
            </div>

            {/*Hospital Search Box */}

            <div className="hospital-search-box flex">

              <div onClick={SearchHostpital} className="Hospital-container-search flex">
                <div className="Hospital-Search-box flex">
                  <div className="Hospital-location-section flex">

                    <i className="ri-map-pin-2-line" />

                    <input className="Hospital-Location-input" type="text" placeholder='Kozhikode' />

                  </div>
                  <input className="Hospital-search-input" type="text" placeholder="Search Hospitals" />
                  <div className="Hospital-search-section flex">
                    <i className="ri-search-2-line" />
                  </div>
                </div>

              </div>

            </div>


          </div>

          <div className="hospital-banner-section">
            <img src="images/hos.jpeg" alt="" />
          </div>


          {/* Medical field */}

          <div className='medical_field flex'>
            <div className='medical_left flex'>

              <div>
                <h1>Find Hospital by</h1>
                <h1><span className='color-blue'>Medical Field</span></h1>
              </div>


              <div>

                <div className='medical_images_1'>

                </div>

                <a href='' className='medical_data_1 flex'>

                  <div className='flex new'>
                    <h4>Allopathy</h4>
                    <i class="ri-arrow-right-circle-line"></i>
                  </div>


                </a>

              </div>

              <div>

                <div className='medical_images_1 medical_images_2'>

                </div>

                <a href='' className='medical_data_1 flex'>

                  <div className='flex new'>
                    <h4>Homeopathy</h4>
                    <i class="ri-arrow-right-circle-line"></i>
                  </div>


                </a>

              </div>



            </div>



            <div className='medical_image flex'>
              <img src="images/do.jpg" alt="" />
            </div>



            <div className='medical_right flex'>

              <div className='new2'>

                <div className='medical_images_1 medical_images_3'>

                </div>

                <a href='' className='medical_data_1 flex'>

                  <div className='flex new'>
                    <h4>Unani</h4>
                    <i class="ri-arrow-right-circle-line"></i>
                  </div>


                </a>

              </div>


              <div>

                <div className='medical_images_1 medical_images_4'>

                </div>

                <a href='' className='medical_data_1 flex'>

                  <div className='flex new'>
                    <h4>Ayurvedic</h4>
                    <i class="ri-arrow-right-circle-line"></i>
                  </div>


                </a>

              </div>

              <div>

                <div className='medical_images_1 medical_images_5'>

                </div>

                <a href='' className='medical_data_1 flex'>

                  <div className='flex new'>
                    <h4>Other</h4>
                    <i class="ri-arrow-right-circle-line"></i>
                  </div>


                </a>

              </div>



            </div>







          </div>


          {/*End Medical field */}

          <div className="second-main-head">
            <h1>Find Hospital by <span className="color-blue">Specialties </span></h1>
          </div>


          <div className='doctor_spe'>

          </div>




          <div className='doctor_spec flex'>

            <div className='doctor_spec_card'>

              <div className='spec_main_cards flex'>

                <div className='spec_main_card flex'>

                  <h4>Gynaecology</h4>

                  <div className='spec_main_card_button flex'>

                    <i class="ri-arrow-right-line"></i>

                  </div>

                </div>



                <div className='spec_main_card flex'>

                  <h4>Dermatology</h4>

                  <div className='spec_main_card_button flex'>

                    <i class="ri-arrow-right-line"></i>

                  </div>

                </div>


                <div className='spec_main_card flex'>

                  <h4>General medicine</h4>

                  <div className='spec_main_card_button flex'>

                    <i class="ri-arrow-right-line"></i>

                  </div>

                </div>



              </div>


              <div className='spec_main_cards spec_main_cards2 flex'>

                <div className='spec_main_card flex'>

                  <h4>Mental health</h4>

                  <div className='spec_main_card_button flex'>

                    <i class="ri-arrow-right-line"></i>

                  </div>

                </div>



                <div className='spec_main_card flex'>

                  <h4>Pediatrics</h4>

                  <div className='spec_main_card_button flex'>

                    <i class="ri-arrow-right-line"></i>

                  </div>

                </div>


                <div className='spec_main_card flex'>

                  <h4>Cardiology</h4>

                  <div className='spec_main_card_button flex'>

                    <i class="ri-arrow-right-line"></i>

                  </div>

                </div>



              </div>

              <div className='spec_main_cards spec_main_cards2 flex'>

                <div className='spec_main_card flex'>

                  <h4>Orthopedic</h4>

                  <div className='spec_main_card_button flex'>

                    <i class="ri-arrow-right-line"></i>

                  </div>

                </div>



                <div className='spec_main_card flex'>

                  <h4>Neurology</h4>

                  <div className='spec_main_card_button flex'>

                    <i class="ri-arrow-right-line"></i>

                  </div>

                </div>


                <div className='spec_main_card flex'>

                  <h4>Pulmonology</h4>

                  <div className='spec_main_card_button flex'>

                    <i class="ri-arrow-right-line"></i>

                  </div>

                </div>



              </div>




              <div className='spec_main_cards spec_main_cards2 flex'>

                <div className='spec_main_card flex'>

                  <h4>Gastrology</h4>

                  <div className='spec_main_card_button flex'>

                    <i class="ri-arrow-right-line"></i>

                  </div>

                </div>



                <div className='spec_main_card flex'>

                  <h4>Ophthalmology</h4>

                  <div className='spec_main_card_button flex'>

                    <i class="ri-arrow-right-line"></i>

                  </div>

                </div>


                <div className='spec_main_card flex'>

                  <h4>ENT</h4>

                  <div className='spec_main_card_button flex'>

                    <i class="ri-arrow-right-line"></i>

                  </div>

                </div>



              </div>

            </div>




          </div>


          {/* Featured Partner */}
          <div className="second-main-head">
            <h1>Our <span className='color-blue '>Featured</span> Partner</h1>
          </div>


          {/* End Featured Partner */}





        </div>
      </div >



      {/* Mobile Screen */}

      < div className="container hospital_mobile_screen" >

        <div className="mobile-second-heading">
          <h1>Find <span className='color-blue '>Hospitals </span>From</h1>
          <h1>Your Location</h1>
        </div>

        {/*Hospital Search Box */}

        <div className="hospital-search-box flex">

          <div onClick={() => { navigate('/hospitalfilter') }} className="Hospital-container-search flex">
            <div className="Hospital-Search-box flex">
              <div className="Hospital-location-section flex">

                <i className="ri-map-pin-2-line" />

                <input className="Hospital-Location-input" type="text" placeholder='Kozhikode' />

              </div>
              <input className="Hospital-search-input" type="text" placeholder="Search Hospitals" />
              <div className="Hospital-search-section flex">
                <i className="ri-search-2-line" />
              </div>
            </div>

          </div>

        </div>

        {/*End Hospital Search Box */}
        <div className="hospital-banner-section_mobile hospital-banner-section">
          <img src="images/hos.jpeg" alt="" />
        </div>

        <div className="mobile-second-heading">
          <h1>Find Hospitals by </h1>
          <h1><span className='color-blue '>Medical Field</span></h1>
        </div>

        <div className='medical_img flex'>
          <img src="images/do.jpg" alt="" />
        </div>


        <div className='medical_field_mobile flex'>

          <div>
            <div className='medical_images_mobile'>
              <img src="images/do.jpg" alt="" />
            </div>

            <a href='' className='medical_data_1_mobile flex'>

              <div className='flex new'>
                <h4>Homeopathy</h4>
                <i class="ri-arrow-right-circle-line"></i>
              </div>

            </a>

          </div>


          <div>
            <div className='medical_images_mobile'>
              <img src="images/do.jpg" alt="" />
            </div>

            <a href='' className='medical_data_1_mobile flex'>

              <div className='flex new'>
                <h4>Homeopathy</h4>
                <i class="ri-arrow-right-circle-line"></i>
              </div>

            </a>

          </div>


        </div>

        <div className='medical_field_mobile flex'>

          <div>
            <div className='medical_images_mobile'>
              <img src="images/do.jpg" alt="" />
            </div>

            <a href='' className='medical_data_1_mobile flex'>

              <div className='flex new'>
                <h4>Homeopathy</h4>
                <i class="ri-arrow-right-circle-line"></i>
              </div>

            </a>

          </div>


          <div>
            <div className='medical_images_mobile'>
              <img src="images/do.jpg" alt="" />
            </div>

            <a href='' className='medical_data_1_mobile flex'>

              <div className='flex new'>
                <h4>Homeopathy</h4>
                <i class="ri-arrow-right-circle-line"></i>
              </div>

            </a>

          </div>


        </div>






        <div className="mobile-second-heading">
          <h1>Find Hospitals by </h1>
          <h1><span className='color-blue '>Specialties</span></h1>
        </div>

        <div className='spec_main_card flex'>

          <h4>Neurology</h4>

          <div className='spec_main_card_button flex'>

            <i class="ri-arrow-right-line"></i>

          </div>

        </div>


        <div className='spec_main_card flex'>

          <h4>Neurology</h4>

          <div className='spec_main_card_button flex'>

            <i class="ri-arrow-right-line"></i>

          </div>

        </div>

        <div className='spec_main_card flex'>

          <h4>Neurology</h4>

          <div className='spec_main_card_button flex'>

            <i class="ri-arrow-right-line"></i>

          </div>

        </div>

        <div className="mobile-second-heading">

          <h1>Our<span className='color-blue '>Featured</span>Partner</h1>
        </div>



      </div >



      {/*End Mobile Screen */}



















      < Footer />
    </>
  )
}

import React from 'react'
import '../Hospital/hospital.css'
import Headroom from 'react-headroom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Hospital() {




  return (

    <>
<Headroom>
<Navbar /> 
</Headroom>

    <div className='container'>

        <div className="hospital-head-section flex">
          <div className="hospital-heading flex">
               
         <h1>Find <span className='color-blue'>Hospitals </span>From</h1>
        <h1>Your Location</h1>
          </div>

{/*Hospital Search Box */}

          <div className="hospital-search-box flex">

          <div className="Hospital-container-search flex">
            <div className="Hospital-Search-box flex">
              <div className="Hospital-location-section flex">
                
                <i className="ri-map-pin-2-line" />

                <input className="Hospital-Location-input" type="text" placeholder='Kozhikode'/>
                
                </div>
              <input className="Hospital-search-input" type="text" placeholder="Search Hospitals" />
              <div className="Hospital-search-section flex">
                <i className="ri-search-2-line" />
              </div>
            </div>

          </div>

          </div>

{/*End Hospital Search Box */}

        </div>

        <div className="hospital-banner-section">
          <img src="images/hos.jpeg" alt="" />
        </div>







    </div>
<Footer />
    </>
  )
}

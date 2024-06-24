import React from 'react'
import '../doctor/doctorlist.css'

import Navbar from '../../components/Navbar'
import Headroom from 'react-headroom'
import Footer from '../../components/Footer'

export default function Doctorlist() {
  return (
    <div>
      <div>
        {/* Navbar */}
        <Headroom>
          <Navbar />
        </Headroom>

        {/*End Navbar */}
        <div className="container-third">
          {/* Search Box */}
          <div className="container container-search flex">
            <div className="Search-box flex">
              <div className="location-section flex"><i className="ri-map-pin-2-line" /><h4>Kozikode</h4></div>
              <input className="search-input" type="text" placeholder="Search doctor,labs,hospitals,pharmacys" />
              <div className="search-section flex">
                <i className="ri-search-2-line" />
              </div>
            </div>
          </div>
          {/*End Search box */}
          <div className="doctor-list-section flex">
            <div className="doctor-list-image">
              <img src="images/doc.jpg" alt="" />
            </div>
            <div className="main-list-button flex">
              <div className="doctor-list-data flex">
                <h3>Dr.Rohith Rajashekher</h3>
                <div className="doctor-list-star flex">
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                </div>
                <h4>Dentist, Cosmetic/Aesthetic Dentist</h4>
                <h4>6 Year Experience</h4>
              </div>
              <div className="doctor-list-button flex">
                <div>
                  <h4>Available</h4>
                  <a href><h4 className="details-button">Details</h4></a>
                </div>
              </div>
            </div>
          </div>
          <div className="doctor-list-section flex">
            <div className="doctor-list-image">
              <img src="images/doc.jpg" alt="" />
            </div>
            <div className="main-list-button flex">
              <div className="doctor-list-data flex">
                <h3>Dr.Rohith Rajashekher</h3>
                <div className="doctor-list-star flex">
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                </div>
                <h4>Dentist, Cosmetic/Aesthetic Dentist</h4>
                <h4>6 Year Experience</h4>
              </div>
              <div className="doctor-list-button flex">
                <div>
                  <h4>Available</h4>
                  <a href><h4 className="details-button">Details</h4></a>
                </div>
              </div>
            </div>
          </div>
          <div className="doctor-list-section flex">
            <div className="doctor-list-image">
              <img src="images/doc.jpg" alt="" />
            </div>
            <div className="main-list-button flex">
              <div className="doctor-list-data flex">
                <h3>Dr.Rohith Rajashekher</h3>
                <div className="doctor-list-star flex">
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                </div>
                <h4>Dentist, Cosmetic/Aesthetic Dentist</h4>
                <h4>6 Year Experience</h4>
              </div>
              <div className="doctor-list-button flex">
                <div>
                  <h4>Available</h4>
                  <a href><h4 className="details-button">Details</h4></a>
                </div>
              </div>
            </div>
          </div>
          <div className="doctor-list-section flex">
            <div className="doctor-list-image">
              <img src="images/doc.jpg" alt="" />
            </div>
            <div className="main-list-button flex">
              <div className="doctor-list-data flex">
                <h3>Dr.Rohith Rajashekher</h3>
                <div className="doctor-list-star flex">
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                </div>
                <h4>Dentist, Cosmetic/Aesthetic Dentist</h4>
                <h4>6 Year Experience</h4>
              </div>
              <div className="doctor-list-button flex">
                <div>
                  <h4>Available</h4>
                  <a href><h4 className="details-button">Details</h4></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

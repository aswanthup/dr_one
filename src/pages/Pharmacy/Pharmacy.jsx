import React from 'react'
import Footer from '../../components/Footer'
import Headroom from 'react-headroom';
import Navbar from '../../components/Navbar';


export default function Pharmacy() {
  return (
    <div>
      <Headroom>
        <Navbar />
      </Headroom>
      <div>
        {/* Navbar */}

        {/*End Navbar */}
        <div className="container">
          <div className="pharmacy-hero flex">
            <div className="pharmacy-image flex"><img src="images/med2.jpg" alt="" /></div>
            <div className="pharmacy-upload-section flex">
              <h1>Upload <span className="color-blue">Prescription &amp;</span></h1>
              <h1>Get<span className="color-blue"> Your Medicine</span></h1>
              <a href><h4>Upload Now</h4></a>
            </div>
          </div>
          <div className="working flex">
            <div className="pharmacy-video">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/6sPRXFtFZd0?si=7c_48dnPbyQNch7K" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <div className="pharmacy-video-text">
              <h1>How it<span className="color-blue"> Works</span></h1>
              <h4>We believe in a patient-centric approach, tailoring treatments to address individual needs and concerns. Our practice emphasizes open communication and patient education, ensuring that you are well-informed and empowered to make informed decisions about your health.</h4>
            </div>
          </div>
          <div className="pharmacy-partners">
            <h1>Our<span className="color-blue">Featured</span>Partners</h1>
          </div>
        </div>


      </div>

      <Footer />

    </div>
  )
}

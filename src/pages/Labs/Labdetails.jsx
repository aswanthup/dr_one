import React from 'react'
import Headroom from 'react-headroom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default function Labdetails() {
  return (

    
    <div>

<Headroom>
<Navbar /> 
</Headroom>
 <div>

        <div className="container-third">
          <div className="lab-details-about flex">
            <div className="lab-deatials-left">
              <img src="images/lab.jpg" alt="" />
            </div>
            <div className="lab-deatials-right flex">
              <h2>New Emprire Labs</h2>
              <div className="lab-deatails-star flex">
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
              </div>
              <div className="lab-details-location flex">
                <i className="ri-map-pin-fill" />
                <h4>Shop No 3, Empire House, Irla, S V Road, Vile Parle West, Mumbai - 400056 (Opposite Irla Petrol Pump)</h4>
              </div>
              <div className="lab-details-buttons flex">
                <a className="flex lab-details-buttons1" href><h4>9.00 am to 5 pm</h4></a>
                <a className="flex lab-details-buttons2" href><h4>Contact Now</h4></a>
              </div>
            </div>
          </div>
          <div className="lab-deatails-photos">
            <div className="lab-details-heading">
              <h2>Photos</h2>
            </div>




            <div className="lab-details-imges wrapper">
            <div class="track">

             <div><img src="images/la (1).jpg" alt="" /></div>
             <div><img src="images/la (2).jpg" alt="" /></div>
             <div><img src="images/la (3).jpg" alt="" /></div>
             <div><img src="images/la (4).jpg" alt="" /></div>
             <div><img src="images/la (1).jpg" alt="" /></div>
            </div>

            </div>



          </div>
          <div className="lab-deatails-Services">
            <div className="lab-details-heading">
              <h2>Services</h2>
            </div>
            <div>
              <div className="sevice-list flex">
                <i className="ri-arrow-right-circle-fill" />
                <h4>Laboratory</h4>
              </div>
              <div className="sevice-list flex">
                <i className="ri-arrow-right-circle-fill" />
                <h4>Micro Biology</h4>
              </div>
              <div className="sevice-list flex">
                <i className="ri-arrow-right-circle-fill" />
                <h4>Laboratory Test</h4>
              </div>
              <div className="sevice-list flex">
                <i className="ri-arrow-right-circle-fill" />
                <h4>Serology</h4>
              </div>
              <div className="sevice-list flex">
                <i className="ri-arrow-right-circle-fill" />
                <h4>Laboratory</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
<Footer />
    </div>
  )
}

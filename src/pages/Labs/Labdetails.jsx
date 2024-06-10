import React, { useEffect } from 'react'
import Headroom from 'react-headroom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useLocation } from 'react-router-dom';
import { services } from './LabFIltering/constatnts/Filter';
import axios from 'axios';


export default function Labdetails() {
  const tempImg = "images/LabTempimg.jpg"
  const location = useLocation()
  const LabDetails = location?.state?.data
  console.log("LabDetails>>>>", LabDetails)
  const cunsultNow = () => {
    const data = {
      userid: 7,
      id: LabDetails?.id,
      type: "Lab"
    }
    axios.post(`http://192.168.1.11:3003/user/consultcount`, data).then((res) => {
      console.log("res>>>>", res)
    })
  }
  useEffect(() => {
    if (LabDetails?.id) {
      const data = {
        userid: 7,
        id: LabDetails?.id,
        type: "Lab"
      }
      axios.post(`http://192.168.1.11:3003/user/viewcount`, data).then((res) => {
        console.log("res>>>>", res)
      })
    }
  }, [])

  if (LabDetails) {
    return (
      <div>
        <div className='Lab_details_Laptop'>
          <Headroom>
            <Navbar />
          </Headroom>

          <div className="container-third">
            <div className="lab-details-about flex">
              <div className="lab-deatials-left">
                <img src={LabDetails?.photo?.image1 || tempImg} alt="" />
              </div>
              <div className="lab-deatials-right flex">
                <h2>{LabDetails?.name}</h2>
                <div className="lab-deatails-star flex">
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                </div>
                <div className="lab-details-location flex">
                  <i className="ri-map-pin-fill" />
                  <h4>{LabDetails?.address}</h4>
                </div>
                <div className="lab-details-buttons flex">
                  <a className="flex lab-details-buttons1" href><h4>{LabDetails?.timing.opening_time} to {LabDetails?.timing.closing_time}</h4></a>
                  <a className="flex lab-details-buttons2" onClick={cunsultNow} href={`tel:${LabDetails?.phone_no}`}><h4>Contact Now</h4></a>
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
                {LabDetails.services.map(services =>
                  <div className="sevice-list flex">
                    <i className="ri-arrow-right-circle-fill" />
                    <h4>{services}</h4>
                  </div>
                )}
              </div>
            </div>
            <div className='doc_profileSecFeedBack'>

              <h2 clas>Rating & Reviews</h2>
              <div className='doc_profileSecFeedBackAndRatingBox'>
                <div className='doc_profileSecFeedBackAndRatingBoxFlex'>
                  <h1>5K</h1>
                  <p>Total Reviews</p>
                </div>
                <div className='doc_profileSecFeedBackAndRatingBoxFlex'>
                  <h1>4.6</h1>
                  <p>Average Rating</p>
                </div>
              </div>

              <div className='doc_profileSecFeedBackStart'>
                <div className='doc_profileSecFeedBItem'>
                  <div className='doc_profileSecFeedBItemImgSec'>
                    <img src="./images/TempDocImg.jpg" alt="" />
                  </div>
                  <div className='doc_profileSecFeedBItemImgSec'>
                    <div className='doc_profileSecFeedBItemImgSecFlex'>
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                    </div>
                    <p> 2/4/2024</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus voluptatibus reiciendis quos commodi quasi quidem nam eos nobis voluptatem ullam at vero veniam nostrum doloribus magni illum, possimus modi?</p>
                    <div className='doc_profileSecFeedBIFlexName'>
                      <i class="ri-checkbox-circle-line"></i>
                      <h4>Haseeb</h4>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>



        {/*End Lab Mobile Screen */}

        <div className='container Lab_details_mobile' >




          {/* search box */}


          {/*End search box */}

          {/* Hero */}
          <div className="lab_Pha_Mob_img" >
            <img src={LabDetails?.photo?.image1 || tempImg} alt="" />
          </div>

          {/*End Hero */}


          {/* Datas */}

          <h1>{LabDetails?.name}</h1>

          {/* <div className='lab_type'><h4>Allopathy</h4></div> */}

          <div className='lab_about'>
            <h4>
              {LabDetails?.about}
            </h4>
          </div>


          <div className='lab_location_mobile'>
            <i className="ri-map-pin-fill" />
            <h4>{LabDetails?.address}</h4>
          </div>

          <a href=''>
            <h4 className="lab_time_button_mobile flex">{LabDetails?.timing?.opening_time} to {LabDetails?.timing?.closing_time}</h4>
          </a>

          <a href={`tel:${LabDetails?.phone_no}`}>
            <h4 className="lab_time_button_mobile2 flex">Contact now</h4>
          </a>


          {/*End Datas */}

          {/* Photos */}


          {
            LabDetails?.photo?.image2 ?
              <div className="lab_Pha_Mob_img">
                <img src={LabDetails?.photo?.image2} alt="" />
              </div>
              : ''
          }

          {
            LabDetails?.photo?.image3 ?
              <div className="lab_Pha_Mob_img">
                <img src={LabDetails?.photo?.image3} alt="" />
              </div>
              : ''
          }
          {
            LabDetails?.photo?.image4 ?
              <div className="lab_Pha_Mob_img">
                <img src={LabDetails?.photo?.image4} alt="" />
              </div>
              : ''
          }



          {/*End Photos */}




          {/*End Lab Mobile Screen */}








        </div >


        <Footer />
      </div >
    )
  } else {
    return (
      <div>
        <p>No datas found</p>
      </div>
    )
  }
}

